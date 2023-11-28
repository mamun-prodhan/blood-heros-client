import { Badge, Button, Dropdown, Spinner, Table } from "flowbite-react";
import useMyDonationRequest from "../../../hooks/useMyDonationRequest";
import useProfile from "../../../hooks/useProfile";
import { Link } from "react-router-dom";

const UserHome = () => {
  const [loggedInUser] = useProfile();
  const [myDonationRequest] = useMyDonationRequest();
  console.log(myDonationRequest);

  return (
    <div>
      {/* user dashboard title */}
      <h3 className="text-xl text-center md:text-4xl mt-6 md:mt-0">
        Hi, Welcome{" "}
        <span className="text-bold text-[#FF6251]">
          {loggedInUser?.name ? loggedInUser.name : "Back"}
        </span>
      </h3>
      {!myDonationRequest.length > 0 && (
        <>
          <h2 className="text-3xl text-center my-20">You have no Request</h2>
        </>
      )}
      {myDonationRequest.length > 0 && (
        <div className="mt-10">
          <h3 className="text-center text-xl md:text-3xl ">Recent Donations</h3>
          <div className="overflow-x-auto mt-3 md:mt-6">
            <Table>
              <Table.Head>
                <Table.HeadCell>Recipient Name</Table.HeadCell>
                <Table.HeadCell>Recipient Location</Table.HeadCell>
                <Table.HeadCell>Donation Date</Table.HeadCell>
                <Table.HeadCell>Donation Time</Table.HeadCell>
                <Table.HeadCell>Donation Status</Table.HeadCell>
                <Table.HeadCell>Donor Name</Table.HeadCell>
                <Table.HeadCell>Donor Email</Table.HeadCell>
                <Table.HeadCell>Edit</Table.HeadCell>
                <Table.HeadCell>Delete</Table.HeadCell>
                <Table.HeadCell>View</Table.HeadCell>
                <Table.HeadCell>Action</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {myDonationRequest?.slice(0, 3).map((request) => (
                  <Table.Row
                    key={request._id}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell>{request.recipientName}</Table.Cell>
                    <Table.Cell>
                      {request.recipientDistrict}
                      {", "}
                      {request.recipientUpazila}
                    </Table.Cell>
                    <Table.Cell>{request.donationDate}</Table.Cell>
                    <Table.Cell>{request.donationTime}</Table.Cell>
                    <Table.Cell>
                      {request.donationStatus === "pending" && (
                        <Badge color="warning">{request.donationStatus}</Badge>
                      )}
                      {request.donationStatus === "inprogress" && (
                        <Badge color="info">{request.donationStatus}</Badge>
                      )}
                      {request.donationStatus === "done" && (
                        <Badge color="success">{request.donationStatus}</Badge>
                      )}
                      {request.donationStatus === "canceled" && (
                        <Badge color="failure">{request.donationStatus}</Badge>
                      )}
                    </Table.Cell>
                    <Table.Cell>
                      {request.donorName ? request.donorName : " "}
                    </Table.Cell>
                    <Table.Cell>
                      {request.donorEmail ? request.donorEmail : " "}
                    </Table.Cell>
                    <Table.Cell>
                      <Link
                        to={`/dashboard/update-donation-request/${request._id}`}
                      >
                        <Button size="xs">Edit</Button>
                      </Link>
                    </Table.Cell>
                    <Table.Cell>
                      <Button gradientMonochrome="failure" size="xs">
                        Delete
                      </Button>
                    </Table.Cell>
                    <Table.Cell>
                      <Button size="xs">View</Button>
                    </Table.Cell>
                    <Table.Cell>
                      {request.donationStatus === "inprogress" ? (
                        <Dropdown
                          size="xs"
                          label="Action"
                          dismissOnClick={false}
                        >
                          <Dropdown.Item>Done</Dropdown.Item>
                          <Dropdown.Item>Cancel</Dropdown.Item>
                        </Dropdown>
                      ) : (
                        " "
                      )}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserHome;

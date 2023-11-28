import { Button, Spinner } from "flowbite-react";
import useProfile from "../../../hooks/useProfile";
import { Link } from "react-router-dom";
// import { useEffect } from "react";

const UserProfile = () => {
  const [loggedInUser, refetch, isLoading] = useProfile();
  console.log(loggedInUser);

  // useEffect(() => {
  //   refetch();
  // }, [loggedInUser, refetch]);

  if (isLoading) {
    return (
      <div className="text-center my-40">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }

  return (
    <div>
      <div>
        <img
          className="rounded-full h-60 w-60"
          src={loggedInUser?.photo}
          alt="avatar"
        />
        <div className="space-y-3">
          <h2 className="text-4xl font-bold mt-8">{loggedInUser?.name}</h2>
          <p>
            <span className="font-bold">Email:</span> {loggedInUser?.email}
          </p>
          <p>
            <span className="font-bold">Address:</span> {loggedInUser?.district}
            ,{"  "}
            {loggedInUser?.upazila}
          </p>
          <p>
            <span className="font-bold">Blood Group:</span>{" "}
            {loggedInUser?.bloodGroup}
          </p>
          <Button gradientMonochrome="failure">
            <Link to="/dashboard/update-user-profile">Edit Profile</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

import { useForm } from "react-hook-form";
import useProfile from "../../../hooks/useProfile";
import { useState } from "react";
import useDistricts from "../../../hooks/useDistricts";
import useUpazilas from "../../../hooks/useUpazilas";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import {
  Button,
  Label,
  Select,
  Spinner,
  TextInput,
  Textarea,
} from "flowbite-react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const UpdateDonationRequest = () => {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const [loggedInUser] = useProfile();
  const [btnLoading, setBtnLoading] = useState(false);
  const [districts] = useDistricts();
  const [upazilas] = useUpazilas();
  const axiosPublic = useAxiosPublic();

  const {
    data: preData = {},
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["preData", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/donation-request/${id}`);
      return res.data;
    },
  });

  console.log("from tn predata", preData);

  const onSubmit = async (data) => {
    console.log("submit button clicked", data);
    setBtnLoading(true);
    const updatedData = {
      recipientName: data.recipientName,
      bloodGroup: data.bloodGroup,
      recipientDistrict: data.recipientDistrict,
      recipientUpazila: data.recipientUpazila,
      hospitalName: data.hospitalName,
      fullAddress: data.fullAddress,
      donationDate: data.donationDate,
      donationTime: data.donationTime,
      requestMessage: data.requestMessage,
    };
    // update donation request data on database
    const updateRes = await axiosPublic.put(
      `/update-donation-request/${id}`,
      updatedData
    );
    console.log(updateRes.data);
    if (updateRes.data.modifiedCount > 0) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Donation Request Updated Successfully`,
        showConfirmButton: false,
        timer: 1500,
      });
      setBtnLoading(false);
      refetch();
    }
  };

  if (isPending) {
    <div className="text-center my-20">
      <Spinner aria-label="Center-aligned Extra large spinner example" />
    </div>;
  }

  return (
    <div className="max-w-xl mx-auto my-10 md:my-10 px-4 md:px-0">
      <h2 className="mb-5 md:mb-10  text-center">
        <span className="text-2xl md:text-3xl lg:text-4xl uppercase font-thin text-[#FF6251] ">
          Update Donation{" "}
        </span>
        <span className="text-2xl md:text-3xl lg:text-4xl uppercase font-bold pb-2 border-b-4 border-[#FF6251] text-[#FF6251] ">
          Request
        </span>
      </h2>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/*requester name */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="requesterName" value="Requester name" />
            </div>
            <TextInput
              type="text"
              id="requesterName"
              defaultValue={loggedInUser.name}
              placeholder="Requester name"
              {...register("requesterName")}
              required
              readOnly
            />
          </div>
          {/*requester email */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="requesterEmail" value="Requester email" />
            </div>
            <TextInput
              type="email"
              id="requesterEmail"
              defaultValue={loggedInUser.email}
              placeholder="Requester email"
              {...register("requesterEmail")}
              required
              readOnly
            />
          </div>
          {/*recipient name */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="recipientName" value="Recipient name" />
            </div>
            <TextInput
              type="text"
              id="recipientName"
              placeholder="Recipient name"
              {...register("recipientName")}
              required
              defaultValue={preData.recipientName}
            />
          </div>
          {/* blood group */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="bloodGroup" value="Recipient Blood Group" />
            </div>
            <Select
              id="bloodGroup"
              required
              {...register("bloodGroup")}
              defaultValue={preData.bloodGroup}
            >
              <option disabled value="default">
                Select a category
              </option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </Select>
          </div>
          {/*recipient district */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="recipientDistrict" value="Recipient District" />
            </div>
            <Select
              id="recipientDistrict"
              required
              {...register("recipientDistrict")}
              defaultValue={preData.recipientDistrict}
            >
              {districts.map((district) => (
                <option key={district.id} value={district.name}>
                  {district.name}
                </option>
              ))}
            </Select>
          </div>
          {/*recipient upazila */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="recipientUpazila" value="Recipient Upazila" />
            </div>
            <Select
              id="recipientUpazila"
              required
              {...register("recipientUpazila")}
              defaultValue={preData.recipientUpazila}
            >
              {upazilas.map((upazila) => (
                <option key={upazila.id} value={upazila.name}>
                  {upazila.name}
                </option>
              ))}
            </Select>
          </div>
          {/*hospital name */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="hospitalName" value="Hospital name" />
            </div>
            <TextInput
              type="text"
              id="hospitalName"
              placeholder="Hospital name"
              {...register("hospitalName")}
              required
              defaultValue={preData.hospitalName}
            />
          </div>
          {/*full address */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="fullAddress" value="Full Address" />
            </div>
            <TextInput
              type="text"
              id="fullAddress"
              placeholder="Ex: Zahir Raihan Rd, Dhaka"
              {...register("fullAddress")}
              required
              defaultValue={preData.fullAddress}
            />
          </div>
          {/*donation date */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="donationDate" value="Donation Date" />
            </div>
            <TextInput
              type="date"
              id="donationDate"
              placeholder=""
              {...register("donationDate")}
              required
              defaultValue={preData.donationDate}
            />
          </div>
          {/*donation time */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="donationTime" value="Donation Time" />
            </div>
            <TextInput
              type="time"
              id="donationTime"
              placeholder=""
              {...register("donationTime")}
              required
              defaultValue={preData.donationTime}
            />
          </div>
          {/*donation time */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="requestMessage" value="Request Message" />
            </div>
            <Textarea
              id="requestMessage"
              placeholder="Write your message"
              {...register("requestMessage")}
              required
              defaultValue={preData.requestMessage}
              rows={4}
            />
          </div>

          <Button className="w-full" type="submit" gradientMonochrome="failure">
            Update Request{" "}
            {btnLoading && (
              <span className="ms-4">
                <Spinner aria-label="Extra large spinner example" size="sm" />
              </span>
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateDonationRequest;

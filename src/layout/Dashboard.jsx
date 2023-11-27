import { Button } from "flowbite-react";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { BiSolidDonateBlood } from "react-icons/bi";
import { IoIosCreate } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-[#ffb8b0]">
        <ul className="menu px-4 mt-10 space-y-4">
          <li>
            <NavLink to="/dashboard/user-home">
              <Button className="w-full" gradientMonochrome="failure">
                <FaHome className="mr-2"></FaHome>User Home
              </Button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/user-profile">
              <Button className="w-full" gradientMonochrome="failure">
                <FaUser className="mr-2"></FaUser>User Profile
              </Button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/my-donation-request">
              <Button className="w-full" gradientMonochrome="failure">
                <BiSolidDonateBlood className="mr-2"></BiSolidDonateBlood>My
                Donation Request
              </Button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/create-donation-request">
              <Button className="w-full" gradientMonochrome="failure">
                <IoIosCreate className="mr-2"></IoIosCreate>Create Donation
                Request
              </Button>
            </NavLink>
          </li>
          <span>
            <hr className="my-10"></hr>
          </span>
          <li>
            <NavLink to="/">
              <Button className="w-full" gradientMonochrome="failure">
                <FaHome className="mr-2"></FaHome>User Home
              </Button>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

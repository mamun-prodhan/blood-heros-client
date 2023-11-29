import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const ContentManagement = () => {
  return (
    <div>
      <h3 className="text-xl text-center md:text-4xl mt-6 md:mt-0">
        Manage <span className="text-bold text-[#FF6251]">Blog</span> Content
      </h3>
      <div className="flex justify-end p-5">
        <Link to="/dashboard/content-management/add-blog">
          <Button gradientMonochrome="failure">Add Blog</Button>
        </Link>
      </div>
    </div>
  );
};

export default ContentManagement;

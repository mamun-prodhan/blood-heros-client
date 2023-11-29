import { Button, Checkbox, FileInput, Label, TextInput } from "flowbite-react";

const AddBlog = () => {
  return (
    <div>
      <h3 className="text-xl text-center md:text-4xl mt-6 md:mt-0">
        Add <span className="text-bold text-[#FF6251]">Blogs</span>
      </h3>
      {/* add blog form */}
      <div className="md:max-w-[80%] mx-auto px-4 md:px-0 mt-10 md:mt-16">
        <form className="flex max-w-full flex-col gap-4">
          {/* blog title and thumbnil image */}
          <div className="flex gap-5 flex-col md:flex-row">
            <div className="flex-1">
              <div className="mb-2 block">
                <Label htmlFor="title" value="Blog Title" />
              </div>
              <TextInput
                id="title"
                type="text"
                placeholder="Your Blog Title"
                required
              />
            </div>
            <div className="flex-1">
              <div className="mb-2 block">
                <Label htmlFor="thumbnail" value="Thumbnail Image" />
              </div>
              <FileInput id="thumbnail" />
            </div>
          </div>
          {/* end blog title */}
          <div></div>
          <Button type="submit">Add Blog</Button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;

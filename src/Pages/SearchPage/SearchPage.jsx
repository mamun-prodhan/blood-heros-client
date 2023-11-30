import { Button, Label, Select } from "flowbite-react";
import useDistricts from "../../hooks/useDistricts";
import useUpazilas from "../../hooks/useUpazilas";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const SearchPage = () => {
  const [districts] = useDistricts();
  const [upazilas] = useUpazilas();
  const axiosPublic = useAxiosPublic();
  const [result, setResult] = useState([]);

  // console.log("from tn predata", preData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bloodGroup = e.target.bloodGroup.value;
    const district = e.target.district.value;
    const upazila = e.target.upazila.value;
    const searchedData = {
      bloodGroup: bloodGroup,
      district: district,
      upazila: upazila,
    };
    console.log(searchedData);

    const result = await axiosPublic.get(
      `/search?bloodGroup=${bloodGroup}&district=${district}&upazila=${upazila}`
    );
    console.log("search result", result.data);
    setResult(result.data);
  };

  return (
    <div className="max-w-xl mx-auto my-10 md:my-20 px-4 md:px-0">
      <h2 className="mb-5 md:mb-10  text-center">
        <span className="text-2xl md:text-3xl lg:text-4xl uppercase font-thin text-[#FF6251] ">
          Search{" "}
        </span>
        <span className="text-2xl md:text-3xl lg:text-4xl uppercase font-bold pb-2 border-b-4 border-[#FF6251] text-[#FF6251] ">
          Donor
        </span>
      </h2>
      <div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* blood group */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="bloodGroup" value="Blood Group" />
            </div>
            <Select id="bloodGroup" name="bloodGroup" required>
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
              <Label htmlFor="district" value="District" />
            </div>
            <Select id="district" name="district" required>
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
              <Label htmlFor="upazila" value="Upazila" />
            </div>
            <Select id="upazila" name="upazila" required>
              {upazilas.map((upazila) => (
                <option key={upazila.id} value={upazila.name}>
                  {upazila.name}
                </option>
              ))}
            </Select>
          </div>

          <Button className="w-full" type="submit" gradientMonochrome="failure">
            Search Donor
          </Button>
        </form>
      </div>
      {/* search result */}
      <div>
        {result.length > 0 && (
          <div className="mt-10">
            <p className="text-xl font-bold text-center mb-5">
              {result.length} Donor Found
            </p>
            {result.map((item) => (
              <div className="bg-red-100 p-5 mb-2" key={item._id}>
                <p>
                  <span className="font-bold">Name:</span> {item.name}
                </p>
                <p>
                  <span className="font-bold">Email:</span> {item.email}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

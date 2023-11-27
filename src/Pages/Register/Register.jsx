import { Button, FileInput, Label, Select, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({});

const Register = () => {
  const {
    register,
    handleSubmit,
    setError,
    watch,
    // reset,
    formState: { errors },
  } = useForm();
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const onSubmit = (data) => {
    console.log(data);
  };

  const validatePassword = () => {
    const password = watch("password");
    const confirmPassword = watch("confirmPassword");
    if (password === confirmPassword) {
      setPasswordMatch(true);
      return true;
    } else {
      setPasswordMatch(false);
      setError("confirmPassword", {
        type: "manual",
        message: "Password do not match",
      });
      return false;
    }
  };

  useEffect(() => {
    fetch("district.json")
      .then((res) => res.json())
      .then((data) => setDistricts(data));
  }, []);
  useEffect(() => {
    fetch("upazilas.json")
      .then((res) => res.json())
      .then((data) => setUpazilas(data));
  }, []);

  return (
    <div className="max-w-xl mx-auto my-20">
      <h2>Please Register</h2>
      <div>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* name */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your name" />
            </div>
            <TextInput
              type="text"
              id="name"
              {...register("name", { required: true })}
              placeholder="name"
            />
            {errors.name && (
              <span className="text-red-600 mt-2 text-sm font-bold">
                Name field is required
              </span>
            )}
          </div>
          {/* email */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your email" />
            </div>
            <TextInput
              type="email"
              id="email"
              {...register("email", { required: true })}
              placeholder="email"
            />
            {errors.email && (
              <span className="text-red-600 mt-2 text-sm font-bold">
                Email field is required
              </span>
            )}
          </div>
          {/* photo */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="photo" value="Your Photo" />
            </div>
            <FileInput id="photo" {...register("photo", { required: true })} />

            {errors.photo && (
              <span className="text-red-600 mt-2 text-sm font-bold">
                Your Photo field is required
              </span>
            )}
          </div>
          {/* blood group */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="bloodGroup" value="Select your Blood Group" />
            </div>
            <Select
              id="bloodGroup"
              {...register("bloodGroup", { required: true })}
            >
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </Select>
            {errors.bloodGroup && (
              <span className="text-red-600 mt-2 text-sm font-bold">
                Blood Group field is required
              </span>
            )}
          </div>
          {/* upazila */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="upazila" value="Select your Upazila" />
            </div>
            <Select id="upazila" {...register("upazila", { required: true })}>
              {upazilas.map((upazila) => (
                <option key={upazila.id} value={upazila.name}>
                  {upazila.name}
                </option>
              ))}
            </Select>
            {errors.upazila && (
              <span className="text-red-600 mt-2 text-sm font-bold">
                Upazila field is required
              </span>
            )}
          </div>
          {/* district */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="district" value="Select your District" />
            </div>
            <Select id="district" {...register("district", { required: true })}>
              {districts.map((district) => (
                <option key={district.id} value={district.name}>
                  {district.name}
                </option>
              ))}
            </Select>
            {errors.district && (
              <span className="text-red-600 mt-2 text-sm font-bold">
                District field is required
              </span>
            )}
          </div>
          {/* password */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Password" />
            </div>
            <TextInput
              type="password"
              id="password"
              {...register("password", {
                required: true,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                minLength: 6,
                maxLength: 10,
              })}
              placeholder="password"
            />
            {errors.password?.type === "required" && (
              <span className="text-red-600 mt-2 text-sm font-bold">
                Password field is required
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <p className="text-red-600 mt-2 text-sm font-bold">
                Password must have, One Uppercase, One Lowercase, One Number and
                One Special Character
              </p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-600 mt-2 text-sm font-bold">
                Password must be 6 characters
              </p>
            )}
            {errors.password?.type === "maxLength" && (
              <p className="text-red-600 mt-2 text-sm font-bold">
                Password max length is 10
              </p>
            )}
          </div>
          {/* confirmPassword */}
          <div>
            <div className="mb-2 block">
              <Label htmlFor="confirmPassword" value="Confirm Password" />
            </div>
            <TextInput
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: validatePassword,
              })}
              placeholder="confirmPassword"
            />
            {/* {errors.confirmPassword && (
              <span className="text-red-600 mt-2 text-sm font-bold">
                {errors.confirmPassword.message}
              </span>
            )} */}
            {!passwordMatch && (
              <span className="text-red-600 mt-2 text-sm font-bold">
                {" "}
                Password Do Not match
              </span>
            )}
          </div>
          <Button className="w-full" type="submit" gradientMonochrome="failure">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;

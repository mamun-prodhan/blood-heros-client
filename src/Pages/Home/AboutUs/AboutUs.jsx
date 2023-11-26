import { BiDonateBlood } from "react-icons/bi";
import { CiFaceSmile } from "react-icons/ci";
import { GiBrokenHeartZone } from "react-icons/gi";

const AboutUs = () => {
  return (
    <div className="mt-16">
      <h2 className="mb-5 md:mb-10 text-center">
        <span className="text-2xl md:text-3xl lg:text-4xl uppercase font-thin text-[#FF6251] ">
          Why should you{" "}
        </span>
        <span className="text-2xl md:text-3xl lg:text-4xl uppercase font-bold pb-2 border-b-4 border-[#FF6251] text-[#FF6251] ">
          donate
        </span>
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 p-4 md:p-0">
        <div className="border-2 border-[#feb8b0] p-6 md:p-10 space-y-3 md:space-y-6">
          <BiDonateBlood className="text-4xl md:text-5xl text-[#FF6251] "></BiDonateBlood>
          <h2 className="text-2xl md:text-3xl text-[#FF6251] ">
            Blood Saves Lives
          </h2>
          <p>
            The blood we collect from your donation will be used to create
            life-saving and treatments for those living with chronic medical
            conditions.
          </p>
        </div>
        <div className="border-2 border-[#feb8b0] p-6 md:p-10 space-y-3 md:space-y-6">
          <CiFaceSmile className="text-4xl md:text-5xl text-[#FF6251] "></CiFaceSmile>
          <h2 className="text-2xl md:text-3xl text-[#FF6251] ">
            Helping Others
          </h2>
          <p>
            Talking the time to dante your blood could literally save someones
            life. You can sleep better at night knowing you made a difference.
          </p>
        </div>
        <div className="border-2 border-[#feb8b0] p-6 md:p-10 space-y-3 md:space-y-6">
          <GiBrokenHeartZone className="text-4xl md:text-5xl text-[#FF6251] "></GiBrokenHeartZone>
          <h2 className="text-2xl md:text-3xl text-[#FF6251] ">Feel Blessed</h2>
          <p>
            You will feel good from your donation will be used to create
            life-saving and chronic medical treatments for those living with
            chronic medical lives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

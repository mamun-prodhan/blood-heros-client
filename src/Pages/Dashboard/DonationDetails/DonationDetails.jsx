import { useParams } from "react-router-dom";

const DonationDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h2 className="text-5xl font-bold text-center my-20">
        This is donation details page of ---- {id}
      </h2>
    </div>
  );
};

export default DonationDetails;

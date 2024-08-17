import { useLoaderData } from "react-router-dom";
import ViewDetail from "../../Components/ViewDetail/ViewDetail";

const ViewDetailsPage = () => {
  const details = useLoaderData();
    return (
      <div className="bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 ">
            {details.map((detail, index) => (
              <ViewDetail detail={detail} key={index}></ViewDetail>
            ))}
          </div>
        </div>
      </div>
    );
};

export default ViewDetailsPage;

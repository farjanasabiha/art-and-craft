import { useLoaderData } from "react-router-dom";
import ArtAndCraftCard from "../../Components/ArtAndCraftCard/ArtAndCraftCard";

const AllArtAndCraftItem = () => {
  const allLists = useLoaderData();
  return (
    <div className="bg-white pb-24">
      <div className="container mx-auto">
        <h1>All ArtAndCraftItem {allLists.length}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {allLists.map((allList, index) => (
            <ArtAndCraftCard allList={allList} key={index}></ArtAndCraftCard>
          ))}
        </div>
        <div className=" mx-auto text-center mt-5">
          <button className="text-[#4885f8] border border-[#4885f8] font-semibold hover:text-white transition hover:bg-[#4885f8] rounded-md px-6 py-3 text-base">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllArtAndCraftItem;
import { useLoaderData } from "react-router-dom";
import MyArtAndCraftCard from "../../Components/MyArtAndCraftCard/MyArtAndCraftCard";
import { useState } from "react";

const MyArtAndCraftList = () => {
  const allAddedLists = useLoaderData();

  const [list, setList] = useState(allAddedLists);
  const [filterData, setFilterData] = useState(allAddedLists);

  const filter = (event) => {
    const value = event.target.value;
    if (value === "yes" || value === "no") {
      setFilterData(
        list.filter((filtered) => filtered.customization === value)
      );
    } else {
      setFilterData(list); // Show all items if no filter is selected
    }
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <div className="mx-auto text-center">
          <h1 className="text-3xl font-bold pt-5 mb-3">
            My Art And Craft List
          </h1>
          <div className="mt-5">
            <select
              onChange={filter}
              className="select select-bordered w-full max-w-xs border border-[#4885f8] text-[#4885f8] hover:bg-[#4885f8] hover:text-white"
              defaultValue=""
            >
              <option disabled value="">
                Select Customization
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filterData.map((filteredList) => (
            <MyArtAndCraftCard
              allAddedList={filteredList}
              key={filteredList._id}
              list={filterData}
              setList={setFilterData}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyArtAndCraftList;

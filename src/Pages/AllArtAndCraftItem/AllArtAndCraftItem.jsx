import { useLoaderData } from "react-router-dom";
// import ArtAndCraftCard from "../../Components/ArtAndCraftCard/ArtAndCraftCard";

const AllArtAndCraftItem = () => {
  const allLists = useLoaderData();
  return (
    <div className="bg-white dark:bg-black pb-24">
      <div className="container mx-auto">
        <h1 className="text-lg dark:text-white lg:text-4xl font-semibold text-center mx-auto py-10">
          Lets See All Art And Craft Item
        </h1>

        <div>
          <div className="overflow-x-auto px-0 lg:px-32">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-black dark:text-white font-medium text-base">
                  <th>Id</th>
                  <th>SubCategory Name</th>
                  <th>User Email</th>
                  <th>Price</th>
                  <th>Customization</th>
                  <th>Item Name</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody className="dark:text-white">
                {allLists.map((allList, index) => (
                  <tr className="" key={index}>
                    <th className="border-b-[1px] border-gray-600">
                      {index + 1}
                    </th>
                    <td className="border-b-[1px] border-gray-600">
                      {allList.subCategory_name}
                    </td>
                    <td className="border-b-[1px] border-gray-600">
                      {allList.user_email}
                    </td>
                    <td className="border-b-[1px] border-gray-600">
                      {allList.price}
                    </td>
                    <td className="border-b-[1px] border-gray-600">
                      {allList.customization}
                    </td>
                    <td className="border-b-[1px] border-gray-600">
                      {allList.item_name}
                    </td>
                    <td className="border-b-[1px] border-gray-600">
                      {allList.rating}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className=" mx-auto text-center mt-10">
          <a
            href="/viewDetailsPage"
            className="text-[#4885f8] border border-[#4885f8] font-semibold hover:text-white transition hover:bg-[#4885f8] rounded-md px-6 py-3 text-base"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllArtAndCraftItem;

import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtAndCraftCard = ({ allAddedList, list, setList }) => {
  const {
    _id,
    photo,
    subCategory_name,
    item_name,
    user_name,
    user_email,
    customization,
    short_description,
    price,
    rating,
    processing_time,
    stockStatus,
  } = allAddedList;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/list/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              // Filter out the deleted item from the filtered list
              const remaining = list.filter(
                (singleList) => singleList._id !== _id
              );
              setList(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <section>
        <div className="container px-6 m-auto ">
          <div className="shadow-lg my-10 rounded-md dark:border-2 dark:border-gray-500">
            <img
              className="w-full h-full rounded-md"
              src={photo}
              alt="Photo"
            ></img>
            <div className="p-7 ">
              <p className=" font-medium leading-snug text-black dark:text-gray-200">
                <span className="font-semibold">SubCategory Name :</span>{" "}
                <span className="underline text-base font-medium   rounded-xl  capitalize">
                  {subCategory_name}
                </span>
              </p>
              <p className="font-bold text-black dark:text-gray-200 mt-3">
                Short Description :{" "}
                <span className="font-medium text-black dark:text-gray-200 rounded-xl  capitalize">
                  {short_description}
                </span>
              </p>
              <div className="flex  flex-wrap font-bold justify-start gap-5  space-x-2 text-xs text-black">
                <p className=" text-black dark:text-gray-200 py-2 text-sm font-medium leading-snug">
                  <span className="font-semibold">User Name :</span> {user_name}
                </p>
                <p className=" text-black dark:text-gray-200 py-2 text-sm font-medium leading-snug">
                  <span className="font-semibold">User Email :</span>{" "}
                  {user_email}
                </p>
              </div>
              <div className="flex  flex-wrap font-bold justify-start gap-5  space-x-2 text-xs text-black">
                <p className=" text-black dark:text-gray-200 py-2 text-sm font-medium leading-snug">
                  <span className="font-semibold">Price :</span> {price}
                </p>
                <p className=" text-black dark:text-gray-200 py-2 text-sm font-medium leading-snug">
                  <span className="font-semibold">Rating :</span> {rating}
                </p>
              </div>
              <div className="flex  flex-wrap font-bold justify-start gap-5  space-x-2 text-xs text-black">
                <p className=" text-black dark:text-gray-200 py-2 text-sm font-medium leading-snug">
                  <span className="font-semibold">Item Name :</span> {item_name}
                </p>
                <p className=" text-black dark:text-gray-200 py-2 text-sm font-medium leading-snug">
                  <span className="font-semibold">Processing time :</span>{" "}
                  {processing_time}
                </p>
              </div>

              <div className="flex flex-wrap font-bold justify-start gap-5  space-x-2 text-xs text-black">
                <p className=" text-black dark:text-gray-200 py-2 text-sm font-medium leading-snug">
                  <span className="font-semibold">Customization :</span>{" "}
                  {customization}
                </p>
                <p className=" text-black dark:text-gray-200 py-2 text-sm font-medium leading-snug">
                  <span className="font-semibold">Stock Status :</span>{" "}
                  {stockStatus}
                </p>
              </div>
              <div className="flex mt-3  flex-wrap font-bold justify-between gap-5  space-x-2 text-xs ">
                <Link
                  to={`/updatePage/${_id}`}
                  className="text-[#4885f8] border border-[#4885f8] rounded-md px-6 py-2 text-base"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(_id)}
                  className="text-[#4885f8] border border-[#4885f8] rounded-md px-6 py-2 text-base"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyArtAndCraftCard;

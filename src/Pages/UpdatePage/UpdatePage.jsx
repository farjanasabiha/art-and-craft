import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePage = () => {
  const updatePage = useLoaderData();

  const {
    _id,
    image_url,
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
  } = updatePage;

  const handleUpdateItem = (e) => {
    e.preventDefault();
    const image_url = e.target.image_url.value;
    const item_name = e.target.item_name.value;
    const subCategory_name = e.target.subCategory_name.value;
    const short_description = e.target.short_description.value;
    const price = e.target.price.value;
    const rating = e.target.rating.value;
    const customization = e.target.customization.value;
    const processing_time = e.target.processing_time.value;
    const stockStatus = e.target.stockStatus.value;
    const user_email = e.target.user_email.value;
    const user_name = e.target.user_name.value;
    const newList = {
      image_url,
      item_name,
      subCategory_name,
      short_description,
      price,
      rating,
      customization,
      processing_time,
      stockStatus,
      user_email,
      user_name,
    };
    console.log(newList);

    // send Data to the server
    fetch(`https://art-and-craft-server-lovat.vercel.app/list/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newList),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-white dark:bg-black">
      <div className="container py-14 mx-auto space-y-8">
        <h1 className="text-2xl text-black dark:text-white font-semibold text-center">
          Update Your Art And Craft Item
        </h1>

        <div className="">
          <div className="hero-content text-center mx-auto">
            <div className="card bg-base-100 w-full  shadow-lg">
              <form
                onSubmit={handleUpdateItem}
                className="card-body grid grid-cols-1 md:grid-cols-2 gap-x-10 bg-[#eeeeee] rounded-lg"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-medium">
                      Photo URL
                    </span>
                  </label>
                  <input
                    defaultValue={image_url}
                    type="text"
                    name="image_url"
                    placeholder="Photo URL"
                    className="input input-bordered text-sm text-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-medium">
                      Item Name
                    </span>
                  </label>
                  <input
                    defaultValue={item_name}
                    type="text"
                    name="item_name"
                    placeholder="Item Name"
                    className="input input-bordered text-sm text-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-medium">
                      SubCategory Name
                    </span>
                  </label>
                  <input
                    type="text"
                    defaultValue={subCategory_name}
                    name="subCategory_name"
                    placeholder="SubCategory Name"
                    className="input input-bordered text-sm text-white text-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-medium">
                      Short description
                    </span>
                  </label>
                  <input
                    type="text"
                    defaultValue={short_description}
                    name="short_description"
                    placeholder="Short description"
                    className="input input-bordered text-sm text-white text-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-medium">
                      Price
                    </span>
                  </label>
                  <input
                    type="number"
                    defaultValue={price}
                    name="price"
                    placeholder="Price"
                    className="input input-bordered text-sm text-white text-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-medium">
                      Rating
                    </span>
                  </label>
                  <input
                    type="number"
                    defaultValue={rating}
                    name="rating"
                    placeholder="Rating"
                    className="input input-bordered text-sm text-white text-white text-white"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-medium capitalize">
                      customization
                    </span>
                  </label>
                  <input
                    type="text"
                    defaultValue={customization}
                    name="customization"
                    placeholder="customization"
                    className="input input-bordered text-sm text-white text-white capitalize"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-medium capitalize">
                      processing time
                    </span>
                  </label>
                  <input
                    type="text"
                    name="processing_time"
                    defaultValue={processing_time}
                    placeholder="processing time"
                    className="input input-bordered text-sm text-white text-white capitalize"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-medium capitalize">
                      stock Status
                    </span>
                  </label>
                  <input
                    type="text"
                    name="stockStatus"
                    defaultValue={stockStatus}
                    placeholder="stock Status"
                    className="input input-bordered text-sm text-white text-white capitalize"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-medium capitalize">
                      user email
                    </span>
                  </label>
                  <input
                    type="email"
                    defaultValue={user_email}
                    name="user_email"
                    placeholder="user email"
                    className="input input-bordered text-sm text-white text-white capitalize"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-medium capitalize">
                      user name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    defaultValue={user_name}
                    placeholder="user name"
                    className="input input-bordered text-sm text-white text-white capitalize"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="add"
                    className="btn btn-primary"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePage;

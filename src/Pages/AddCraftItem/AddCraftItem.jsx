import Swal from "sweetalert2";

const AddCraftItem = () => {
  const handleItem = (e) => {
    e.preventDefault();
    const photo = e.target.photo.value;
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
      photo,
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
    fetch("https://art-and-craft-server-lovat.vercel.app/list", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newList),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className=" h-full bg-white dark:bg-black">
      <div className="container p-6 mx-auto space-y-8">
        <h1 className="text-2xl text-black dark:text-white font-semibold text-center">
          Add Your Art And Craft Item
        </h1>

        <div className="dark:border-[1px] dark:border-gray-200 rounded-xl">
          <div className="hero-content text-center mx-auto">
            <div className="card w-full shadow-2xl">
              <form
                onSubmit={handleItem}
                className="card-body grid grid-cols-1 md:grid-cols-2 gap-x-10"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-bold">
                      Photo URL
                    </span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Photo URL"
                    className="input input-bordered text-sm bg-gray-200"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-semibold">
                      Item Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="item_name"
                    placeholder="Item Name"
                    className="input input-bordered text-sm bg-gray-200"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-semibold">
                      SubCategory Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="subCategory_name"
                    placeholder="SubCategory Name"
                    className="input input-bordered text-sm bg-gray-200"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-semibold">
                      Short description
                    </span>
                  </label>
                  <input
                    type="text"
                    name="short_description"
                    placeholder="Short description"
                    className="input input-bordered text-sm bg-gray-200"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-semibold">
                      Price
                    </span>
                  </label>
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    className="input input-bordered text-sm bg-gray-200"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-semibold">
                      Rating
                    </span>
                  </label>
                  <input
                    type="number"
                    name="rating"
                    placeholder="Rating"
                    className="input input-bordered text-sm bg-gray-200"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-semibold capitalize">
                      customization
                    </span>
                  </label>
                  <input
                    type="text"
                    name="customization"
                    placeholder="customization"
                    className="input input-bordered text-sm bg-gray-200 capitalize"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-semibold capitalize">
                      processing time
                    </span>
                  </label>
                  <input
                    type="text"
                    name="processing_time"
                    placeholder="processing time"
                    className="input input-bordered text-sm bg-gray-200 capitalize"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-semibold capitalize">
                      stock Status
                    </span>
                  </label>
                  <input
                    type="text"
                    name="stockStatus"
                    placeholder="stock Status"
                    className="input input-bordered text-sm bg-gray-200 capitalize"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-semibold capitalize">
                      user email
                    </span>
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder="user email"
                    className="input input-bordered text-sm bg-gray-200 capitalize"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-base font-semibold capitalize">
                      user name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder="user name"
                    className="input input-bordered text-sm bg-gray-200 capitalize"
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

export default AddCraftItem;

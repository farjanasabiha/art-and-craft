const ArtAndCraftCard = ({ allList }) => {
  const {
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
  } = allList;
  return (
    <section>
      <div className="container px-6 m-auto shadow-lg rounded-md">
        <div className="grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12 py-6 ">
          <div className="col-span-4">
            <img className="w-full h-full" src={image_url}></img>
          </div>
          <div className="col-span-4 lg:col-span-8 flex items-start justify-center flex-col">
            <div className="">
              <p className=" text-black py-2 text-sm font-medium leading-snug">
                <span className="font-semibold">SubCategory Namel :</span>{" "}
                <span className="bg-[#4885f8] rounded-xl px-3 py-2 text-white capitalize font-medium">
                  {subCategory_name}
                </span>
              </p>
              <p className="font-bold text-black mt-3">
                Short Description : {short_description}
              </p>
              <div className="flex  flex-wrap font-bold justify-start gap-5  space-x-2 text-xs text-black">
                <p className=" text-black py-2 text-sm font-medium leading-snug">
                  <span className="font-semibold">User Name :</span> {user_name}
                </p>
                <p className=" text-black py-2 text-sm font-medium leading-snug">
                  <span className="font-semibold">User Email :</span>{" "}
                  {user_email}
                </p>
              </div>
              <div className="flex  flex-wrap font-bold justify-start gap-5  space-x-2 text-xs text-black">
                <p className=" text-black py-2 text-sm font-medium leading-snug">
                  <span className="font-semibold">Price :</span> {price}
                </p>
                <p className=" text-black py-2 text-sm font-medium leading-snug">
                  <span className="font-semibold">Rating :</span> {rating}
                </p>
              </div>
              <div className="flex  flex-wrap font-bold justify-start gap-5  space-x-2 text-xs text-black">
                <p className=" text-black py-2 text-sm font-medium leading-snug">
                  <span className="font-semibold">Item Name :</span> {item_name}
                </p>
                <p className=" text-black py-2 text-sm font-medium leading-snug">
                  <span className="font-semibold">Processing time :</span>{" "}
                  {processing_time}
                </p>
              </div>

              <div className="flex  flex-wrap font-bold justify-start gap-5  space-x-2 text-xs text-black">
                <p className=" text-black py-2 text-sm font-medium leading-snug">
                  <span className="font-semibold">Customization :</span>{" "}
                  {customization}
                </p>
                <p className=" text-black py-2 text-sm font-medium leading-snug">
                  <span className="font-semibold">StockStatus :</span>{" "}
                  {stockStatus}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtAndCraftCard;

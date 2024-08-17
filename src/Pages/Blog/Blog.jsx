import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch("/Art&CradtCategories.json")
      .then((res) => res.json())
      .then((data) => {
        const item = data.find((e) => {
          return e.id == id;
        });
        console.log(item);
        setData(item);
      });
  }, [id]);

  return (
    <div>
      <section>
        <div className="container px-6 m-auto shadow-lg my-10 rounded-md">
          <h1 className="text-center text-black font-semibold text-3xl">
            Viwe Property Details
          </h1>
          <div className="grid grid-cols-4 gap-8 md:grid-cols-8 lg:grid-cols-12 py-6 ">
            <div className="col-span-4">
              <img src={data.image_url}></img>
            </div>
            <div className="col-span-4 lg:col-span-8 flex items-start justify-center flex-col">
              <div className="">
                <span className="bg-[#4885f8] rounded-xl px-3 py-2 text-white capitalize font-medium">
                  {data.subCategory_name}
                </span>
                <p className="font-bold text-black mt-3"> ID : {id}</p>
                <p className="text-base mt-2 tracking-wider hover:underline text-black capitalize font-semibold">
                  {data.item_name}
                </p>
                <h3 className="flex-1 text-black py-1 text-sm font-medium leading-snug">
                  {data.short_description}
                </h3>
                <div className="flex  flex-wrap font-bold justify-start gap-5  space-x-2 text-xs text-black">
                  <p className=" text-black py-2 text-sm font-medium leading-snug">
                    <span className="font-semibold">Price :</span> {data.price}
                  </p>
                  <p className=" text-black py-2 text-sm font-medium leading-snug">
                    <span className="font-semibold">Rating :</span>{" "}
                    {data.rating}
                  </p>
                </div>
                <h3 className="flex-1 text-black py-1 text-sm font-medium leading-snug">
                  <span className="font-semibold">Processing time : </span>
                  {data.processing_time}
                </h3>
                <h3 className="flex-1 text-black py-1 text-sm font-medium leading-snug">
                  <span className="font-semibold">Customization : </span>
                  {data.customization}
                </h3>
                <div className="flex items-center justify-start gap-3 mt-1">
                  <div>
                    <span className="font-semibold">StockStatus:</span> {' '}
                    {data.stockStatus}
                  </div>
                  <div className="flex items-center justify-center gap-2 capitalize">
                    {data.facilities &&
                      data.facilities.length > 0 &&
                      data.facilities.map((facility, index) => (
                        <p key={index}>{facility}</p>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Blog;
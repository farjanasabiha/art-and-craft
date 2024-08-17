const ChallengeCategory = ({blog}) => {

      const {
        id,
        image_url,
        subCategory_name,
        item_name,
        customization,
        short_description,
        price,
        rating,
      } = blog;
    return (
      <a href="">
        <div className="card bg-base-100 image-full shadow-xl">
          <figure>
            <img src={image_url} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white mb-3">{subCategory_name}</h2>
            <p className="text-white">{short_description}</p>
            <p className="text-white">Item Name : {item_name}</p>
            <p className="text-white">Customization : {customization}</p>
            <div className="flex  justify-between items-center">
              <p className="text-white">Price : {price}</p>
              <p className="text-white">Rating : {rating}</p>
            </div>
          </div>
        </div>
      </a>
    );
};

export default ChallengeCategory;
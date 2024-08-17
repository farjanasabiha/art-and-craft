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
      <div>
        <div className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img src={image_url} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white">{subCategory_name}</h2>
            <p className="text-white">{short_description}</p>
            <p className="text-white">{item_name}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ChallengeCategory;
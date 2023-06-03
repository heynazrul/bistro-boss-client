

const FoodCard = ({item}) => {
    const { image, price, recipe, name } = item;
    return (
      <div className="card w-96 bg-base-100 shadow-xl mt-6">
        <figure>
          <img
            src={image}
            alt={name}
            className="h-[300px] w-full object-cover object-center"
          />
          <p className="bg-slate-900 text-white absolute top-4 right-4 p-2 rounded-md">${price}</p>
        </figure>
        <div className="card-body items-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline text-[#BB8506] border-0 border-b-2 hover:border-[#BB8506] hover:border-b-2 hover:text-[#BB8506]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
};

export default FoodCard;
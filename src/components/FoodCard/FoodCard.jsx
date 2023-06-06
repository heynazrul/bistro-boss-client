import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { image, price, recipe, name , _id} = item;
  const {user} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const handleAddtoCart = (item) => {
    console.log(item);
    if(user && user.email) {
      const cartItem = {menuItemId:_id, name, image, price, email: user.email }
      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      })
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
          toast.success('Added to cart')
        }
      })
    }
    else {
      toast.error('Please Login first to add cart')
      navigate('/login', {state: {from: location}})
    }
  };
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
          <button
            onClick={() => handleAddtoCart(item)}
            className="btn btn-outline text-[#BB8506] border-0 border-b-2 hover:border-[#BB8506] hover:border-b-2 hover:text-[#BB8506]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

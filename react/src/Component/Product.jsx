import React from 'react';
import "./../Style/Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className='product'>
      <div className="card w-96 h-[500px] shadow-xl bg-background hover:image-full  ">
        <figure className=' '>
          <img className=' z-20 ' src={image} alt={title} />
        </figure>
        <div className="card-body ">
          <h2 className="card-title   font-bold">{title}</h2>
          <p className="">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="product_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i} className=' flex-grow-0'>⭐</p>
              ))}
          </div>
          <div className="card-actions justify-end">
            <button className="btn  btn-primary text-black  hover:btn-secondary hover:text-black">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

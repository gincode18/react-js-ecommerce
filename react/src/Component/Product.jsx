import React from "react";
import "./../Style/Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className="product bg-base-100">
      <div className="card w-96 h-[500px] shadow-xl bg-base-200  hover:image-full  ">
        <figure className=" ">
          <img className=" z-20 " src={image} alt={title} />
        </figure>
        <div className="card-body ">
          <h2 className="card-title   font-bold">{title}</h2>
          <p className="">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="rating gap-1">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <input
                  key={i}
                  type="radio"
                  name="rating-3"
                  className="mask mask-heart bg-secondary cursor-default"
                  disabled
                />
              ))}
          </div>
          {/* <div className="rating gap-1">
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-secondary cursor-default"
              disabled
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-secondary cursor-default"
              disabled
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-secondary cursor-default"
              disabled
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-secondary cursor-default"
              disabled
            />
            <input
              type="radio"
              name="rating-3"
              className="mask mask-heart bg-secondary cursor-default"
              disabled
            />
          </div> */}
          <div className="card-actions justify-end">
            <button className="btn  btn-primary  hover:btn-secondary hover:text-black">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;

import React from "react";
import "./../Style/Product.css";

function Product({ title, image, price, rating }) {
  return (
    <div className="product bg-base-100 ">
      <div className="card w-96 h-[500px] shadow-xl  hover:image-full focus:image-full bg-base-300  group hover:text-inherit ">
        <figure className=" ">
          <img className=" z-20 " src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2
            className="card-title font-bold text-inherit 
          group-hover:bg-gradient-to-r  group-hover:from-primary  group-hover:to-secondary group-hover:inline-block group-hover:text-transparent group-hover:bg-clip-text transition-colors  delay-75"
          >
            {title}
          </h2>
          <p className="">
            <small className="group-hover:bg-gradient-to-r  group-hover:from-primary  group-hover:to-secondary group-hover:inline-block group-hover:text-transparent group-hover:bg-clip-text transition-colors  delay-75">
              $
            </small>
            <strong className="group-hover:bg-gradient-to-b  group-hover:from-primary  group-hover:to-secondary group-hover:inline-block group-hover:text-transparent group-hover:bg-clip-text transition-colors  delay-75">
              {price}
            </strong>
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

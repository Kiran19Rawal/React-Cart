import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";

export default function AllProducts() {
  const items = useSelector((state) => state.Cart.items);
  const dispatch = useDispatch();
  return (
    <div className="d-flex flex-wrap mt-4">
      {items.map((item) => (
        <div className="card m-2" style={{ width: "18rem" }}>
          <img
            src={item.picture}
            className="card-img-top "
            alt=""
            style={{
              height: "250px",
              width: "250px",
              alignSelf: "center",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.desc.substring(0, 30)}....</p>
            <div className="d-flex">
              <p className="card-text col-5" style={{ color: "blue" }}>
                {item.price}
              </p>
              <p className="card-text col-12">{item.quantity}</p>
            </div>
            <div>
              <button
                onClick={() => dispatch(addToCart(item))}
                className="btn btn-primary  ms-1"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../features/cartSlice";

export default function CartPage() {
  const { Cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.Cart
  );
  const dispatch = useDispatch();
  return (
    <>
      <div className="d-flex flex-wrap mt-4">
        {Cart.map((data) => (
          <div className="card m-2" style={{ width: "18rem" }}>
            <img
              src={data.picture}
              className="card-img-top "
              alt=""
              style={{
                height: "250px",
                width: "250px",
                alignSelf: "center",
              }}
            />
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.desc.substring(0, 30)}....</p>
              <div className="d-flex">
                <p className="card-text col-5" style={{ color: "blue" }}>
                  {data.price}
                </p>
                <p className="card-text col-12">{data.quantity}</p>
              </div>
              <div className="d-flex w-100 justify-content-between align-items-center">
                <button
                  className="btn btn-primary  ms-1"
                  onClick={() => dispatch(removeItem(data.id))}
                >
                  Remove
                </button>
                <p className="m-0">Number: {data.No}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

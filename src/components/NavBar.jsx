import React, { useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartTotal } from "../features/cartSlice";

export default function NavBar() {
  const { Cart, totalQuantity } = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [Cart]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-info">
        <div className="container-md">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h2 className="navbar-brand">E-Commerce</h2>
          </Link>
          <Link to="/cart">
            <button type="button" className="btn btn-info">
              <FaShoppingCart /> Cart ({totalQuantity})
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

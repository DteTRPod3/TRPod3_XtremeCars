import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const WishList = () => {
  const [wishcars, setwishCars] = useState([]);
  const carsWishList = useSelector((state: any) => state.WishList);
  setwishCars(carsWishList);
  console.log("wishcars", wishcars);
  return (
    <>
      <div>WishList</div>
    </>
  );
};

export default WishList;

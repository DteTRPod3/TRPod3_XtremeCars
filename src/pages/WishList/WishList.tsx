import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import CarCard from "../../components/CarCard/CarCard";
import { CarDetails } from "../../models/CarDetails";
import "./WishList.scss";

const WishList = () => {
  const carsWishList = useSelector(
    (state: any) => state.wishListReducer.wishCars
  );

  const uniqueWishList: CarDetails[] = Array.from(new Set(carsWishList));

  const [wishCars, setwishCars] = useState<CarDetails[]>();
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Xtreme Cars | WishList";
    return () => {
      setwishCars(uniqueWishList);
    };
  }, []);
  return (
    <>
      <div>
        <h1>Wishlist</h1>
      </div>

      <div className="wish-list-cars">
        {wishCars?.map((wishcar: CarDetails) => (
          <CarCard key={wishcar.id} carData={wishcar} />
        ))}
      </div>
    </>
  );
};

export default WishList;

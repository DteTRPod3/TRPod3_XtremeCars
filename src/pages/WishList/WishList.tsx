import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import CarCard from "../../components/CarCard/CarCard";
import { CarDetails } from "../../models/CarDetails";
import { RootState } from "../../redux/store";
import "./WishList.scss";

const WishList = () => {
  const carsWishList = useSelector(
    (state: RootState) => state.wishListReducer.wishList
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Xtreme Cars | WishList";
  }, [carsWishList]);
  return (
    <>
      <div>
        <h1>Wishlist</h1>
      </div>

      <div className="wish-list-cars">
        {carsWishList?.map((wishcar: CarDetails) => {
          return <CarCard key={wishcar.id} carData={wishcar} />;
        })}
      </div>
    </>
  );
};

export default WishList;

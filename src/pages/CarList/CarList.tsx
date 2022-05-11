import React from "react";
import { useSelector } from "react-redux";
import CarCard from "../../components/CarCard/CarCard";
import { IcarData } from "../../models/ICarData";
import { RootState } from "../../redux/store";

const carsList = [
  {
    id: "hondacity",
    name: "Honda City",
    img: "",
    price: "12 L",
  },
  {
    id: "swift",
    name: "Maruti Swift",
    img: "",
    price: "12 L",
  },
  {
    id: "altroz",
    name: "Tata Altroz",
    img: "",
    price: "12 L",
  },
];

const CarList = () => {
  console.log(useSelector((state: RootState) => state.cart.items));
  return (
    <div>
      {carsList.map((car: IcarData, index) => (
        <CarCard key={index} carData={car} />
      ))}
    </div>
  );
};

export default CarList;

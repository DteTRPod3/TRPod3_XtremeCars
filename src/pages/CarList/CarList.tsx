import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CarCard from "../../components/CarCard/CarCard";
import { API_URL } from "../../constants";
import { useQuery } from "../../hooks/useQuery";
import { CarDetails } from "../../models/CarDetails";
import { updateCars, updateErrorState, updateLoadState } from "../../redux/CarsList/reducer";
import { getRequest } from "../../requests/apiRequest";
import "./CarList.scss";

enum CarType {
  ALL_CARS = "",
  SEDAN = "sedan",
  SUV = "SUV",
  HATCHBACK = "hatchback",
}

const CarList = (): JSX.Element => {
  const dispatch = useDispatch();
  const query = useQuery();
  const [selectedCarType, setSelectedCarType] = useState<CarType>(CarType.ALL_CARS);
  const [searchStr, setSearchStr] = useState<string>("");
  const cars = useSelector((state: any) => state.carsListReducer.cars);

  useEffect(() => {
    const typeParam = query?.get("car-type");
    const searchParam = query?.get("search");
    if (searchParam !== null) setSearchStr(searchParam);
    switch (typeParam) {
      case "sedan":
        setSelectedCarType(CarType.SEDAN);
        break;
      case "SUV":
        setSelectedCarType(CarType.SUV);
        break;
      case "hatchback":
        setSelectedCarType(CarType.HATCHBACK);
        break;
      default:
        setSelectedCarType(CarType.ALL_CARS);
        break;
    }
  }, []);

  useEffect(() => {
    dispatch(updateLoadState());
    const carsData = getRequest(`${API_URL}cars/${selectedCarType}?search=${searchStr}`);
    carsData.then(data => {
      dispatch(updateCars({replaceCars: data}));
    }).catch(err => {
      dispatch(updateErrorState({error: err}));
    });
  }, [selectedCarType, searchStr]);

  return (
    <>
    <div>
      <div className="car-list-btn-group">
        <div className="car-list-btn-ele">
          <button>All Cars</button>
        </div>
        <div className="car-list-btn-ele">
          <button>Sedan</button>
        </div>
        <div className="car-list-btn-ele">
          <button>SUV</button>
        </div>
        <div className="car-list-btn-ele">
          <button>Hatchback</button>
        </div>
      </div>
    </div>

    <div>
      {cars?.map((car:CarDetails)=>CarCard(car))}
    </div>
</>

  );
};

export default CarList;

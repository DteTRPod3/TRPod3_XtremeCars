import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../constants";
import { useQuery } from "../../hooks/useQuery";
import { updateCars } from "../../redux/CarsList/reducer";
import { request } from "../../requests/request";
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
    const carsData = request(`${API_URL}cars/${selectedCarType}?search=${searchStr}`);
    carsData.then(data => {
      dispatch(updateCars({replaceCars: data}));
    });
  }, [selectedCarType, searchStr]);

  return (
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
  );
};

export default CarList;

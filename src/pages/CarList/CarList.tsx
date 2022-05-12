import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CarCard from "../../components/CarCard/CarCard";
import { API_URL } from "../../constants";
import { useQuery } from "../../hooks/useQuery";
import { CarDetails } from "../../models/CarDetails";
import {
  updateCars,
  updateErrorState,
  updateLoadState,
} from "../../redux/CarsList/reducer";
import { getRequest } from "../../requests/apiRequest";
import "./CarList.scss";

enum CarType {
  ALL_CARS = "",
  SEDAN = "sedan",
  SUV = "SUV",
  HATCHBACK = "hatchback",
}

const CarList = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const query = useQuery();
  const [selectedCarType, setSelectedCarType] = useState<CarType>(
    CarType.ALL_CARS
  );
  const [searchStr, setSearchStr] = useState<string>("");
  const cars = useSelector((state: any) => state.carsListReducer.cars);

  useEffect(() => {
    document.title = "Xtreme Cars | All Cars";
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
    if (selectedCarType != "" && searchStr != "") {
      navigate(`?car-type=${selectedCarType}&search=${searchStr}`);
    } else if (selectedCarType != "") {
      navigate(`?car-type=${selectedCarType}`);
    } else if (searchStr != "") {
      navigate(`?search=${searchStr}`);
    } else {
      navigate("/");
    }
    dispatch(updateLoadState());
    getRequest(`${API_URL}cars/${selectedCarType}?search=${searchStr}`)
      .then((data) => {
        dispatch(updateCars({ replaceCars: data }));
      })
      .catch((err) => {
        dispatch(updateErrorState({ error: err }));
      });
  }, [selectedCarType, searchStr, navigate, dispatch]);

  return (
    <>
      <div>
        <div className="car-list-tab-search">
          <div className="car-list-btn-group">
            <div className="car-list-btn-ele">
              <button onClick={() => setSelectedCarType(CarType.ALL_CARS)}>
                All Cars
              </button>
            </div>
            <div className="car-list-btn-ele">
              <button onClick={() => setSelectedCarType(CarType.SEDAN)}>
                Sedan
              </button>
            </div>
            <div className="car-list-btn-ele">
              <button onClick={() => setSelectedCarType(CarType.SUV)}>
                SUV
              </button>
            </div>
            <div className="car-list-btn-ele">
              <button onClick={() => setSelectedCarType(CarType.HATCHBACK)}>
                Hatchback
              </button>
            </div>
          </div>
          <div>
            <form>
              <input
                type="text"
                id="search"
                name="search"
                value={searchStr}
                placeholder="search..."
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setSearchStr(event.target.value)
                }
              />
              <button type="button">Search</button>
            </form>
          </div>
        </div>
        <div className="car-list-grid">
          {cars?.map((car: CarDetails) => (
            <CarCard key={car.id} carData={car} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CarList;

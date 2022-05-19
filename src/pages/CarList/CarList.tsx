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
  const error = useSelector((state: any) => state.carsListReducer.error);

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
      navigate(`?car-type=${selectedCarType}&search=${searchStr}`, {replace: true});
    } else if (selectedCarType != "") {
      navigate(`?car-type=${selectedCarType}` , {replace: true});
    } else if (searchStr != "") {
      navigate(`?search=${searchStr}` , {replace: true});
    } else {
      navigate("/", {replace: true});
    }
    dispatch(updateLoadState());
    getRequest(`${API_URL}cars/${selectedCarType}?search=${searchStr}`)
      .then((data) => {
        dispatch(updateCars({ replaceCars: data }));
      })
      .catch((err) => {
        dispatch(updateErrorState({ error: "This is an error" }));
      });
  }, [selectedCarType, searchStr, navigate, dispatch]);

  return (
    <div>
      <div className="car-list__tab__search__container">
        <div className="car-list__tabs">
          <div>
            <button
              className={`${
                selectedCarType === CarType.ALL_CARS ? "car-list__tab--active" : ""
              }`}
              onClick={() => setSelectedCarType(CarType.ALL_CARS)}
            >
              All Cars
            </button>
          </div>
          <div>
            <button
              className={`${
                selectedCarType === CarType.SEDAN ? "car-list__tab--active" : ""
              }`}
              onClick={() => setSelectedCarType(CarType.SEDAN)}
            >
              Sedan
            </button>
          </div>
          <div>
            <button
              className={`${
                selectedCarType === CarType.SUV ? "car-list__tab--active" : ""
              }`}
              onClick={() => setSelectedCarType(CarType.SUV)}
            >
              SUV
            </button>
          </div>
          <div>
            <button
              className={`${
                selectedCarType === CarType.HATCHBACK ? "car-list__tab--active" : ""
              }`}
              onClick={() => setSelectedCarType(CarType.HATCHBACK)}
            >
              Hatchback
            </button>
          </div>
        </div>
        <div className="car-list__form__container">
          <form>
            <input
              type="text"
              id="search"
              name="search"
              value={searchStr}
              placeholder="Search..."
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setSearchStr(event.target.value)
              }
            />
            <button type="button">Search</button>
          </form>
        </div>
      </div>
      {error !== null && (
        <div className="car-list__error-msg">
          Something went wrong. Please try again later.
        </div>
      )}
      {cars?.length === 0 && (
        <div className="car-list__error-msg">
          There are no cars meet your search criteria.
        </div>
      )}
      <div className="car-list__grid">
        {cars?.map((car: CarDetails) => (
          <CarCard key={car.id} carData={car} />
        ))}
      </div>
    </div>
  );
};

export default CarList;

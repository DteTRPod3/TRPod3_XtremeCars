import "./CompareCard.scss"
import { useDispatch, useSelector } from "react-redux";
import { ICarComparisonDetails } from "../../models/ICarComparisonDetails";
import { CarDetails } from "../../models/CarDetails";
import { removeFromCompare } from "../../redux/CompareCars/reducer";
import { removeCarDetailsData } from "../../redux/CompareCarsDetails/reducer";


function CompareCard(props:any) {
  const carId = props.carId
  const car:ICarComparisonDetails = props.carsData
  const dispatch = useDispatch()
  const allCars = useSelector((state: any) => state.carsListReducer.cars);
  let carDetail:CarDetails[]=[]
  const removeCar = ()=>{
    dispatch(removeCarDetailsData(car.specifications.name))
    dispatch(removeFromCompare(carId))
  }
  
  if(allCars)
    carDetail = allCars.filter((c:CarDetails)=>{
        return c.id===carId
    })
  return (
    <>
      <div data-carId={carId}>
        <h3>{car.specifications.name}</h3>
      </div>
      <div className="compare-cars__image-container">
        <img src={carDetail[0].image} alt="car"/>
      </div>
      <div>
        <p>{car.specifications.fuel_type}</p>
      </div>
      <div>
        <p>{car.specifications.engine_cc}</p>
      </div>
      <div>
        <p>{car.specifications.torque}</p>
      </div>
      <div>
        <p>{car.specifications.acceleration}</p>
      </div>
      <div>
        <p>{car.specifications.top_speed}</p>
      </div>
      <div>
        <p>{car.cost}</p>
      </div>
      <div>
          <button onClick={removeCar}  className="button--red">Remove</button>
      </div>
    </>
  );
}
export default CompareCard;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NUMBEROFCARSTOCOMPARE } from "../../constants";
import { ICarComparisonDetails } from "../../models/ICarComparisonDetails";

const initialState : {loading:string,error:string,carsDetail:ICarComparisonDetails[]}= {
    loading:"",
    error:"",
    carsDetail: []
}

const compareCarsDetailsSlice=createSlice({
    name:"comparecars",
    initialState,
    reducers:{
        resetCarsDetals:(state)=>{
            state.carsDetail=[]
        },
        fetchCarDetailsLoadState:(state)=>{
            state.loading="true"
        },
        fetchCarDetailsGetData:(state,action:PayloadAction<ICarComparisonDetails>)=>{
            if(state.carsDetail.length<NUMBEROFCARSTOCOMPARE){
                state.carsDetail.push(action.payload)
            }
        },
        fetchCarDetailsErrorState:(state,action:PayloadAction<string>)=>{
            state.error="Error"
        },
        removeCarDetailsData:(state,action:PayloadAction<string>)=>{
            const carIndex = state.carsDetail.findIndex((car)=>{
                return car.specifications.name === action.payload
            })
            if(carIndex===0) state.carsDetail.shift()
            else state.carsDetail.pop()
        },
    }
})

export default compareCarsDetailsSlice.reducer;
export const { fetchCarDetailsLoadState,fetchCarDetailsGetData,fetchCarDetailsErrorState,removeCarDetailsData,resetCarsDetals } = compareCarsDetailsSlice.actions; 
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { removeFromCompare } from "../CompareCars/CompareCarsSlice";

const initialState : {loading:string,error:string,carsDetail:any[]}= {
    loading:"",
    error:"",
    carsDetail: []
}

const CompareCarsDetailsSlice=createSlice({
    name:"comparecars",
    initialState,
    reducers:{
        fetchCarDetailsLoadState:(state)=>{
            state.loading="true"
        },
        fetchCarDetailsGetData:(state,action:PayloadAction<{carDetail:any}>)=>{
            state.carsDetail.push(action.payload.carDetail)
        },
        fetchCarDetailsErrorState:(state,action:PayloadAction<{error:string}>)=>{
            state.error="Error"
        },
        removeCarDetailsData:(state,action:PayloadAction<{carId:string}>)=>{
            const carIndex = state.carsDetail.findIndex((car)=>{
                return car["id"] = action.payload.carId
            })
            state.carsDetail.splice(carIndex,0)
        },
    }
})

export default CompareCarsDetailsSlice.reducer;
export const { fetchCarDetailsLoadState,fetchCarDetailsGetData,fetchCarDetailsErrorState } = CompareCarsDetailsSlice.actions; 
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialState : {error:string,carsIds:any[]}= {
    error:"",
    carsIds: []
}

const CompareCarsSlice=createSlice({
    name:"comparecars",
    initialState,
    reducers:{
        addToCompare:(state,action:PayloadAction<{carId:string}>)=>{
            if(state.carsIds.length<2)
                state.carsIds.push(action.payload.carId)
        },
        removeFromCompare:(state,action:PayloadAction<{carId:string}>)=>{
            const carIndex = state.carsIds.findIndex((car)=>{
                return car["id"] = action.payload.carId
            })
            state.carsIds.splice(carIndex,0)
        }
    }
})

export default CompareCarsSlice.reducer;
export const { addToCompare,removeFromCompare } = CompareCarsSlice.actions; 
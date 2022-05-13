import { NUMBER_OF_CARS_TO_COMPARE } from '../../constants';
import { createSlice,PayloadAction } from "@reduxjs/toolkit";

const initialState : {error:string,carsIds:string[],length:number}= {
    error:"",
    carsIds: [],
    length:0
}

const compareCarsSlice=createSlice({
    name:"comparecars",
    initialState,
    reducers:{
        addToCompare:(state,action:PayloadAction<string>)=>{
            if(state.carsIds.length<NUMBER_OF_CARS_TO_COMPARE)
                state.carsIds.push(action.payload)
        },
        removeFromCompare:(state,action:PayloadAction<string>)=>{
            const carIndex = state.carsIds.indexOf(action.payload)
            if(carIndex===0) state.carsIds.shift()
             else state.carsIds.pop()
        }
    }
})

export  default compareCarsSlice.reducer;
export const { addToCompare,removeFromCompare } = compareCarsSlice.actions; 
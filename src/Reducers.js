import { createSlice } from "@reduxjs/toolkit";

export const slice=createSlice({
    name:'task',
    initialState:{
        value:{
            name:'',
            phno:'',
            email:'',
            git:'',
          
            Beginner:false,
            Intermediate:false,
            Advanced:false,
            Expert:false,
            HTMLCSS:0,
            Reactjs:0,
            Vuejs:0,
            Angular:0,
            }
    },
    reducers:{
        info:(state,action)=>{
            state.value=action.payload;
        }
    }
})
export const { info } = slice.actions;
export default slice.reducer;
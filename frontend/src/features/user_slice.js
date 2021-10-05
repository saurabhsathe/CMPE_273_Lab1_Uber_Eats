import {createSlice} from "@reduxjs/toolkit"
import cookie from "react-cookies";

export const userSlice=createSlice({
    name:"user",
    initialState:{
        user:null,
        userType:null,
        isloggedin:false
    },
    reducers:{
        login:(state,action)=>{
            state.user={"email":action.payload.email,"userType":action.payload.userType}
            
            
            
           
        },
        signup:(state,action)=>{
            state.user={"email":action.payload.email,"userType":action.payload.userType}
            
           
        },
        logout:(state,action)=>{
            state.user=null
            cookie.remove('loggedin', { path: '/' })
        }
    }
})
export const {login,logout,signup} = userSlice.actions
export const selectuser = (state) =>state.user.user
export default userSlice.reducer
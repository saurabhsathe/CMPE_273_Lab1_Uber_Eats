import {createSlice} from "@reduxjs/toolkit"
export const userSlice=createSlice({
    name:"user",
    initialState:{
        user:null,
        isloggedin:false
    },
    reducers:{
        login:(state,action)=>{
            state.user=action.payload
            state.isloggedin = true
           
        },
        logout:(state,action)=>{
            state.user=null
            state.isloggedin = false
        }
    }
})
export const {login,logout} = userSlice.actions
export const selectuser = (state) =>state.user.user
export default userSlice.reducer
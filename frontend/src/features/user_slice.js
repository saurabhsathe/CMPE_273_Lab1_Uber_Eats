import { createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import cookie from "react-cookies";
import axios from "axios";
export const getfavourites = createAsyncThunk(
    'user/getfavourites',
    async (data)=>{axios.post(process.env.REACT_APP_BACKEND+"getfavourites",data).then(response=>{
                
        if(response.status === 200)
        {
            
            console.log(response.data,typeof response.data)
            return response.data
            
        }
        else if(response.status === 202)
        {
            console.log("no data found")
        }
    
})
    
});
export const userSlice=createSlice({
    name:"user",
    initialState:{
        user:null,
        userType:null,
        isloggedin:false,
        favourites:[]
    },
    reducers:{
        login:(state,action)=>{
            console.log("in redux---------------------------")
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
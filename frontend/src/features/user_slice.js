import { createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import cookie from "react-cookies";
import axios from "axios";
export const getfavourites = createAsyncThunk(
    'user/getfavourites',
      async (data)=>{
        console.log("ddddddddddddddddddddddddddd",data)     
          
        const api_response = await axios.post(process.env.REACT_APP_BACKEND+"getfavourites",data.user,function(err,resu){
            if(err){
                console.log("error in axios",err)
            }
        })
     
        .then((response)=>{
        
        if(response.status === 200)
        {
            console.log("got your data----------------->")
            console.log(response.data,typeof response.data)
            return response.data
            
        }
        else if(response.status === 202)
        {
            console.log("no data found")
            return null
        }
    
})
console.log("here is your api response---------------->",api_response)
 return api_response
});
export const userSlice=createSlice({
    name:"user",
    initialState:{
        user:null,
        userType:null,
        status:null,
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
    },
    extraReducers: (builder) => {
        builder
          .addCase(getfavourites.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(getfavourites.fulfilled, (state, action) => {
            state.status = 'idle';
            
            state.favourites = action.payload;
        
          });
      }
})
export const {login,logout,signup} = userSlice.actions
export const selectuser = (state) =>state.user
export default userSlice.reducer
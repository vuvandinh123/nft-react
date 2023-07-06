import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name:'user',
    initialState:{
        userInfo:[]
    },
    reducers:{
        setUser:(state,payload)=>({
            userInfo:{email:payload.payload}
        })
    }
})
export const {setUser} = userSlice.actions
export default userSlice.reducer
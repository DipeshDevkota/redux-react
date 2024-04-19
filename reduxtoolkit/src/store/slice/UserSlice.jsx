import {createSlice } from "@reduxjs/toolkit";


 const UserSlice =createSlice(
    {
        name:"user",
        initialState:[],
        reducers:{
            addUser(state,action){
                state.push(action.payload);
                // console.log(action.payload);

            },
            removeUser(state,action) {

                     state.splice(action.payload,1)
                //   state.pop(action.payload);
                // console.log("hii"+ action.payload)
            },
            deleteUser(state,action){


                return [];
            },

        },
    }
);
// console.log(UserSlice.actions);
  export  const {addUser,removeUser,deleteUser}= UserSlice.actions;

export default UserSlice.reducer;
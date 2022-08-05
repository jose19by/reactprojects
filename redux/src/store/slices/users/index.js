import { createSlice} from '@reduxjs/toolkit'
import axios from 'axios';

export const userSlice =createSlice ({
    name : 'users',
    initialState : {
        list : []
    },
    reducers : {
        setUserList :( state, action ) =>{
            state.list = action.payload;
        }
    }
})

export const {setUserList} = userSlice.actions;
export default userSlice.reducer;

export const fetchAllUsers = () => (distpatch) => {
    axios.get('https://reqres.in/api/users?page=1')
    .then((response) =>{ distpatch(setUserList (response.data.data))})
    .catch((error) => console.log(error))
}
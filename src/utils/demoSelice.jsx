import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchAllTags = createAsyncThunk(
    'tags/fetchAllTags',
    async (args, {rejectWithValue} ) => {
     try {
        const { data } = await axios.get('https://api.realworld.io/api/tags')
        debugger
        console.log(data.data.tags)
        return data
     } catch (error) {
        rejectWithValue(error)
     }
    }
  )
const demoSlice = createSlice({
    name: 'demo',
    initialState : {
        data : [],
        isSuccess : false,
        errorMessage : '',
        loading : false
    },
    reducers: {
      
    },

    extraReducers :  {

        [fetchAllTags.pending]:  (state, {payload})=>{
         state.loading = true
        },

        [fetchAllTags.fulfilled]:  (state, {payload})=>{
            state.loading = false
            state.data = payload
            state.isSuccess = true
           },
           [fetchAllTags.rejected]:  (state, {payload})=>{
            state.errorMessage = payload
            state.loading = false
            state.isSuccess = false
           }
    }
  })

  export default demoSlice
  
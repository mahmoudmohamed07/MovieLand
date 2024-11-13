import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axiosInstance from '../axios'


export const FetchTopRated = createAsyncThunk('TopRatedSlice/FetchTopRated' , async(pageNum) => {
    const res = await fetch (`https://api.themoviedb.org/3/movie/top_rated?api_key=25962260f79628170f94e55d3e345a2a&page=${pageNum}`);
    const data = await res.json();
    console.log(pageNum);
    return data;
})

const initialState = {
    data: [],
    result: []
  };
export const TopRatedSlice = createSlice({
    name : "topRated" ,
    initialState, 
    reducers: {

    },
    extraReducers : (builder) => {
        builder.addCase(FetchTopRated.pending, ( state , action ) => {
            <h2>Loading</h2>
        })
        builder.addCase(FetchTopRated.fulfilled, ( state , action ) => {
            console.log(action);
            
                state.data = action.payload;
                state.result = action.payload.results;
            
        })
        
    }

});
export const {data , result } = TopRatedSlice.actions;
export default TopRatedSlice.reducer ;


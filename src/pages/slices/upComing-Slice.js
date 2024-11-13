import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axiosInstance from '../axios'
export const FetchUpComing = createAsyncThunk('UpComingSlice' , async(pageNum) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=25962260f79628170f94e55d3e345a2a&page=${pageNum}`)
    const data = await res.json();
    return data;
})

const initialState = {
    UpComingdata: [],
    UpComingresult: []
};

export const UpComingSlice = createSlice ({
    name : 'upComing',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(FetchUpComing.pending, ( state , action ) => {
            <h2>Loading</h2>
        })
        builder.addCase(FetchUpComing.fulfilled, ( state , action ) => {
            console.log(action);
            
                state.UpComingdata = action.payload;
                state.UpComingresult = action.payload.results;
            
        })
    }
});

export const {UpComingdata , UpComingresult} = UpComingSlice.actions;
export default UpComingSlice.reducer ;

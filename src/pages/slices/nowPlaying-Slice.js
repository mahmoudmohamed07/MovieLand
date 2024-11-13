import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axiosInstance from '../axios'

export const FetchNowPlaying = createAsyncThunk('NowPlayingSlice/FetchNowPlaying' , async(pageNum) => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=25962260f79628170f94e55d3e345a2a&page=${pageNum}`);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
})
const initialState = {
    nowdata: [],
    nowresult: []
  };
export const NowPlayingSlice = createSlice({
    name : 'nowPlaying',
    initialState,
    reducers : {

    },
    extraReducers : (builder) => {
        builder.addCase(FetchNowPlaying.pending, ( state , action ) => {
            <h2>Loading</h2>
        })
        builder.addCase(FetchNowPlaying.fulfilled, ( state , action ) => {
            console.log(action);
            state.nowdata = action.payload;
            state.nowresult = action.payload.results;
        })
    }

})
export const {nowdata , nowresult} = NowPlayingSlice.actions;
export default NowPlayingSlice.reducer;
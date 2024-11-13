import {configureStore} from '@reduxjs/toolkit'
import topRatedSlice from './topRated-slice'
import UpComingSlice from './upComing-Slice'
import NowPlayingSlice from './nowPlaying-Slice'

export const store = configureStore({
    devTools :true,
    reducer : {
        topRated: topRatedSlice,
        upComing: UpComingSlice , 
        nowPlaying: NowPlayingSlice
    },
})


import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/main.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { FetchTopRated} from '../slices/topRated-slice';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import {faChevronRight ,faBookmark , faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FetchUpComing } from '../slices/upComing-Slice';
import { FetchNowPlaying } from '../slices/nowPlaying-Slice';
import ImageSlider from './ImageSlider';
import poster1  from '../img/poster1.jpg';
import poster2 from '../img/poster6.jpg';
import poster3 from '../img/poster7.png';
import poster4 from '../img/poster4.avif';
import MovieCard from '../cards/movieCard';

export default function Home() {
    const [slider , setSlider] = useState(0);
    
    const images = [poster1 , poster2 , poster3 , poster4];
    const dispatch = useDispatch();
    const pageNum = 1 ;
    const {UpConimgdata , UpComingresult} = useSelector(state => state.upComing);
    const {data , result} = useSelector(state => state.topRated);
    const {nowrata , nowresult} =   useSelector(state => state.nowPlaying);

    useEffect (() => {
        dispatch(FetchTopRated(pageNum))
        dispatch(FetchUpComing(pageNum))
        dispatch(FetchNowPlaying(pageNum))
    },[dispatch])

    
  
    
    return(
        <>
            <div id="carouselExampleIndicators" className="carousel slide mx-auto">
                <ImageSlider images = {images}/>
            </div>
            <div className='title-Explore container py-5'>
                <h3 className='fw-bold'>Explore Movies & TV shows</h3>
            </div>
            <div className='top-rated container cards mb-2'>

                <Link to={'/rating'} className='title d-flex text-allign-center mb-3'>
                    <h4 className='pb-2 d-inline-block mb-0 ml-3'>Top Rated Movies</h4>
                    <FontAwesomeIcon icon={faChevronRight} className='fs-3 fw-bold'/>
                </Link>
                <MovieCard results = {result}/>
            </div>

            <div className='top-rated container cards mt-5 mb-2'>

                <Link to={'/rating'} className='title d-flex text-allign-center mb-3'>
                    <h4 className='pb-2 d-inline-block mb-0 ml-3'>Upcoming Movies</h4>
                    <FontAwesomeIcon icon={faChevronRight} className='fs-3 fw-bold'/>
                </Link>

                <MovieCard results = {UpComingresult}/>

            </div>

            <div className='top-rated container cards mt-5 mb-2'>

                <Link to={'/rating'} className='title d-flex text-allign-center mb-3'>
                    <h4 className='pb-2 d-inline-block mb-0 ml-3'>Now Playing Movies</h4>
                    <FontAwesomeIcon icon={faChevronRight} className='fs-3 fw-bold'/>
                </Link>

                <MovieCard results = {nowresult}/>
                
                </div>


            <div className='top-rated container cards mt-5 mb-2'>

                <Link to={'/rating'} className='title d-flex text-allign-center mb-3'>
                    <h4 className='pb-2 d-inline-block mb-0 ml-3'>TV Shows</h4>
                    <FontAwesomeIcon icon={faChevronRight} className='fs-3 fw-bold'/>
                </Link>

                {/* <MovieCard results = {nowresult}/> */}
            </div>
        </>
    );
}
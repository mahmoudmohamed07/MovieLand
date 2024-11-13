import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axiosInstance from "../axios"
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { faStar , faArrowTrendUp ,faComments } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from '../img/film-movies-icon.svg';
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";

export default function MovieDetails (){

    var usDolar = new Intl.NumberFormat('en-us' , {
        style : 'currency',
        currency : 'USD',
    });
    const [Language , setlanguage] = useState();
    var {id} = useParams()
    const [movies , Setmovie] = useState([])
    const [detail , Setdetails] = useState([])
    const [videos , Setvideos] = useState ([]);
    const [keywords , Setkeywords] = useState([])
    const [reviews , Setreviews ] = useState([])
    const [avatar , Setavatar] = useState([]);

    useEffect ( () => {
        axiosInstance
        .get(`movie/${id}?api_key=25962260f79628170f94e55d3e345a2a`)
        .then((res) => {
                Setmovie(res.data)
                console.log(res)
                Setdetails(res.data.genres);
                setlanguage(res.data.spoken_languages[0].name);
            }
        )
        .catch (
            (err) =>{console.log(err)}
        )
    },[]);

    useEffect ( () => {
        axiosInstance
        .get(`movie/${id}/keywords?api_key=25962260f79628170f94e55d3e345a2a`)
        .then( (res)=> {
            Setkeywords(res.data.keywords)
            console.log(res.data.keywords)
        }).catch (
            (err) =>{console.log(err)}
        )
    },[]);
    useEffect ( () => {
        axiosInstance
        .get(`movie/${id}/videos?api_key=25962260f79628170f94e55d3e345a2a`)
        .then( (res) => {
            // res.data.results.map( (item , i) ={
            //     if(item === 0 ){

            //     }
            // })
            Setvideos(res.data.results[0])
            
            console.log(res.data)
        })
        .catch(
            (err) => {console.log(err)}
        )
    }, [])

    useEffect ( ()=> {
        axiosInstance
        .get(`movie/${id}/reviews?api_key=25962260f79628170f94e55d3e345a2a`)
        .then( (res)=> {
            console.log(res.data.results)
            Setreviews(res.data.results[0]);
            Setavatar(res.data.results[0].author_details);
        }).catch(
            (err) => {console.log(err)}
        )
    },[])
    var authorDate = new Date(reviews.created_at);
    // let formatData = new Intl.DateTimeFormat("default" , {
    //     year : "numeric",
    //     month : "long",
    //     day : "2-digit",
    // }).format(authorDate);
    console.log(authorDate.toDateString())

    // document.querySelector('.img-video .you-tube').addEventListener("onStateChange", ()=>{
    //     document.querySelector('.img-video .video-title').style.zIndex = "-1";
    //     document.querySelector('.img-video .video-title').classList.add("d-none");
    // });
    return(
        <>
            <div className="movie-details">
                <div className="header-section h-75vh position-relative">
                    <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2`+movies.backdrop_path} className="back-img"></img>
                    <span className="blur-img"></span>
                    <div className="container movie-info position-absolute d-flex mx-5">
                        <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2`+ movies.poster_path} className="rounded-3 mx-5"></img>
                        <div className="info mt-5">
                            <h2 className="text-white">{movies.title} ({movies.status})</h2>
                            <p className="my-0">Original Title : {movies.original_title}</p>
                            <p className="my-0">{movies.release_date} -- {movies.runtime} Minutes</p>
                            <div className="rating mt-5 d-flex align-items-center">
                                <div className="imdb-rating">
                                    <h4 className="fs-5 mb-1 text-white">IMDB RATING</h4>
                                    <div className="rating-info d-inline-flex align-items-center gap-4 mx-auto">
                                        <FontAwesomeIcon icon={faStar} className="d-inline-block ml-3 text-warning fs-2"/>
                                        <p className="my-0"><p className="d-inline text-white fw-bold fs-5">{(movies.vote_average/1).toFixed(1)}</p>/10
                                        <p className="my-0">{(movies.vote_count/1000).toFixed(1)} K</p></p>
                                        
                                    </div>
                                </div>
                                <div className="popularity">
                                    <h4 className="fs-5 mb-1 text-white">POPULARITY</h4>
                                    <div className="rating-info d-inline-flex align-items-center gap-3 mx-auto my-auto pt-2">
                                        <span className="icon border-success rounded-circle">
                                            <FontAwesomeIcon icon={faArrowTrendUp} className="d-inline-block ml-3 text-success fs-4"/>
                                        </span>
                                        <p className="my-0">{(movies.popularity)}</p>
                                        
                                    </div>
                                </div>
                                <div className="genres_container">
                                    {
                                    
                                    detail.map( (el) => {

                                            return(
                                                <span className="genres border-warning mb-2" key={el.id}>{el.name}</span>
                                            );
                                        })
                                    }   
                                </div>
                            </div>
                            <h4 className="text-white mt-5">OverView</h4>
                            <p>{movies.overview}</p>
                        </div>


                    </div>
                </div>
                <div className="img-video mt-5">
                    <div className="container position-relative d-flex gap-5">
                        <div className="video-review">
                            <iframe className="d-block you-tube" width="1000" height="540" src= {`https://www.youtube.com/embed/`+videos.key} title= {movies.title}
                            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerpolicy="strict-origin-when-cross-origin" allowfullscreen >
                            </iframe>
                            {/* <h2 className="position-absolute d-inline video-title">{movies.title}<img src={logo} className="logo d-inline-flex"/></h2> */}
                            <h4 className="mt-5">Review</h4>
                            <div className="review">
                                <div className="container m-2 my-4">
                                    <div className="author d-flex gap-1 align-items-center" >
                                        <img className="rounded-circle" src={`https://media.themoviedb.org/t/p/w45_and_h45_face`+avatar.avatar_path} width={"55px"} height={"55px"}></img>
                                        <div className="author d-inline m-3">
                                            <h5 className="d-inline ">ِA Review By {reviews.author}</h5>
                                            <p className="text-muted m-0">Written by <span className="text-dark">{avatar.name}</span> on <span>{authorDate.toDateString().slice(4 , authorDate.toDateString().length )}</span></p>
                                        </div>
                                    </div>
                                    <p className="mx-4">{reviews.content}</p>
                                </div>    

                            </div>
                        </div>
                    
                    
                        <div className="information w-25">
                            <h6 className="fw-bold">Status</h6>
                            <p className="mb-4">{movies.status}</p>
                            <h6 className="fw-bold">Original Language</h6>
                            <p className="mb-4">{Language}</p>
                            <h6 className="fw-bold">Budget</h6>
                            <p className="mb-4">{usDolar.format(movies.budget)}</p>
                            <h6 className="fw-bold">Revenue</h6>
                            <p className="mb-4">{usDolar.format(movies.revenue)}</p>
                            <h6 className="fw-bold">Key Words</h6>
                            {
                                keywords.map( (key)=> {
                                    return (
                                        <p className="info-map mb-3 d-inline-block border-warning">{key.name}</p>
                                    )
                                } )
                            }
                        </div>
                    </div>
                
                </div>
              
            </div>
        </>
        
    )
        
    
}


import '../css/main.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useSelector , useDispatch } from 'react-redux';
import { FetchTopRated } from '../slices/topRated-slice';
import { useEffect, useState } from 'react';
import axiosInstance from '../axios';
import Reactpagih from 'react';
import { Link } from 'react-router-dom';
import { click } from '@testing-library/user-event/dist/click';

export default function Rating(){
    var index_9 = 9 ;
    const [pages , setpages] = useState();
    const [movies , setMovie] = useState([]) ;
    const [pageNum , setPageNum] = useState(1);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [pagecount , setPageCount] = useState(1);

    const dispatch = useDispatch();
    const {data , result} = useSelector((state) => state.topRated);
    
    
    console.log(data.page);
    useEffect ( () => { 
        dispatch(FetchTopRated(pageNum));
        setpages(data.total_pages);
        
    } ,[pageNum]);
    
    
    const pageArr = [[] , []] ;

    function pagination () {
        let row = pages/10;
        let col = 10;
        let count = 1;
        for (let i = 1; i <= row; i++) {
             pageArr[i] = [];
            for ( let j = 0 ; j < col ; j++) {
                pageArr[i][j] = count;
                count++;
            }
        }
    }
    pagination();
    // var divs = Array.from(document.querySelectorAll(".card-container .row .col-card"));
    // console.log(divs)
    // divs.forEach(element => {
    //     element.addEventListener("click" , () => {
    //         console.log(element.getAttribute("movie-id"))
    //     })
            
    //     }
    // );
    // divs.addEventListener("click" , () => {
    //     console.log(document.querySelector(".card-container .row .col-card").getAttribute("movie-id"))
    // })
    // document.querySelector(".card-container .row .col-card").addEventListener('Click' , () => {
    //         console.log(document.querySelector(".card-container .row .col-card ").getAttribute('movie-id'))
    //     })
    // // //     console.log(pageNum)
    // console.log(document.querySelector(".card-container .row .col-card "))


    // // //    console.log(pageArr[pagecount][0])
    // // //    console.log(pageArr[pageArr.length-1])
    
    return(
        
        <>
           
            <div className='card-container' key={0}>
                <div className="row row-cols-4 gap-4 mx-auto my-5 d-flex justify-content-center">
                    {result.map( (movie) => {
                        
                        return (
                            
                        <Link to={`/movie/${movie.id}`}>
                            <div className="col-card px-0 card col"  key={movie.id} movie-id={movie.id} onClick={() => {
                                console.log(movie.id)
                            }}>
                                <img src={'https://media.themoviedb.org/t/p/w300_and_h450_bestv2'+movie.poster_path} className="card-img-top" alt="..."/>
                                <div className="card-body position-relative">
                                    <h5 className="card-title">{movie.title}</h5>
                                    <p className="card-des my-2">{movie.overview}</p>
                                    <p className="card-text my-4"><small className="text-body-secondary">Release Date {movie.release_date}</small></p>
                                </div>
                            </div>
                        </Link>
                            
                        );
                    })
                    }
                    
                </div>
                <div className='nav-container d-flex justify-content-center'>
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className = {`page-item prev`} onClick={ () => {
                            if (pageArr[pageNum][0] <= 1) {
                                document.querySelector('.pagination .prev ').classList.add("disabled")
                            }
                            else{
                                
                                setPageCount(pagecount-1); 
                                setPageNum(pageArr[pagecount-1][0]); 
                                setSelectedIndex(0);
                            }
                            
                        }}>
                            <a className="page-link" href='#'>Previous</a>
                        </li>
                        {pageArr.map( (row , i) => {
                            
                            if (i === pagecount) {
                                
                                return row.map( (col , i) => {
                                    //console.log(`${i}  ${col}`);
                                    return (
                                        
                                            <li id='npage-1' className={`page-item ${selectedIndex === (i) ? "active" : ""}`} key={col}
                                            onClick={ () => { setSelectedIndex(i) ; setPageNum(pageArr[pagecount][i])}} >
                                                <a className="page-link"  href='#'>{col}</a>
                                            </li>
                                        )
                                    });
                            }})
                        }
                        <li className="page-item">
                            <a className="page-link" href='#'>...</a>
                        </li>
                        <li className="page-item">
                            <a className="page-link" href='#'>{pages}</a>
                        </li>

                        <li className = {`page-item ${pagecount === pageArr[pageArr.length-1][0]  ? "disabled" : ""}`} 
                        onClick={ () => {
                            document.querySelector('.pagination .prev ').classList.remove("disabled")
                            setPageCount(pagecount+1); 
                            setPageNum(pageArr[pagecount+1][0]); 
                            setSelectedIndex(0);
                            // var firstEl = Array.from(document.querySelector('#npage')).at(0);
                            // console.log(firstEl)
                            // console.log(parseInt(firstEl))
                            //firstEl.classList.add("active");
                            
                        }}
                            >
                            <a className="page-link" href='#'>Next</a>
                        </li>
                    </ul>
                </nav>
                
                    
                </div>

            </div>
            
        </>
        
    )
    
}

//"https://media.themoviedb.org/t/p/w300_and_h450_bestv2/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg
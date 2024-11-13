import React, { useState } from 'react';
import '../css/main.css'; // Optional: for styling
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import {faChevronRight ,faBookmark , faStar} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FetchUpComing } from '../slices/upComing-Slice';

const MovieCard = ({results}) => {
    console.log(results);
    return(
    <CardGroup class="card-deck">
    {
        results.map((movie , i) => {
                return(
                        <Card className='toprated-item'>
                            <Link className='position-absolute fav-section' to={`/login`}>
                                <FontAwesomeIcon icon={faBookmark} className='fav'/>
                                <span className='fs-2 text-light position-absolute plus'>+</span>
                            </Link>
                            <Link to={`/movie/${movie.id}`} className='img-hover'>
                                <Card.Img variant="top" src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${movie.backdrop_path}`} />
                            </Link>
                            <Card.Body className='py-2'>
                            <FontAwesomeIcon icon={faStar} className='d-inline-block text-warning'></FontAwesomeIcon>
                            <span className='fw-bold m-2'>{(movie.vote_average/1).toFixed(1)}</span>
                            <Card.Title>{movie.original_title}</Card.Title>
                            <Card.Text>
                                {movie.overview}
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Release : {movie.release_date}</small>
                            </Card.Footer>
                        </Card>
                )
        })
    }
    </CardGroup>
    )
}

export default MovieCard ;


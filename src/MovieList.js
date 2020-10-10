import React from 'react'
import {useEffect , useState} from 'react'
import { connect } from 'react-redux'
import * as actionCreator from "./actionCreator";

function MovieList(props) {
    const [movieName, setMovieName ]= useState([])
 
    useEffect(() => {

        // perform a fetch request 
        fetch('http://www.omdbapi.com/?s=batman&apikey=564727fa')
        .then(response => response.json())
        .then(result => {
           
            let movies = result.Search 
            console.log(movies)
            setMovieName(movies)
           props.onMovieLoaded(movies)
        })
       
    },[])
    
    const moviesList = movieName.map(movie => {
        return <li key={movie.Title}>{movie.Title}</li>
    })
          
  

    return <h1>{moviesList}</h1>

   
}

const mapDispatchToProps = (dispatch) => {
    return {
        onMovieLoaded: (movies) => dispatch(actionCreator.movieLoaded(movies))
       // onMovieLoaded: (movies) => dispatch({type: 'MOVIES_LOADED', movies: movies})
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList) 
 
import React from 'react';
import { connect } from "react-redux";
import { useState } from "react";
import * as actionCreators from "./actionCreator";
import * as actionTypes from "./actionTypes";
import MovieList from './MovieList';



function App(props) {

const [movieName , setMovieName ] = useState("")

const handleTexBoxChange = (e) => {
     setMovieName(e.target.value)
}
const handleAddMovie = () => {
  props.onAddMovie(movieName)
}

  return (
    <div>
      <p>{props.ctr}</p>
      <button onClick={()=> props.onIncrement()}>Increment</button>
      <input type="text" placeholder="movie name" name="movie" onChange={handleTexBoxChange} />
      <button onClick={()=> handleAddMovie()} >Add Movie</button>
     <MovieList />
    </div>
  );
}

const mapStateToProps =(state)=>{
    return {
      ctr: state.counter
    }
}
const mapDispatchToProps =(dispatch)=>{
   return {
     onIncrement : ()=> dispatch(actionCreators.incrementCounter()),
     onAddMovie : (nameOfMovie)=> dispatch({type:actionTypes.ADD_MOVIE,payload: {name:nameOfMovie}})
   }
}


export default connect(mapStateToProps, mapDispatchToProps ) (App);

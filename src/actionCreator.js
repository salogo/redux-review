import * as actionTypes from "./actionTypes";

export const incrementCounter =()=> {
    return {
        type:actionTypes.INC,
        payload: {value: +1 }
    }
}

export const addMovie =(nameOfMovie)=> {
  return {
      type:actionTypes.ADD_MOVIE,
      name:nameOfMovie
  }
}
export const movieLoaded = (movies) => {
    return {
        type: actionTypes.MOVIE_LOADED, 
        payload: movies 
    }
}



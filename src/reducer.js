import * as actionTypes from "./actionTypes";



const initialState ={
    counter:10,
    movieName : []
}

const reducer =(state= initialState, action)=>{
     if(action.type === actionTypes.INC){
         return {
             ...state,
             counter : state.counter + action.payload.value
         }
     } else if (action.type === "ADD_MOVIE"){
         return {
             ...state,
             movieName : state.movieName.concat(action.payload)
         }
     } else if (action.type === actionTypes.MOVIE_LOADED){
         return {
            ...state, 
            movies: action.payload 
         }
     }
    return state
}

export default reducer
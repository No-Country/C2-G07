import {GET_OBRAS_ARTES, GET_OBRAS_ARTES_NAME} from '../actions/index'

const initalState = {
    obraArtes:[]
};

export default function rootReducer(state = initalState, action){
    if(action.type === GET_OBRAS_ARTES){
        return{
            ...state,
            obraArtes: action.payload,
        }
    }

    if (action.type === GET_OBRAS_ARTES_NAME) {
        return {
          ...state,
          obraArtes: action.payload,
        };
      }


    return state
}
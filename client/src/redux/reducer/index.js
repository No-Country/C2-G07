import {
  GET_OBRAS_ARTES,
  GET_OBRAS_ARTES_NAME,
  GET_PERFIL_USUARIO,
  GET_OBRAS_USUARIO
} from "../actions/index";

const initalState = {
  obraArtes: [],
   usuario: {},
   obrasUsuario:[]
};

export default function rootReducer(state = initalState, action) {
  if (action.type === GET_OBRAS_ARTES) {
    return {
      ...state,
      obraArtes: action.payload,
    };
  }

  if (action.type === GET_OBRAS_ARTES_NAME) {
    return {
      ...state,
      obraArtes: action.payload,
    };
  }

  if (action.type === GET_PERFIL_USUARIO) {
    return {
      ...state,
      usuario: action.payload,
    };
  }

  if (action.type === GET_OBRAS_USUARIO) {
    return {
      ...state,
      obrasUsuario: action.payload,
    };
  }

  return state;
}

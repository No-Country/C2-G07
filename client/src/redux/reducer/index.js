import {
  GET_OBRAS_ARTES,
  GET_OBRAS_ARTES_NAME,
  GET_PERFIL_USUARIO,
  GET_OBRAS_USUARIO,
  GET_USUARIOS,
  GET_INFORMACION_OBRA_ARTE
} from "../actions/index";

const initalState = {
  obraArtes: [],
   usuario: {},
   obrasUsuario:[],
   usuarios:[],
   obraArte:{}
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

  if (action.type === GET_USUARIOS) {
    return{
      ...state,
      usuarios: action.payload,
    };
  }
  if (action.type === GET_INFORMACION_OBRA_ARTE) {
    return {
      ...state,
      obraArte: action.payload,
    };
  }

  return state;
}

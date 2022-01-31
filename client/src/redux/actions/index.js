import axios from 'axios';

const { REACT_APP_URL_API } = process.env;
export const GET_OBRAS_ARTES = 'GET_OBRAS_ARTES';
export const GET_OBRAS_ARTES_NAME = 'GET_OBRAS_ARTES_NAME';
export const GET_PERFIL_USUARIO = 'GET_PERFIL_USUARIO';
export const GET_OBRAS_USUARIO = 'GET_OBRAS_USUARIO';
export const GET_INFORMACION_OBRA_ARTE = 'GET_INFORMACION_OBRA_ARTE';
export const GET_CATEGORIA = 'GET_CATEGORIA';
export const GET_USUARIOS = 'GET_USUARIOS';
export const GET_OBRA_ARTES_LIKES = 'GET_OBRA_ARTES_LIKES';

export const getObrasArtes = (order) => {
	return async function (dispatch) {
		try {
			const response = await axios.get(
				`${REACT_APP_URL_API}/obraArte?order=${order}`
			);
			dispatch({
				type: GET_OBRAS_ARTES,
				payload: response.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export function getObrasArtesName(name) {
	return async function (dispatch) {
		try {
			const response = await axios.get(
				`${REACT_APP_URL_API}/obraArte?name=${name}`
			);
			dispatch({
				type: GET_OBRAS_ARTES_NAME,
				payload: response.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function getPerfilUsuario(id) {
	return async function (dispatch) {
		try {
			const response = await axios.get(`${REACT_APP_URL_API}/usuario/${id}`);
			dispatch({
				type: GET_PERFIL_USUARIO,
				payload: response.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function getObrasArtesUsuario(usuarioId) {
	return async function (dispatch) {
		try {
			const response = await axios.get(
				`${REACT_APP_URL_API}/obraArteUsuario?usuarioId=${usuarioId}`
			);
			dispatch({
				type: GET_OBRAS_USUARIO,
				payload: response.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export const getUsuarios = (order) => {
	return async function (dispatch) {
		try {
			const response = await axios.get(
				`${REACT_APP_URL_API}/usuario?order=${order}`
			);
			dispatch({
				type: GET_USUARIOS,
				payload: response.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export function getInformacionObraArte(id) {
	return async function (dispatch) {
		try {
			const response = await axios.get(`${REACT_APP_URL_API}/obraArte/${id}`);
			dispatch({
				type: GET_INFORMACION_OBRA_ARTE,
				payload: response.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export const getCategorias = () => {
	return async function (dispatch) {
		try {
			const response = await axios.get(`${REACT_APP_URL_API}/categoria`);
			dispatch({
				type: GET_CATEGORIA,
				payload: response.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
};

export function getObraArtesLikes(order) {
	return async function (dispatch) {
		try {
			const response = await axios.get(`${REACT_APP_URL_API}/obraArteLikes?order=${order}`);
			dispatch({
				type: GET_OBRA_ARTES_LIKES,
				payload: response.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}
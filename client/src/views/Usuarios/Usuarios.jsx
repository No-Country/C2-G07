import React from 'react';
import { getUsuarios } from '../../redux/actions/index';
import { useEffect , useState} from 'react';
import{ useSelector, useDispatch } from 'react-redux';
import { Cards } from '../../components/card/Card';
// import { SearchBar } from '../../components/SearchBar/SearchBar';

export default function Usuarios(){

    const usuarios = useSelector((state) => state.usuarios)
	const [order, setOrder] = useState('asc')
	const distpatch = useDispatch();
	useEffect(() =>{
		distpatch(getUsuarios(order))
	}, [distpatch,order])

    return (
        <article>
            <ul >
				{usuarios.length>0?(
					usuarios.map((user, index)=>(
						<Cards
							key={index}
							id={user.usuario_id}
							name={user.usuario_name}
							email={user.usuario_email}
							usuarioImagen={user.usuario_imagen}
						/>
					))
				):null}
			</ul>
        </article>
    )
}
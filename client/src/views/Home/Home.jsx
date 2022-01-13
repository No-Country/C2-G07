import {getObrasArtes} from '../../redux/actions/index';
import { useEffect , useState} from 'react';
import{ useSelector, useDispatch } from 'react-redux';
import { Cards } from '../../components/card/Card';
import styles from './Home.module.css';
import { SearchBar } from '../../components/SearchBar/SearchBar';

export default function Home(){
	const obrasArtes = useSelector((state) => state.obraArtes)
	const [order, setOrder] = useState('asc')
	const distpatch = useDispatch();
	useEffect(() =>{
		distpatch(getObrasArtes(order))
	}, [distpatch,order])


	return(
		<div>
			<SearchBar/>
			<ul className={styles.gridObrasArte}>
				{obrasArtes.length>0?(
					obrasArtes.map((oa, index)=>(
						<Cards
							key={index}
							id={oa.oa_id}
							name={oa.oa_name}
							reseña={oa.oa_reseña}
							fecha={oa.oa_fechaCreacion}
							likes={oa.oa_likes}
							imagen={oa.oa_imagen_obra}
							nameAutor = {oa.usuario.usuario_name}
							idUsuario={oa.usuario.usuario_id}
						/>
					))
				):null}
			</ul>
		</div>
	)
}

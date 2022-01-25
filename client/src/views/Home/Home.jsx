import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Cards } from '../../components/card/Card';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { Loader } from '../../components/Loader/Loader';
import ReactPaginate from 'react-paginate';
import { getObrasArtes } from '../../redux/actions/index';
import styles from './Home.module.css';

export default function Home() {
	const obrasArtes = useSelector((state) => state.obraArtes);
	// console.log(obrasArtes.usuario_name)
	const initialState = {
		order: 'asc',
		page: 0,
		loading: true,
	};

	const [homeState, setHomeState] = useState(initialState);
	const { order, page, loading } = homeState;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getObrasArtes(order));
		setTimeout(() => {
			setHomeState({ ...homeState, loading: false });
		}, 1350);
	}, [dispatch, order]);

	const postsPorPagina = 9;
	const pagesVisited = page * postsPorPagina;
	const pageCount = Math.ceil(obrasArtes?.length / postsPorPagina);
	const changePage = ({ selected }) => {
		setHomeState({ ...homeState, page: selected });
	};

	if (loading) return <Loader />;

	return (
		<div>
			<h1 className={styles.title}>GALERIA</h1>
			<SearchBar />
			<ReactPaginate
				previousLabel={'<'}
				nextLabel={'>'}
				pageCount={pageCount}
				onPageChange={changePage}
				containerClassName={styles.paginationBttns}
				previousLinkClassName={styles.previousBttn}
				nextLinkClassName={styles.nextBttn}
				disabledClassName={styles.paginationDisabled}
				activeClassName={styles.paginationActive}
			/>
			{!loading && (
				<ul className={styles.gridObrasArte}>
					{obrasArtes
						?.slice(pagesVisited, pagesVisited + postsPorPagina)
						.map((oa, index) => (
							<Cards
								key={index}
								id={oa.oa_id}
								name={oa.oa_name}
								resenia={oa.oa_resenia}
								likes={oa.oa_likes}
								imagen={oa.oa_imagen_obra}
								nameAutor={oa.usuario.usuario_name}
								idUsuario={oa.usuario.usuario_id}
							/>
						))}
				</ul>
			)}
			<div className={styles.containerPaginate}>
				<ReactPaginate
					previousLabel={'<'}
					nextLabel={'>'}
					pageCount={pageCount}
					onPageChange={changePage}
					containerClassName={styles.paginationBttns}
					previousLinkClassName={styles.previousBttn}
					nextLinkClassName={styles.nextBttn}
					disabledClassName={styles.paginationDisabled}
					activeClassName={styles.paginationActive}
				/>
			</div>
		</div>
	);
}

import { getObrasArtes } from "../../redux/actions/index";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Cards } from "../../components/card/Card";
import styles from "./Home.module.css";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import React from "react";
import ReactPaginate from "react-paginate";


export default function Home() {
  const obrasArtes = useSelector((state) => state.obraArtes);
  // console.log(obrasArtes.usuario_name)
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const distpatch = useDispatch();
  useEffect(() => {
    distpatch(getObrasArtes(order));
  }, [distpatch, order]);
 
  const postsPorPagina = 9;
  const pagesVisited = page * postsPorPagina;
  const pageCount = Math.ceil(obrasArtes?.length / postsPorPagina);
  const changePage = ({ selected }) => {
    setPage(selected);
  };

 
  return (
    <div>
      <h1 className={styles.title}>GALERIA</h1>
      <SearchBar />
      <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={styles.paginationBttns}
            previousLinkClassName={styles.previousBttn}
            nextLinkClassName={styles.nextBttn}
            disabledClassName={styles.paginationDisabled}
            activeClassName={styles.paginationActive}
          />
      <ul className={styles.gridObrasArte}>
        {obrasArtes.length > 0
          ? obrasArtes
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
              ))
          : null}
      </ul>
    </div>
  );
}


import { getObrasArtes } from "../../redux/actions/index";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Cards } from "../../components/card/Card";
import styles from "./Home.module.css";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import React from "react";

export default function Home() {
  const obrasArtes = useSelector((state) => state.obraArtes);
  // console.log(obrasArtes.usuario_name)
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const distpatch = useDispatch();
  useEffect(() => {
    distpatch(getObrasArtes(order));
  }, [distpatch, order]);
  const next_Page = () => {
    if (obrasArtes.length <= page + 12) {
      setPage(page);
    } else {
      setPage(page + 12);
    }
  };
  const prev_Page = () => {
    if (page < 11) {
      setPage(0);
    } else {
      setPage(page - 12);
    }
  };
  const first_Page = () => {
    setPage(0);
  };

  useEffect(() => {
    first_Page();
  }, [obrasArtes]);

  return (
    <div>
      <h1 className={styles.title}>GALERIA</h1>
      <SearchBar />
      <div className={styles.containerPagination}>
        <button className={styles.btnPaginado} onClick={prev_Page}>
          Atras
        </button>
        <p className={styles.numeroPagina}>
          Pagina {page <= 0 ? 0 : page - 12 + 1}
        </p>
        <button className={styles.btnPaginado} onClick={next_Page}>
          Siguiente
        </button>
      </div>
      <ul className={styles.gridObrasArte}>
        {obrasArtes.length > 0
          ? obrasArtes
              ?.slice(page, page + 12)
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


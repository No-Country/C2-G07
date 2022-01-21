import React from 'react';
import styles from './AboutUs.module.css';
import escritorioImg from '../../assets/img/escritorio-arte.jpg';
const AboutUs = () => {
	return (
		<div>
			<main className={`${styles.mainGrid} ${styles.main}`}>
				<div className={styles.head}>
					<h1 className={styles.pageTitle}>Acerca de nosotros</h1>
					<p className={styles.subtitle}>
						Somos especialistas en el arte. Una web diseñada especialmente para
						artistas en el que puedan difundir sus obras, pero también ser
						conectados.
					</p>
				</div>
				<div className={styles.imgContainer}>
					<img
						className={styles.mainImage}
						src={escritorioImg}
						alt='art'
					/>
				</div>
				<div className={styles.mainText}>
					<h2 className={styles.sectionTitle}>Somos realmente creativos</h2>
					<p>
						El arte es nuestra pasión, queríamos crear un espacio donde no solo
						los artistas, pero también los aficionados, amantes, coleccionistas
						o interesados en las diferentes ramas del arte puedan encontrar,
						disfrutar del material disponible e incluso conectarse con los
						artistas.
					</p>
					<p>
						Fundamentalmente entendemos la necesidad de un artista de tener un
						portfolio, es por ello que vemos esta propuesta sumamente
						interesante.
					</p>
					<h2 className={`${styles.sectionTitle} ${styles.sub}`}>
						¿Que resolvemos?
					</h2>
					<p>
						Por lo general, muchos artistas emergentes postean sus trabajos en
						redes sociales (esto no esta mal), pero puede ser mejor. Sus
						proyectos están difundidos y propagados en diferentes lugares lo que
						provoca dispersion de publico. Este publico el cual es el consumidor
						del arte, proponemos un solo lugar, un "museo virtual" donde puedan
						encontrar lo que buscan.
					</p>
				</div>
			</main>
		</div>
	);
};

export { AboutUs };

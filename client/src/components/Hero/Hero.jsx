import styles from './Hero.module.css' ;
import paraguas from '../../assets/img/paraguas-col-azul.png';
import humo from '../../assets/img/A-Cluster-Of-Curling-Pink-.png';
import React from 'react';
import ReactDOM from 'react-dom';
const Hero = () =>{
    return (
        <section>
            
                <article>
                    <div className={styles.titles}>
                        <h2 className={styles.mainTitle}> Una Web creada para artistas</h2>
                        <h3> Regístrate y podrás subir fotos y tener tu portfolio</h3>
                    </div>
                    <p>Así de simple</p>
                    <a href='/' className={styles.btnLink}>
                        REGISTRATE 
                    </a>
                </article>
                <aside>
                    <img src={humo} alt='humo rosado sin fondo' />
                </aside>
            
        </section>
    )
}

export { Hero };
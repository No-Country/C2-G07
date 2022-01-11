import styles from './Hero.module.css' ;

import humo from '../../assets/img/A-Cluster-Of-Curling-Pink-.png';
<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
=======
import { ButtonPrimaryLink } from '../ButtonPrimaryLink/ButoonPrimaryLink';
>>>>>>> develop
const Hero = () =>{
    return (
        <section>
            
                <article>
                    <div className={styles.titles}>
                        <h2 className={styles.mainTitle}> Una Web creada para artistas</h2>
<<<<<<< HEAD
                        <h3> Regístrate y podrás subir fotos y tener tu portfolio</h3>
=======
                        <h3>Regístrate y podras subir tus fotos y tener tu portfolio</h3>
>>>>>>> develop
                    </div>
                    <p>Así de simple</p>
                    <ButtonPrimaryLink name="Registrarse"/>
                </article>
                <aside>
                    <img src={humo} alt='humo rosado sin fondo' />
                </aside>
            
        </section>
    )
}

export { Hero };
import styles from '../CallToAction/CallToAction.module.css';
import paraguas from '../../assets/img/paraguas-col-azul.png';

const CallToAction = () =>{
    return (
        <section>
            
                <article>
                    <div className={styles.titles}>
                        <h2 className={styles.mainTitle}> Una Web creada para artistas</h2>
                        <h3>Registrate y vas a poder subir tus fotos y tener tu portfolio</h3>
                    </div>
                    <p>Así de simple</p>
                    <a href='/' className={styles.btn}>
                        REGISTRATE
                    </a>
                </article>
                <aside>
                    <img src={paraguas} alt='Paraguas con coso azul' />
                </aside>
            
        </section>
    )
}

export {CallToAction};
import styles from './Subtitulo.module.css';

function Subtitulo({ texto }) {
  return <h2 className={styles.h2}>{texto}</h2>;
}

export default Subtitulo;

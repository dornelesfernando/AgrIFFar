import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>404 - Página não encontrada</h2>
        <h1>Essa Página Está em Construção!</h1>
        <h2>Em breve estará disponível</h2>
      </div>
    </div>
  );
}

export default NotFound;
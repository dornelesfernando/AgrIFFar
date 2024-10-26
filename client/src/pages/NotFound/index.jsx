import styles from './NotFound.module.css';

function NotFound() {
  function handleButtomClick() {
    window.history.back();
    window.history.back();
  }

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>404 - Página não encontrada</h2>
        <h1>Essa Página Está em Construção!</h1>
        <h2>Em breve estará disponível</h2>
        <a onClick={() => handleButtomClick()}>
          <div className={styles.returnPage}>
            <h2>Retornar para a página anterior?</h2>
          </div>
        </a>
      </div>
    </div>
  );
}

export default NotFound;
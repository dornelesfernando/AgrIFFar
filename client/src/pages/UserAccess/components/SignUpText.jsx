import styles from './SignText.module.css';
import { useRef } from 'react';

function SignUpText({ setActive }) {
    const registerBtnRef = useRef(null);

    const handleRegisterClick = () => {
        setActive(true); // Aciona a classe "active" no container
    };

    return (
        <>
            <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
                <h1>Olá, Amigo!</h1>
                <p>Cadastre-se para usar todas as funcionalidades do site</p>
                <button
                    className="hidden"
                    id="register"
                    ref={registerBtnRef}
                    onClick={handleRegisterClick}
                >
                    Cadastrar
                </button>
            </div>
        </>
    );
}

export default SignUpText;
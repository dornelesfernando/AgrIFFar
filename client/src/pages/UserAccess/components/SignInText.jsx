import styles from './SignText.module.css';
import { useRef } from 'react';

function SignInText({ setActive }) {
    const loginBtnRef = useRef(null);

    const handleLoginClick = () => {
        setActive(false); // Remove a classe "active" do container
    };

    return (
        <>
            <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
                <h1>Bem-vindo de volta!</h1>
                <p>Faça login para usar todas as funcionalidades do site</p>
                <button
                    className="hidden"
                    id="login"
                    ref={loginBtnRef}
                    onClick={handleLoginClick}
                >
                    Entrar
                </button>
            </div>
        </>
    );
}

export default SignInText;
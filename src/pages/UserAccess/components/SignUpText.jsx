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
                <h1>Hello, Friend!</h1>
                <p>Register with your personal details to use all of site features</p>
                <button
                    className="hidden"
                    id="register"
                    ref={registerBtnRef}
                    onClick={handleRegisterClick}
                >
                    Sign Up
                </button>
            </div>
        </>
    );
}

export default SignUpText;
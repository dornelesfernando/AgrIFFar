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
                <h1>Welcome Back!</h1>
                <p>Enter your personal details to use all of site features</p>
                <button
                    className="hidden"
                    id="login"
                    ref={loginBtnRef}
                    onClick={handleLoginClick}
                >
                    Sign In
                </button>
            </div>
        </>
    );
}

export default SignInText;
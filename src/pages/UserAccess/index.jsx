import styles from './UserAccess.module.css';
import { useLocation } from 'react-router-dom';
import SocialIcons from './components/SocialIcons.jsx';
import SignIn from './services/SignIn.jsx';
import SignUp from './services/SignUp.jsx';
import SignInText from './components/SignInText.jsx';
import SignUpText from './components/SignUpText.jsx';
import { useState, useEffect } from 'react';

function UserAccess() {
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);

    // Alterar a tela com base no estado passado via navegação
    useEffect(() => {
        if (location.state && location.state.isLogin !== undefined) {
            setIsActive(location.state.isLogin);
        }
    }, [location.state]);

    return (
        <div className={styles.centralize}>
            <div className={`${styles.container} ${isActive ? styles.active : ''}`} id="container">
                <div className={`${styles.formContainer} ${styles.signUp}`}>
                    <form>
                        <h1>Create Account</h1>
                        <SocialIcons />
                        <SignUp />
                    </form>
                </div>
                <div className={`${styles.formContainer} ${styles.signIn}`}>
                    <form>
                        <h1>Sign In</h1>
                        <SocialIcons />
                        <SignIn />
                    </form>
                </div>
                <div className={styles.toggleContainer}>
                    <div className={styles.toggle}>
                        <SignInText setActive={setIsActive} />
                        <SignUpText setActive={setIsActive} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserAccess;
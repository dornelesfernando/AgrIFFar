import SocialIcons from "../components/SocialIcons"; 
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Axios from "axios";

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Axios.post('http://localhost:5000/auth/login', {
                email: email,
                password: password,
            });

            if (response.data.success) {
                // Armazena o tipo de usuário no localStorage
                localStorage.setItem('userType', response.data.userType);

                // Redireciona para o dashboard após o login bem-sucedido
                navigate('/dashboard');
            } else {
                setError(response.data.message); // Mostra a mensagem de erro
            }
        } catch (err) {
            console.error(err);
            setError('Ocorreu um erro durante o login. Tente novamente.');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <SocialIcons />
                <span>or use your email password</span>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <a href="#">Forget Your Password?</a>
                <button type="submit">Sign In</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </>
    );
}

export default SignIn;
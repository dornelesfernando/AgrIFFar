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
                localStorage.setItem('name', response.data.name);
                
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
                <span>ou use seu email e senha</span>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <a href="#">Esqueceu sua senha?</a>
                <button type="submit">Entrar</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </>
    );
}

export default SignIn;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SocialIcons from "../components/SocialIcons";
import Axios from 'axios';

function SignUp() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await Axios.post('http://localhost:5000/auth/register', {
                name: name,
                phone: phone,
                cpf: cpf,
                email: email,
                password: password,
            });
            
            if (response.data.success) {
                // Redireciona para o dashboard após o registro bem-sucedido
                navigate('/dashboard');
            } else {
                setError(response.data.message); // Mostra a mensagem de erro
            }
        }   catch (err) {
            console.error(err);
            setError('Ocorreu um erro durante o registro. Tente novamente.');
        };
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Criar Conta</h1>
                <SocialIcons />
                <span>ou use seus dados para cadastrar-se</span>
                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="phone"
                    placeholder="Telefone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    required
                />
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
                <button type="submit">Cadastrar</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </>
    );
}

export default SignUp;
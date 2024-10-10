import { useState } from 'react';
import SocialIcons from "../components/SocialIcons";
import Axios from 'axios';

function SignUp() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        Axios.post('http://localhost:5000/auth/register', {
            name: name,
            phone: phone,
            cpf: cpf,
            email: email,
            password: password,
        }).then((response) => {
            console.log(response);
        }).catch((err) => {
            console.error(err);
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Create Account</h1>
                <SocialIcons />
                <span>or use your email for registration</span>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="phone"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Sign Up</button>
            </form>
        </>
    );
}

export default SignUp;
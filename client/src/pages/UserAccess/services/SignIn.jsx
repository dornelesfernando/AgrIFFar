import SocialIcons from "../components/SocialIcons";
import { useState } from "react";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            // login bem-sucedido, redirecionar ou mostrar mensagem
            console.log("Login bem-sucedido", data);
        } else {
            // falha no login, exibir erro
            console.error("Erro de login", data);
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
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <a href="#">Forget Your Password?</a>
                <button type="submit">Sign In</button>
            </form>
        </>
    );
}

export default SignIn;

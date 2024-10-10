import SocialIcons from "../components/SocialIcons";
import { useState } from "react";
import Axios from "axios";

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        Axios.post('http://localhost:5000/auth/login', {
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

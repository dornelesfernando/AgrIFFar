import SocialIcons from "../components/SocialIcons"

function SignUp(){    
    return(
        <>
            <form action="" method="POST">
                <h1>Create Account</h1>
                <SocialIcons />
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button>Sign Up</button>
            </form>
        </>
    )
}

export default SignUp
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Signup from './Signup';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
  return (
    <div>
        <h2>Login</h2>
        <form action="">
            Email:
            <input 
                type="text"
                placeholder="Email"
                value={email}
                required
            />
            <br /><br />
            Password:
            <input 
                type="password" 
                placeholder="Password"
                value={password}
                required
            />
            <br /><br />
            <button type="submit">Login</button>
            <br /><br />
            New here? <Link to="/signup">Signup</Link>
        </form>
    </div>
  )
}

export default Login
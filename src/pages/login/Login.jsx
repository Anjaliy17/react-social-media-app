import "./login.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
    
    const navigate = useNavigate();

   const handleLogin = () => {
       navigate("/profile");
   };

    const { login } = useContext(AuthContext);

   // const handleLogin = () => {
    //    login();
   // };

    return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello World.</h1>
                <p>Social Media isn't a fad, it's a fundamental shift in the way we communicate.</p>
                <span>Don't you have an account?</span>
                <Link to="/register">
                    <button>Register</button>
                </Link>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username"/>
                    <input type="password" placeholder="Password"/>
                    <button onClick={ handleLogin }>Login</button>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Login

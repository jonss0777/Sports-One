import { useNavigate } from "react-router-dom";
export default function Login() {

    const navigate = useNavigate();
    function handleSubmit(event) {
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value
        console.log("username:", username);
        console.log("password:", password);
        navigate("/home");
    }


  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <br />
            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/register">Register here</a></p>
    </div>
  )
}


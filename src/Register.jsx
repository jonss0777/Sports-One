export default function Register() {
    return (
        <div>
            <h1>Register</h1>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                <br />
                <button type="submit">Register</button>
            </form>
                <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
    )
}


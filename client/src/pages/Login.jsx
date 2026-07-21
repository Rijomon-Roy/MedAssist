import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/authService";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await login(formData);

   console.log("Login Response:", data);
console.log("Token:", data.token);
console.log("User:", data.user);

localStorage.setItem("token", data.token);
localStorage.setItem("user", JSON.stringify(data.user));

console.log("Saved User:", localStorage.getItem("user"));
console.log("Saved Token:", localStorage.getItem("token"));

// Save token
localStorage.setItem("token", data.token);

// Save user
localStorage.setItem("user", JSON.stringify(data.user));

setMessage("Login Successful!");

setTimeout(() => {
  navigate("/dashboard");
}, 1500);

    } catch (error) {
      setMessage(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Login
        </button>

      </form>

      <p>
        Don't have an account?
        <Link to="/register"> Register</Link>
      </p>

    </div>
  );
}

export default Login;
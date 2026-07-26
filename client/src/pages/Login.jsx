import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { login as loginUser } from "../services/authService";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

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

    setMessage("");

    try {
      const data = await loginUser(formData);

      // Save token
      localStorage.setItem("token", data.token);

      // Save user in AuthContext
      login(data.user);

      setMessage("Login Successful!");

      // Redirect to Dashboard
      navigate("/dashboard");

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

        <div
          style={{
            textAlign: "right",
            marginTop: "10px",
            marginBottom: "15px",
          }}
        >
          <Link to="/forgot-password">
            Forgot Password?
          </Link>
        </div>

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
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { login as loginUser } from "../services/authService";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle login
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

      // Go to dashboard
      navigate("/dashboard");
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div className="stage">

      {/* =========================
          LEFT LOGIN PANEL
      ========================= */}
      <div className="panel-form">

        {/* Logo */}
        <div className="mark">
          <div className="logo">
            ✚
          </div>

          <div className="mark-word">
            MEDASSIST
          </div>
        </div>

        {/* Small Heading */}
        <div className="eyebrow">
          SECURE ACCESS
        </div>

        {/* Main Heading */}
        <h1>
          Welcome back.
        </h1>

        <p className="lede">
          Sign in to access your personalized
          healthcare assistant and continue
          your journey.
        </p>

        {/* Login Message */}
        {message && (
          <p className="message">
            {message}
          </p>
        )}

        {/* =========================
            LOGIN FORM
        ========================= */}
        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className="field">

            <label htmlFor="email">
              Email Address
            </label>

            <div className="input-wrap">

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>
          </div>

          {/* Password */}
          <div className="field">

            <label htmlFor="password">
              Password
            </label>

            <div className="input-wrap">

              <input
                id="password"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="toggle-visibility"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "HIDE" : "SHOW"}
              </button>

            </div>
          </div>

          {/* Forgot Password */}
          <div className="row-between">

            <span></span>

            <Link
              to="/forgot-password"
              className="forgot"
            >
              Forgot Password?
            </Link>

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="submit"
          >
            Login
          </button>

        </form>

        {/* Register */}
        <div className="footer-note">

          Don't have an account?{" "}

          <Link to="/register">
            Register
          </Link>

        </div>

      </div>


      {/* =========================
          RIGHT MEDICAL PANEL
      ========================= */}
      <div className="panel-vitals">

        {/* Top Bar */}
        <div className="vitals-top">

          <div className="vitals-tag">
            MEDICAL ASSISTANT
          </div>

          <div className="vitals-status">

            <span className="dot"></span>

            System Online

          </div>

        </div>


        {/* Hero */}
        <div className="hero">

          <h2>
            Your health,
            <br />
            simplified.
          </h2>

          <p>
            Get personalized health guidance,
            manage your information, and stay
            connected with your healthcare journey.
          </p>

        </div>


        {/* ECG Animation */}
        <div className="pulse-wrap">

          <svg
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          >

            <path
              className="pulse-line"
              d="
                M0,55
                L100,55
                L130,55
                L150,20
                L170,85
                L195,45
                L220,55
                L350,55
                L380,55
                L400,25
                L420,80
                L445,45
                L470,55
                L600,55
                L630,55
                L650,15
                L675,88
                L700,45
                L725,55
                L850,55
                L880,55
                L900,25
                L920,80
                L945,45
                L970,55
                L1000,55
              "
            />

          </svg>

        </div>


        {/* Floating Card */}
        <div className="floating-card">

          <h4>
            Health Support
          </h4>

          <p>
            Access your health information
            and personalized assistance anytime.
          </p>

        </div>


        {/* Bottom Statistics */}
        <div className="stats">

          <div className="stat">

            <h3>
              24/7
            </h3>

            <span>
              Available Support
            </span>

          </div>


          <div className="stat">

            <h3>
              100%
            </h3>

            <span>
              Secure Access
            </span>

          </div>


          <div className="stat">

            <h3>
              AI
            </h3>

            <span>
              Powered Assistant
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;
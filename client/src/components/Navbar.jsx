import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#1976d2",
        color: "#fff",
      }}
    >
      <h2>🩺 MedAssist</h2>

      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <span>Welcome, {user?.name}</span>

        <button
          onClick={logout}
          style={{
            padding: "8px 15px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: "#fff",
            color: "#1976d2",
            fontWeight: "bold",
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
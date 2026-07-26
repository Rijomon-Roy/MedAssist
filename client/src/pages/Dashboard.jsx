import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";

function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Dashboard</h1>

        <h2>Welcome, {user?.name}</h2>

        <p>Email: {user?.email}</p>
      </div>
    </>
  );
}

export default Dashboard;
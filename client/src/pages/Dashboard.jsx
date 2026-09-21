import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Layout from "../components/Layout";

function Dashboard() {
  const { user } = useContext(AuthContext);

  return (
    <Layout>
      <h1>Dashboard</h1>

      <h2>Welcome, {user?.name}</h2>

      <p>Email: {user?.email}</p>
    </Layout>
  );
}

export default Dashboard;
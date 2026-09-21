import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: "🏠" },
    { name: "Patients", path: "/patients", icon: "👥" },
    { name: "Appointments", path: "/appointments", icon: "📅" },
    { name: "Medicines", path: "/medicines", icon: "💊" },
    { name: "Profile", path: "/profile", icon: "👤" },
  ];

  return (
    <div
      style={{
        width: "240px",
        minHeight: "calc(100vh - 80px)",
        background: "#f5f7fa",
        padding: "20px",
        borderRight: "1px solid #ddd",
      }}
    >
      {menuItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          style={{
            display: "block",
            padding: "12px",
            marginBottom: "10px",
            textDecoration: "none",
            color: "#333",
            borderRadius: "8px",
          }}
        >
          {item.icon} {item.name}
        </NavLink>
      ))}
    </div>
  );
}

export default Sidebar;
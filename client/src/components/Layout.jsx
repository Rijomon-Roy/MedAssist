import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
        }}
      >
        <Sidebar />

        <main
          style={{
            flex: 1,
            padding: "30px",
            background: "#f8f9fa",
            minHeight: "calc(100vh - 80px)",
          }}
        >
          {children}
        </main>
      </div>
    </>
  );
}

export default Layout;
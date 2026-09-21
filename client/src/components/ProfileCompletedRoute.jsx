import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function ProfileCompletedRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!user.profileCompleted) {
    return <Navigate to="/complete-profile" replace />;
  }

  return children;
}

export default ProfileCompletedRoute;
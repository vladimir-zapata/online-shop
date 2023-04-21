import { useEffect } from "react";
import jwt_decode from "jwt-decode";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, children }) => {
  useEffect(() => {

    const authenticate = () => {
      const token = localStorage.getItem("token");

      if (!token) {
          return;
      }

      const decodedToken = jwt_decode(token);
      const currentTime = Date.now() / 1000;

      if (!(currentTime < decodedToken.exp)) {
          localStorage.removeItem("token");
          return;
      }
    }

    authenticate();
    }, []);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;

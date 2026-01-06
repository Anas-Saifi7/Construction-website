import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import Enquiries from "./admin/Enquiries";

// Protect Admin Routes
const Protected = ({ children }) => {
  const token = localStorage.getItem("adminToken");
  return token ? children : <Navigate to="/admin/login" />;
};

export default function AdminRoutes() {
  return (

      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route
          path="/admin/dashboard"
          element={
            <Protected>
              <AdminDashboard />
            </Protected>
          }
        />

        <Route
          path="/admin/enquiries"
          element={
            <Protected>
              <Enquiries />
            </Protected>
          }
        />

        {/* Default: go to dashboard if logged in */}
        <Route path="*" element={<Navigate to="/admin/login" />} />
      </Routes>

  );
}

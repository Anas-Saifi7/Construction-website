import { Link, useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      
      {/* Top Bar */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center rounded-lg">
        <h1 className="text-xl font-bold text-blue-900">
          Admin Dashboard
        </h1>

        <button
          className="text-red-600 font-semibold hover:underline"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      {/* Menu */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <Link
          to="/admin/enquiries"
          className="bg-blue-600 text-white py-10 rounded-lg text-xl font-bold
                     hover:bg-blue-700 transition shadow"
        >
          📩 View Enquiries
        </Link>
      </div>

    </div>
  );
}

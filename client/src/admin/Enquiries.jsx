import axios from "axios";
import { useEffect, useState } from "react";

export default function Enquiries() {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const token = localStorage.getItem("adminToken");
    const res = await axios.get("http://localhost:5000/api/admin/enquiries", {
      headers: { Authorization: "Bearer " + token },
    });
    setData(res.data.data);
  };

  const del = async (id) => {
    if (!window.confirm("Delete this enquiry?")) return;
    const token = localStorage.getItem("adminToken");
    await axios.delete(`http://localhost:5000/api/admin/enquiry/${id}`, {
      headers: { Authorization: "Bearer " + token },
    });
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Top Bar */}
      <div className="bg-white shadow-md p-4 flex justify-between items-center rounded-lg">
        <h2 className="text-xl font-bold text-blue-900">Enquiries</h2>

        <button
          className="text-red-500 font-bold"
          onClick={() => {
            localStorage.removeItem("adminToken");
            window.location.href = "/admin/login";
          }}
        >
          Logout
        </button>
      </div>

      {/* Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full bg-white shadow-lg rounded-lg">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Phone</th>
              <th className="p-3 hidden md:table-cell">Service</th>
              <th className="p-3 hidden md:table-cell">Message</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item._id} className="border-b hover:bg-gray-50">
                <td className="p-3">{item.name}</td>
                <td className="p-3">{item.phone}</td>
                <td className="p-3 hidden md:table-cell">{item.serviceType}</td>
                <td className="p-3 hidden md:table-cell">{item.message}</td>

                <td className="p-3 text-center">
                  <button
                    onClick={() => del(item._id)}
                    className="text-red-500 font-bold"
                  >
                    ✕
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {data.length === 0 && (
          <p className="mt-5 text-center text-gray-500">No enquiries yet.</p>
        )}
      </div>
    </div>
  );
}

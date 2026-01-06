import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
  `${import.meta.env.VITE_API_URL}/api/admin/login`,
  form,
       
        { headers: { "Content-Type": "application/json" } }
      );

      if (res.data.success) {
        localStorage.setItem("adminToken", res.data.token);
        navigate("/admin/dashboard");
      }
    } catch (err) {
      setMsg(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center">
      <form onSubmit={submit} className="bg-white p-8 rounded w-80">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>

        {msg && <p className="text-red-600 mb-3">{msg}</p>}

        <input
          type="email"
          placeholder="Admin Email"
          className="w-full border p-2 mb-3"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-2 mb-4"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}

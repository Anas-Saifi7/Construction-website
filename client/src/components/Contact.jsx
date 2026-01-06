import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    message: "",
  });
  const API_URL = import.meta.env.VITE_API_URL;

  const [status, setStatus] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    if (!formData.name || !formData.phone || !formData.message) {
      setStatus({ type: "error", text: "Name, Phone and Message are required." });
      return;
    }

    try {
      setLoading(true);
    const res = await fetch("https://construction-website-vtsn.onrender.com/api/enquiry", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});

 

      const data = await res.json();
      if (data.success) {
        setStatus({ type: "success", text: data.message });
        setFormData({ name: "", phone: "", email: "", serviceType: "", message: "" });
      } else {
        setStatus({ type: "error", text: data.message || "Something went wrong." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", text: "Server error. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
<section id="contact" className="bg-gray-50 scroll-mt-24">
  <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">

    {/* Left Info */}
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
        Contact <span className="text-blue-600">Construction Manpower Experts</span>
      </h2>

      <p className="mt-3 text-sm md:text-base text-gray-700">
        Looking for reliable construction labour, security staff, drivers,
        cooks, maids or industrial manpower in <strong>Delhi NCR</strong>?
        Get in touch with our government registered manpower contractor team.
      </p>

      <div className="mt-6 space-y-3 text-sm text-gray-800">
        <p className="flex items-center gap-3">
          <i className="fas fa-phone-alt text-blue-700 text-xl" aria-hidden="true"></i>
          <span><strong>Phone:</strong> 9873107857, 8700577431</span>
        </p>
        <p className="flex items-center gap-3">
          <i className="fas fa-envelope text-blue-700 text-xl" aria-hidden="true"></i>
          <span><strong>Email:</strong> magilalmotilal343@gmail.com</span>
        </p>
        <p className="flex items-start gap-3">
          <i className="fas fa-map-marker-alt text-blue-700 text-2xl mt-1" aria-hidden="true"></i>
          <span>
            <strong>Address:</strong> A-115, Ground Floor, Block-A, Madanpur Khadar Extn-III,
            Sarita Vihar, South Delhi - 110076
          </span>
        </p>
      </div>
    </div>

    {/* Form */}
    {/* (Your existing form logic remains same, just inputs updated as shown above) */}

{/* Form */}
<div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
  <h3 className="font-semibold text-blue-900 mb-4 text-lg">
    Send us a message
  </h3>

  {status.text && (
    <div
      className={`mb-4 text-sm p-3 rounded-lg ${
        status.type === "success"
          ? "bg-green-100 text-green-800"
          : "bg-red-100 text-red-700"
      }`}
    >
      {status.text}
    </div>
  )}

  <form
    className="space-y-4 text-sm"
    onSubmit={handleSubmit}
    aria-label="Construction manpower enquiry form"
  >
    {/* Name + Phone */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        autoComplete="name"
        aria-label="Full Name"
        required
        className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        autoComplete="tel"
        aria-label="Phone Number"
        required
        className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/* Email */}
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Email Address (optional)"
      autoComplete="email"
      aria-label="Email Address"
      className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
    />

    {/* Service Type */}
    <select
      name="serviceType"
      value={formData.serviceType}
      onChange={handleChange}
      aria-label="Select manpower service type"
      className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Select Service Type</option>
      <option value="Construction Labour">Construction Labour</option>
      <option value="Security Staff">Security Staff</option>
      <option value="Driver">Driver</option>
      <option value="Cook / Maid">Cook / Maid</option>
      <option value="Nurse / Caretaker">Nurse / Caretaker</option>
      <option value="Industrial Labour">Industrial Labour</option>
    </select>

    {/* Message */}
    <textarea
      name="message"
      value={formData.message}
      onChange={handleChange}
      rows="4"
      placeholder="Describe your manpower requirement"
      aria-label="Manpower requirement details"
      required
      className="w-full px-3 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500 resize-none"
    />

    {/* Submit */}
    <button
      type="submit"
      disabled={loading}
      className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold
                 hover:bg-blue-700 transition disabled:opacity-60"
    >
      {loading ? "Sending..." : "Send Request"}
    </button>

    {/* Trust line */}
    <p className="mt-3 text-xs text-gray-500 text-center">
      🔒 Your information is safe and will not be shared with third parties.
    </p>
  </form>
</div>

      </div>
    </section>
  );
}

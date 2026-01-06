
export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-200 text-xs md:text-sm py-6">
      <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">

        {/* Copyright */}
        <div>
          <p>
            © {new Date().getFullYear()}{" "}
            <strong>Mangilal Construction & Manpower Services</strong>.
            All Rights Reserved.
          </p>
          <p className="text-gray-300 mt-1">
            Serving Delhi NCR | Govt Registered Manpower Contractor
          </p>
        </div>

        {/* Developer Credit */}
        <p className="text-gray-300">
          Designed & Developed by{" "}
          <span className="font-semibold text-white">Anas</span>
        </p>
      </div>
    </footer>
  );
}

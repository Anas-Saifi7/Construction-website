import TeamImg from "../assets/team.jpg";

export default function About() {
  return (
    <section id="about" className="py-15 bg-gray-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-snug">
            Trusted Construction Manpower
            <span className="text-blue-600"> & Civil Contractor</span>
          </h2>

          <p className="mt-6 text-gray-700 text-lg leading-8">
            We are a government registered manpower and civil contractor company
            specializing in construction workforce solutions. We provide trained,
            skilled and unskilled workers for residential buildings, commercial
            projects, factories and industrial sites across Delhi NCR.
            <br /><br />
            Our workforce includes masons, helpers, electricians, plumbers,
            supervisors and general labor, ensuring quality execution and
            complete reliability on every project.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-5">
            {[
              { icon: "fa-id-card", title: "Govt Registered" },
              { icon: "fa-user-check", title: "Verified Workforce" },
              { icon: "fa-handshake", title: "Reliable & Trusted" },
              { icon: "fa-bolt", title: "Fast Deployment" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-4 rounded-xl flex items-center gap-3 hover:shadow-xl transition"
              >
                <i
                  className={`fas ${item.icon} text-blue-700 text-xl`}
                  aria-hidden="true"
                ></i>
                <p className="text-gray-700 font-medium">{item.title}</p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-block mt-8 bg-blue-600 text-white px-7 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
          >
            Hire Construction Manpower Now
          </a>
        </div>

        {/* Right Image */}
        <div className="relative group">
          <img
            src={TeamImg}
            alt="Skilled construction workers provided by Mangilal Construction manpower contractor"
            loading="lazy"
            className="rounded-2xl shadow-2xl w-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-700/10 rounded-2xl group-hover:bg-blue-700/20 transition"></div>
        </div>

      </div>
    </section>
  );
}

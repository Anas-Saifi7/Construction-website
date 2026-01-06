const projects = [
  {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
    name: "Residential Building Construction",
    icon: "fa-home",
    location: "New Delhi",
  },
  {
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    name: "Commercial Office Building Construction",
    icon: "fa-city",
    location: "Delhi NCR",
  },
  {
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    name: "Industrial Construction Worksite",
    icon: "fa-industry",
    location: "Delhi NCR",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-10 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold text-blue-900">
          Construction Projects Completed in Delhi NCR
        </h2>

        <p className="text-gray-600 mt-3 text-lg">
          Residential, commercial and industrial construction projects delivered
          with quality workmanship and trusted manpower.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden shadow-lg group cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.name} project by Mangilal Construction in ${p.location}`}
                  loading="lazy"
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="bg-blue-900 text-white py-3 flex items-center justify-center gap-3">
                <i
                  className={`fas ${p.icon} text-lg`}
                  aria-hidden="true"
                ></i>
                <p className="font-semibold">
                  {p.name}
                  <span className="block text-xs text-blue-200">
                    {p.location}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-block mt-10 bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
        >
          Book a Free Construction Site Visit
        </a>

      </div>
    </section>
  );
}

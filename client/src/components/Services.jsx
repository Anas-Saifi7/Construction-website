import ConstructionImg from "../assets/teams.jpg"; // Construction representative
import SecurityImg from "../assets/security.jpg";
import DriverImg from "../assets/driver.jpg";
import CookImg from "../assets/cook.jpg";
import NurseImg from "../assets/nurse.jpg";
import FactoryImg from "../assets/team.jpg"; // industrial labour sample

const services = [
  {
    img: ConstructionImg,
    icon: "fa-hard-hat",
    title: "Construction Labour Supply",
    desc: "Skilled and unskilled construction labour for residential, commercial and industrial civil projects across Delhi NCR.",
  },
  {
    img: SecurityImg,
    icon: "fa-user-shield",
    title: "Security Guard Services",
    desc: "Professional and verified security staff for residential societies, factories and commercial properties.",
  },
  {
    img: DriverImg,
    icon: "fa-car-side",
    title: "Driver Placement Services",
    desc: "Experienced drivers for personal cars, commercial vehicles and corporate transportation needs.",
  },
  {
    img: CookImg,
    icon: "fa-utensils",
    title: "Cook & Maid Services",
    desc: "Verified cooks and housekeeping staff for homes, offices and guest houses.",
  },
  {
    img: NurseImg,
    icon: "fa-user-nurse",
    title: "Nurse & Caretaker Services",
    desc: "Trained nurses and caretakers for home care, hospitals and senior citizens.",
  },
  {
    img: FactoryImg,
    icon: "fa-briefcase",
    title: "Industrial Labour Supply",
    desc: "Large-scale industrial manpower for factories, warehouses and production units with full compliance.",
  },
];

export default function Services() {
  return (
    <section id="services" className="pb-15 bg-gray-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* SEO Heading */}
        <h2 className="text-4xl font-extrabold text-blue-900">
          Construction & Manpower Services in Delhi NCR
        </h2>

        <p className="mt-3 text-gray-700 text-lg">
          Government registered manpower contractor providing construction labour,
          security staff, drivers, domestic helpers and industrial workforce
          across <strong>Delhi NCR</strong>.
        </p>

        {/* Service Cards */}
        <div className="mt-14 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((s, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200
              group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={s.img}
                alt={`${s.title} provided by Mangilal Construction manpower contractor in Delhi NCR`}
                className="h-72 md:h-96 w-full object-contain bg-gray-100 
                rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />

              <div className="p-6 text-center">
                <div className="text-4xl text-blue-700 group-hover:text-blue-600 transition mb-3">
                  <i className={`fas ${s.icon}`} aria-hidden="true"></i>
                </div>

                <h3 className="text-xl font-bold text-blue-900">
                  {s.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2 leading-6">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

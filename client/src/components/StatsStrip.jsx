import { useEffect } from "react";
import { CountUp } from "countup.js";

const STATS_DATA = [
  {
    id: "years",
    value: 10,
    icon: "fa-calendar-check",
    label: "Years in Service",
    suffix: "+",
  },
  {
    id: "clients",
    value: 100,
    icon: "fa-users",
    label: "Happy Clients",
    suffix: "+",
  },
  {
    id: "workers",
    value: 500,
    icon: "fa-person-digging",
    label: "Verified Workers Placed",
    suffix: "+",
  },
  {
    id: "support",
    value: 24,
    icon: "fa-headset",
    label: "Support Availability",
    suffix: "/7",
  },
];

export default function StatsStrip() {
  useEffect(() => {
    STATS_DATA.forEach((stat) => {
      const counter = new CountUp(stat.id, stat.value, {
        duration: 2.2,
        separator: ",",
      });
      if (!counter.error) counter.start();
    });
  }, []);

  return (
    <section
      className="pt-17 scroll-mt-24 bg-gradient-to-r from-blue-900 to-blue-700 py-16"
      aria-label="Company statistics and achievements"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

        {STATS_DATA.map((stat) => (
          <div
            key={stat.id}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-xl
                       hover:-translate-y-2 hover:bg-white/20 transition-all duration-300 
                       border border-white/20"
          >
            {/* Icon */}
            <i
              className={`fas ${stat.icon} text-4xl mb-3 text-yellow-400 drop-shadow`}
              aria-hidden="true"
            />

            {/* Number */}
            <p className="text-4xl font-extrabold text-white">
              <span
                id={stat.id}
                aria-live="polite"
                aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
              >
                0
              </span>
              <span className="text-xl ml-1">{stat.suffix}</span>

              {/* SEO + Screen Reader Text */}
              <span className="sr-only">
                {stat.value} {stat.label}
              </span>
            </p>

            {/* Label */}
            <p className="mt-1 text-gray-200 text-sm font-medium">
              {stat.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

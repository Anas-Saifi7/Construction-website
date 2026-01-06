export default function Hero() {
  return (
    <section
      id="home"
      className="pt-1 text-white bg-cover bg-center scroll-mt-24"
      aria-label="Construction and manpower services hero section"
      // style={{ backgroundImage: "url('/construction-manpower-delhi.jpg')" }}
    >
      <div className="bg-black/70 w-full h-full p-10 text-center backdrop-blur-sm">

        {/* Company Tagline */}
        <p className="text-blue-400 font-semibold tracking-wide text-sm md:text-base uppercase">
          Mangilal Construction & Manpower Services
        </p>

        {/* MAIN SEO H1 */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-md mt-3">
          Trusted Construction & Manpower Services in Delhi NCR
        </h1>

        {/* Services */}
        <p className="mt-4 text-lg md:text-2xl text-blue-300 font-medium drop-shadow">
          Skilled Construction Labour • Security Guards • Drivers • Domestic Staff
        </p>

        {/* Description */}
        <p className="mt-6 text-sm md:text-lg max-w-3xl mx-auto text-gray-200 leading-relaxed">
          We provide reliable construction manpower and civil contracting services
          including skilled labour, security staff, drivers and domestic workers
          with fast deployment across <strong>Delhi NCR</strong>.
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center gap-5 flex-wrap">
          <a
            href="#services"
            className="bg-blue-600 px-7 py-3 rounded-lg font-semibold text-sm md:text-base 
                       hover:bg-blue-700 shadow-lg transition"
          >
            View Construction Services
          </a>

          <a
            href="#contact"
            className="border border-white px-7 py-3 rounded-lg font-semibold text-sm md:text-base 
                       hover:bg-white hover:text-blue-900 shadow-lg transition"
          >
            Hire Manpower Now
          </a>
        </div>
      </div>
    </section>
  );
}

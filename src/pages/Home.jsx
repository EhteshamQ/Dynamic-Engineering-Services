import { projects } from "../data/projects";
import AnimateIn from "../components/AnimateIn";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative h-[70vh] md:h-[90vh] bg-primary text-white flex items-center">
        <div className="max-w-7xl mx-auto px-8">
          <AnimateIn>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-3xl">
              Engineering Tomorrow’s{" "}
              <span className="text-accent">Landmarks</span>
            </h1>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <p className="mt-6 text-base sm:text-lg text-gray-200 max-w-xl">
              Structural, Civil & MEP Engineering consultants delivering
              world-class infrastructure across the Middle East.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <div className="mt-10 flex gap-4">
              <a
                href="/projects"
                className="bg-accent text-black px-6 py-3 rounded font-semibold"
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="border border-white px-6 py-3 rounded"
              >
                Contact Us
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-8 rounded-xl border hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-gray-50 py-16 sm:py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-xl shadow hover:shadow-xl transition"
                onClick={() => (window.location.href = `/projects/${p.id}`)}
              >
                <img
                  src={p.images?.[0]}
                  className="h-56 w-full object-cover rounded-t-xl"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg">{p.title}</h3>
                  <p className="text-sm text-gray-600">{p.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let’s Build the Future Together
        </h2>
        <p className="text-gray-300 mb-10">
          Get in touch with our engineering team today.
        </p>
        <a
          href="/contact"
          className="bg-accent text-black px-8 py-4 rounded font-semibold"
        >
          Contact Us!
        </a>
      </section>
    </div>
  );
}

const services = [
  {
    title: "Structural Engineering",
    desc: "RCC, steel and complex geometry structures compliant with international standards.",
  },
  {
    title: "Civil Engineering",
    desc: "Infrastructure, bridges, expressways and large-scale developments.",
  },
  {
    title: "MEP Engineering",
    desc: "End-to-end mechanical, electrical and plumbing design services.",
  },
  {
    title: "Shop Drawings",
    desc: "Detailed RCC, steel, façade and as-built drawings.",
  },
  {
    title: "Bridge Engineering",
    desc: "Beam, arch, cable-stayed and suspension bridge designs.",
  },
  {
    title: "Technical Review",
    desc: "Third-party peer review for high-value engineering projects.",
  },
];

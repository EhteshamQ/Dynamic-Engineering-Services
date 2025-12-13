import AnimateIn from "../components/AnimateIn";

export default function Services() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-5xl font-bold mb-6">Our Engineering Services</h1>
          <p className="text-gray-200 max-w-2xl">
            Dynamic Engineering Services provides comprehensive structural,
            civil, MEP and infrastructure design services aligned with
            international standards.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <AnimateIn key={service.title} delay={index * 0.1}>
              <div className="border rounded-xl p-6 sm:p-8 hover:shadow-xl transition">
                <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-4">{service.desc}</p>

                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  {service.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Need Engineering Expertise?</h2>
        <p className="text-gray-600 mb-8">
          Contact our team to discuss your project requirements.
        </p>
        <a
          href="/contact"
          className="bg-primary text-white px-8 py-4 rounded font-semibold"
        >
          Get in Touch
        </a>
      </section>
    </div>
  );
}

const services = [
  {
    title: "Structural Engineering",
    desc: "Design of RCC, steel and composite structures for residential, commercial and industrial projects.",
    points: [
      "High-rise RCC structures",
      "Complex geometry structures",
      "Steel and composite structures",
      "Design as per British, American & Australian codes",
    ],
  },
  {
    title: "Civil & Infrastructure Engineering",
    desc: "Planning and design of large-scale civil and infrastructure projects.",
    points: [
      "Bridges (beam, arch, cable-stayed, suspension)",
      "Expressways & interchanges",
      "Underpasses and culverts",
      "Earthwork cross-sections and quantities",
    ],
  },
  {
    title: "MEP Engineering",
    desc: "Comprehensive electro-mechanical services design for all types of buildings.",
    points: [
      "HVAC systems design",
      "Electrical & lighting layouts",
      "Plumbing & drainage systems",
      "Fire fighting systems",
    ],
  },
  {
    title: "Shop Drawings & As-Builts",
    desc: "Preparation and review of detailed shop and fabrication drawings.",
    points: [
      "RCC shop drawings with BBS",
      "Steel fabrication drawings & MTO",
      "Façade & aluminum drawings",
      "As-built drawings for all structures",
    ],
  },
  {
    title: "Façade & Aluminum Engineering",
    desc: "Design and detailing of architectural façade systems.",
    points: [
      "Curtain wall systems",
      "Canopies & skylights",
      "GRC and aluminum structures",
      "Architectural steel features",
    ],
  },
  {
    title: "Technical Review & Value Engineering",
    desc: "Independent peer review and cost-effective engineering solutions.",
    points: [
      "Third-party design review",
      "Value engineering proposals",
      "Compliance verification",
      "Construction-stage support",
    ],
  },
];

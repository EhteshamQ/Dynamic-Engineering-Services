import Counter from "../components/Counter";

export default function About() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-5xl font-bold mb-6">
            About Dynamic Engineering Services
          </h1>
          <p className="text-gray-200 max-w-3xl">
            Dynamic Engineering Services is a multidisciplinary engineering
            consultancy delivering high-quality structural, civil and MEP
            solutions for complex infrastructure projects across the Middle East
            and India.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Dynamic Engineering Services is a people-centric engineering
            organization focused on delivering technically sound, cost-effective
            and innovative solutions. Our approach combines deep technical
            expertise with close collaboration at every stage of the project
            lifecycle.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We operate in carefully selected markets and have extensive
            experience working on projects complying with international
            standards including British, American and Australian codes.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-10">
          <h3 className="text-xl font-bold mb-4">What We Believe In</h3>
          <ul className="space-y-3 text-gray-700 list-disc pl-5">
            <li>Strong customer collaboration</li>
            <li>Technical excellence and innovation</li>
            <li>On-time, on-budget delivery</li>
            <li>Quality-driven engineering solutions</li>
            <li>Use of latest design tools and technologies</li>
          </ul>
        </div>
      </section>

      {/* EXPERIENCE STATS */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          <Stat end={27} suffix="+" label="Years of Technical Leadership" />
          <Stat
            end={10}
            suffix="+"
            label="Years Avg. Senior Engineer Experience"
          />
          <Stat end={100} suffix="+" label="Major Projects Delivered" />
          <Stat end={2} label="Countries of Operation" />
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Our Expertise</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {expertise.map((e) => (
            <div
              key={e.title}
              className="border rounded-xl p-8 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold mb-3">{e.title}</h3>
              <p className="text-gray-600">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-24 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Partner With a Trusted Engineering Team
        </h2>
        <p className="text-gray-300 mb-8">
          Let’s discuss how Dynamic Engineering Services can support your next
          project.
        </p>
        <a
          href="#/contact"
          className="bg-accent text-black px-8 py-4 rounded font-semibold"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}

const stats = [
  { value: "27+", label: "Years of Technical Leadership" },
  { value: "10+", label: "Years Avg. Senior Engineer Experience" },
  { value: "100+", label: "Major Projects Delivered" },
  { value: "2", label: "Countries of Operation" },
];

const expertise = [
  {
    title: "Structural Engineering",
    desc: "Design and detailing of RCC, steel and complex structures for high-rise and infrastructure projects.",
  },
  {
    title: "Infrastructure & Bridges",
    desc: "Design of expressways, interchanges, bridges and transportation infrastructure.",
  },
  {
    title: "MEP & Building Services",
    desc: "Complete electro-mechanical systems design for large commercial and institutional buildings.",
  },
  {
    title: "Façade & Architectural Steel",
    desc: "Design and detailing of façade systems, canopies, skylights and architectural features.",
  },
  {
    title: "Shop Drawings & Detailing",
    desc: "High-quality shop and fabrication drawings with accurate material take-offs.",
  },
  {
    title: "Technical Review",
    desc: "Independent peer review and value engineering for complex structures.",
  },
];

function Stat({ end, suffix = "", label }) {
  return (
    <div>
      <h3 className="text-4xl font-bold text-primary">
        <Counter end={end} suffix={suffix} />
      </h3>
      <p className="mt-2 text-gray-600 text-sm sm:text-base">{label}</p>
    </div>
  );
}

import AnimateIn from "../components/AnimateIn";

export default function Contact() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-gray-200 max-w-2xl">
            Reach out to Dynamic Engineering Services to discuss your project
            requirements. Our team will get back to you promptly.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 sm:py-20 px-4 sm:px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {/* FORM */}
        <AnimateIn>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border rounded-lg px-4 py-4 text-base focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border rounded-lg px-4 py-4 text-base focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full border rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-black transition"
            >
              Send Message
            </button>
          </form>
        </AnimateIn>

        {/* CONTACT INFO */}
        <AnimateIn delay={0.15}>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Office – Saudi Arabia</h3>
              <p>P.O. Box 6875, Arbayeen Street</p>
              <p>Jeddah 21542, KSA</p>
              <p className="mt-2">📞 +966 50 283 5630</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Office – India</h3>
              <p>8-1-364/1&2, Deluxe Colony</p>
              <p>Tolichowki, Hyderabad</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p>ashwaqkk@yahoo.com</p>
            </div>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}

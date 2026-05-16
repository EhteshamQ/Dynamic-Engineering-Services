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
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-10 text-primary text-center md:text-left">Our Presence</h2>
              
              <div className="flex flex-col items-center text-center">
                <img 
                  src={`${import.meta.env.BASE_URL}images/projects/Contact_us_india.jpg`} 
                  alt="India Skyline" 
                  className="w-full max-w-sm h-auto object-contain mb-6"
                />
                <h3 className="text-xl font-bold mb-4 text-primary">Office – India</h3>
                <div className="text-gray-700 space-y-1 text-lg">
                  <p>8-1-402/266 Gulshan Colony</p>
                  <p>Shaikpet Tolichowki Hyderabad - 500008</p>
                  <p className="pt-3 font-medium text-gray-900">
                    📞 +91 8978612076
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center text-center mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-2 text-primary">Email</h3>
              <p className="text-gray-600 font-medium text-lg">
                <a href="mailto:ashwaqkk@yahoo.com" className="hover:text-accent transition-colors">
                  ashwaqkk@yahoo.com
                </a>
              </p>
            </div>
          </div>
        </AnimateIn>
      </section>
    </div>
  );
}

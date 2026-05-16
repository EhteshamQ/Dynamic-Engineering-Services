export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="font-bold text-lg mb-3">
            Dynamic Engineering Services
          </h3>
          <p className="text-sm text-gray-600 max-w-sm leading-relaxed">
            Providing structural and infrastructure engineering services across
            airports, railways, highways, and large-scale developments.
          </p>
        </div>

        {/* Contact (moved up for mobile importance) */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-700">
            <li>
              <a
                href="mailto:contact@dynamicengg.com"
                className="hover:underline"
              >
                contact@dynamicengg.com
              </a>
            </li>
            <li>
              <a href="tel:+918978612076" className="hover:underline">
                +91 8978612076
              </a>
            </li>
            <li>Hyderabad, India</li>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href="#/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#/services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#/projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t text-center text-xs sm:text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} Dynamic Engineering Services. All rights
        reserved.
      </div>
    </footer>
  );
}

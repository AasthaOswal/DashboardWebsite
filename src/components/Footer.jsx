import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-gray-700 px-6 sm:px-12 lg:px-20 py-10 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">MyApp</h2>
          <p className="text-gray-600">
            MyApp helps you manage projects and dashboards efficiently. Simplify your workflow and get insights in real-time.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-500 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-500 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="font-semibold">Quick Links</h3>
          <ul className="space-y-1 text-gray-600">
            <li>
              <a href="/" className="hover:text-gray-900 transition-colors">Home</a>
            </li>
            <li>
              <a href="/dashboard" className="hover:text-gray-900 transition-colors">Dashboard</a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-900 transition-colors">About Us</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-900 transition-colors">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h3 className="font-semibold">Contact Us</h3>
          <p className="text-gray-600">123 Main Street, Mumbai, India</p>
          <p className="text-gray-600">Email: support@myapp.com</p>
          <p className="text-gray-600">Phone: +91 9876543210</p>
        </div>
      </div>

      <div className="mt-8 border-t pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
    
    {/* Column 1: Who We Are */}
    <div>
      <h3 className="text-xl font-bold mb-4 text-white-400 font-[family-name:var(--font-oswald)]">Who We Are</h3>
      <p className="text-white leading-relaxed">
        Globalization is a fact of life for virtually every business, and no company can afford to ignore 
        the important African markets. From Nairobi, Kigali, Entebbe, Arusha, Dar es Salaam, Addis Ababa.
      </p>
    </div>

    {/* Column 2: Quick Links */}
    <div>
      <h3 className="text-xl font-bold mb-4 text-white-400 font-[family-name:var(--font-oswald)]">Quick Links</h3>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Home</a></li>
        <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Company Profile</a></li>
        <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Events</a></li>
        <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Past Events</a></li>
        <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Rwanda Events</a></li>
        <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Testimonials</a></li>
        <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Contact Us</a></li>
      </ul>
    </div>

    {/* Column 3: Services */}
    <div>
      <h3 className="text-xl font-bold mb-4 text-white-400 font-[family-name:var(--font-oswald)]">Services</h3>
      <ul className="space-y-2">
        <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Exhibition Accessories</a></li>
        <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Exhibition Management</a></li>
        <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Exhibition Stands/Partitions</a></li>
        <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Exhibitions Logistics</a></li>
      </ul>
    </div>

    {/* Column 4: Get in Touch */}
    <div>
      <h3 className="text-xl font-bold mb-4 text-white-400 font-[family-name:var(--font-oswald)]">Get in Touch</h3>
      <div className="space-y-3">
        <p className="text-gray-300">
          <span className="font-semibold text-white">Nairobi, Kenya Office:</span><br />
          13th Floor View Park Towers, Monrovia Street, Nairobi - Kenya
        </p>
        <p className="text-gray-300">
          <span className="font-semibold text-white">Tel:</span> +254 723 839 568
        </p>
        <p className="text-gray-300">
          <span className="font-semibold text-white">Email:</span> james@jimafrica.com
        </p>
      </div>
    </div>
  </div>

  {/* Bottom Copyright Bar */}
  <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-gray-800 text-start text-gray-400">
    <p>© {new Date().getFullYear()} Jim Africa Exhibitions. All rights reserved.</p>
  </div>
</footer>
  )
}

export default Footer

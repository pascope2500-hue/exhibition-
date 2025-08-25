export default function Hero() {
  return (
    <section className="relative bg-gray-300 min-h-[600px] flex items-center justify-center">
      {/* Background pattern or texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-200 to-gray-400"></div>

      {/* Main logo and content */}
      <div className="relative z-10 text-center">
        {/* Large Jim Africa logo with shadow effect */}
        <div className="mb-8">
          <div className="relative inline-block">
            {/* Shadow effect */}
            <div className="absolute inset-0 translate-x-2 translate-y-2">
              <img src="/jim-africa-logo.png" alt="Jim Africa Shadow" className="opacity-30 filter blur-sm" />
            </div>
            {/* Main logo */}
            <img src="/jim-africa-exhibitions-logo.png" alt=" CD business solutions" className="relative z-10" />
          </div>
        </div>

        {/* Social media icons */}
        <div className="flex justify-center gap-4 mb-8">
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">f</span>
          </div>
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">t</span>
          </div>
          <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-white text-sm">in</span>
          </div>
        </div>

        {/* Contact button */}
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
          +254 723 839 568
        </button>
      </div>
    </section>
  )
}

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappFixed() {
  return (
    <>
      {/* Fixed Contact Button */}
      <a
        href="https://wa.me/254723839568"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp: +254 723 839 568"
      >
        <button
          className="fixed top-1/2 right-0 -translate-y-1/2 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-l-full font-medium transition-colors flex items-center gap-2 z-50 shadow-lg cursor-pointer"
          style={{ writingMode: "horizontal-tb" }}
          type="button"
        >
          <FaWhatsapp size={22} />
          <span>+254 723 839 568</span>
        </button>
      </a>
    </>
  );
}

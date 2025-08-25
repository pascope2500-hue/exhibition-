// export default function PremierSection() {
//   return (
//     <section className="relative bg-black text-white py-20 overflow-hidden">
//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src="/Jim Africa Recap 2024.mp4" type="video/mp4" />
//       </video>

//       {/* Overlay (optional, for better text readability) */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10 z-10"></div>

//       {/* Content */}
//       <div className="relative max-w-4xl mx-auto text-center px-4 z-20">
//         <p className="text-green-400 text-sm font-medium mb-4 tracking-wider">Award Winning Design Team</p>
//         <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
//           YOUR PREMIER EXHIBITIONS PARTNER IN EAST AFRICA
//         </h2>
//         <div className="w-24 h-1 bg-green-500 mx-auto"></div>
//       </div>
//     </section>
//   )
// }


export default function PremierSection() {
  return (
    <section className="relative bg-black text-white py-12 overflow-hidden min-h-[70vh] flex items-center">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
      >
        <source src="/Jim Africa Recap 2024.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full z-10 bg-gradient-to-t from-black/70 via-transparent to-black/70"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center px-4 z-20 w-full">
        <p className="text-sm md:text-base lg:text-xl font-medium mb-4 tracking-wider">
          Award Winning Design Team
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-[500] mb-6 md:mb-8 leading-tight px-2 font-[family-name:var(--font-oswald)]">
          YOUR PREMIER EXHIBITIONS PARTNER IN EAST AFRICA
        </h2>
        {/* <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div> */}
        
        {/* Call to Action Button */}
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-4xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base uppercase">
          View Our Portfolio
        </button>
      </div>
    </section>
  )
}
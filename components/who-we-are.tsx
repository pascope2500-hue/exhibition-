export default function WhoWeAre() {
  return (
    <>
      {/* Fixed Contact Button */}
    

      {/* Top section with contact info */}
      <div className="bg-gray-100 py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 items-center">
          {/* Left Side - Text (takes 4/5 of the space) */}
          <div className="md:col-span-3">
            <p className="font-[family-name:var(--font-oswald)] text-3xl font-[400] text-gray-800 text-center px-6">
               CD business solutions ~Your Premier Exhibitions Partner in East
              Africa
            </p>
          </div>

          {/* Right Side - Contact Box (takes 1/5 of the space) */}
          <div className="md:col-span-2 flex justify-start md:justify-center">
            <div className="bg-green-600 text-white px-12 py-6 rounded-2xl flex items-center space-x-3 shadow-md">
              {/* Icon */}
              <div className="bg-white text-green-600 rounded-full w-11 h-11 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5.121 17.804A13.937 13.937 0 0112 15c2.21 0 4.295.504 6.121 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>

              {/* Contact Info */}
              <div>
                <a href="tel:+254 723 839 568"><p className="text-md font-semibold text-white-100">+254 723 839 568</p></a> 
                <a href="mailto:colin@cdbusiness.com.au"><p className="text-xs">colin@cdbusiness.com.au</p></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white px-16 py-16">
        <div className="max-w-7xl mx-auto">
          {/* WHO WE ARE section */}
          <div className="text-center mb-9">
            <h2 className="font-[family-name:var(--font-oswald)] text-3xl text-gray-800 mb-11 font-[400]">
              WHO WE ARE
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center mt-10">
              {/* Left side - About Us content */}
              <div className="text-left flex flex-col justify-center h-full">
                <h3 className="text-xl font-semibold text-green-600 mb-4 font-[family-name:var(--font-oswald)]">
                  About Us
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                   CD business solutions is one of the leading exhibition and
                  events stand contractors in East Africa and Africa at large
                  with an experience of over 16 years in the industry; creating
                  beautiful, functional and attractive exhibition stands /
                  booths.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We have physical offices & workshop in Nairobi - Kenya, Kigali
                  - Rwanda & Dar es Salam - Tanzania. Partnerships across
                  Africa, Europe, Middle East, Far East & Americas with whom we
                  have collaborated on projects.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We specialize in exhibition stand design & construction,
                  exhibition accessories, furnitures, event tents, maxima
                  profile shell schemes, PA systems, LED screens, event planning
                  & management, last but not least interior design.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  With our experience & expertise, We help you to connect with
                  the right market and to increase your market share in Africa.
                  Our work speaks for its self, here are some of our clients
                  testimonials.
                </p>
              </div>

              {/* Right side - Image */}
              <div className="relative">
                <img
                  src="/exhibition-african-business.png"
                  alt="Exhibition Setup"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

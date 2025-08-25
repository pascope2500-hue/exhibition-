import Link from "next/link";
import { Card } from "./ui/card";

export default function WhyUs() {
  return (
    <>
      <section className="bg-white px-16 py-5 mb-5">
        <div className="max-w-7xl mx-auto">
          {/* WHO WE ARE section */}
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-oswald)] text-3xl text-gray-800 mb-11 font-[400]">
              WHY CHOOSE US
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Project 1 */}
              <Card className="border-0 shadow-none text-center p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-green-100 p-4 rounded-full mb-6">
                    <img
                      className="w-16 h-16 object-contain"
                      src="/1686634933_on-time-delivery-1.png"
                      alt="On Time Delivery"
                    />
                  </div>

                  <h3 className="font-[family-name:var(--font-oswald)] text-xl font-semibold text-green-600">
                    100% On Time Delivery
                  </h3>

                  <p className="text-gray-600 text-md leading-relaxed max-w-xs">
                    We Deliver as Agreed on the Contract.
                  </p>
                </div>
              </Card>

               <Card className="border-0 shadow-none text-center p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-green-100 p-4 rounded-full mb-6">
                    <img
                      className="w-16 h-16 object-contain"
                      src="/1686643189_peace-of-mind-1.png"
                      alt="On Time Delivery"
                    />
                  </div>

                  <h3 className="font-[family-name:var(--font-oswald)] text-xl font-semibold text-green-600">
                    Peace Of Mind
                  </h3>

                  <p className="text-gray-600 text-md leading-relaxed max-w-xs">
                   Our Professional Team will give you peace of mind by playing our roles accordingly.
                  </p>
                </div>
              </Card>

               <Card className="border-0 shadow-none text-center p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-green-100 p-4 rounded-full mb-6">
                    <img
                      className="w-16 h-16 object-contain"
                      src="/1686643315_quality-1.webp"
                      alt="On Time Delivery"
                    />
                  </div>

                  <h3 className="font-[family-name:var(--font-oswald)] text-xl font-semibold text-green-600">
                    Highest Quality Standards
                  </h3>

                  <p className="text-gray-600 text-md leading-relaxed max-w-xs">
                   From Design to Fabrication, our stands have won many awards.
                  </p>
                </div>
              </Card>

               <Card className="border-0 shadow-none text-center p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-green-100 p-4 rounded-full mb-6">
                    <img
                      className="w-16 h-16 object-contain"
                      src="/1686643386_cost-effective-1.png"
                      alt="On Time Delivery"
                    />
                  </div>

                  <h3 className="font-[family-name:var(--font-oswald)] text-xl font-semibold text-green-600">
                    Cost Effective Solutions
                  </h3>

                  <p className="text-gray-600 text-md leading-relaxed max-w-xs">
                    Friendly charges to make you a repeat customer.
                  </p>
                </div>
              </Card>
               <Card className="border-0 shadow-none text-center p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-green-100 p-4 rounded-full mb-6">
                    <img
                      className="w-16 h-16 object-contain"
                      src="/1686643429_trust-1.png"
                      alt="Honesty. Trust . Integrity"
                    />
                  </div>

                  <h3 className="font-[family-name:var(--font-oswald)] text-xl font-semibold text-green-600">
                    Honesty. Trust . Integrity
                  </h3>

                  <p className="text-gray-600 text-md leading-relaxed max-w-xs">
                    We are trustworthy contractors and delivers as stated in the contract and on time
                  </p>
                </div>
              </Card>
               <Card className="border-0 shadow-none text-center p-6 hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col items-center space-y-4">
                  <div className="bg-green-100 p-4 rounded-full mb-6">
                    <img
                      className="w-16 h-16 object-contain"
                      src="/1686643470_experience-1.png"
                      alt="Awesome Unforgettable Experience"
                    />
                  </div>

                  <h3 className="font-[family-name:var(--font-oswald)] text-xl font-semibold text-green-600">
                    Awesome Unforgettable Experience
                  </h3>

                  <p className="text-gray-600 text-md leading-relaxed max-w-xs">
                    Join Our repeat customer listing.
                  </p>
                </div>
              </Card>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

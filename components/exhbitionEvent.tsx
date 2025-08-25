import Link from "next/link";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export default function ExhibitionsEvents() {
  return (
    <>
      <section className="bg-white px-16 py-5 mb-5">
        <div className="max-w-7xl mx-auto">
          {/* WHO WE ARE section */}
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-oswald)] text-3xl text-gray-800 mb-11 font-[400]">
              EXHIBITIONS & EVENTS PROJECTS ACROSS AFRICA
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We've gained trust over the years in the events & exhibitions
              industry and below are some of our projects across Africa; 𝗞𝗲𝗻𝘆𝗮;
              𝑵𝒂𝒊𝒓𝒐𝒃𝒊 (Kenyatta International Conventional Centre, Boma Hotel,
              Radisson Blue, Moven Pick, Sarit Expo Centre, Kenya school of
              monetary studies, Trade mark Hotel, Tribe Hotel, Safari Park Hotel
              and many more), 𝑲𝒊𝒔𝒖𝒎𝒖 (Mamboleo grounds, Jomo Kenyatta grounds,
              Sarova Imperial Kisumu, Acacia Premier hotel Kisumu & The Grand
              Royal Swiss Hotel Kisumu), 𝑴𝒐𝒎𝒃𝒂𝒔𝒂 (Pride Inn Hotel Mombasa,
              Makadara grounds, Sarova Whitesands Beach Resort & Spa Mombasa),
              𝑵𝒂𝒌𝒖𝒓𝒖 show ground, 𝗥𝘄𝗮𝗻𝗱𝗮: 𝑲𝒊𝒈𝒂𝒍𝒊 Convention Centre, 𝗨𝗴𝗮𝗻𝗱𝗮:
              𝑲𝒂𝒎𝒑𝒂𝒍𝒂 (Munyonyo Commonwealth Resort) 𝗧𝗮𝗻𝘇𝗮𝗻𝗶𝗮: 𝑫𝒂𝒓-𝒆𝒔-𝑺𝒂𝒍𝒂𝒎
              (Julius Nyerere International Convention Centre (JNICC)) & 𝑨𝒓𝒖𝒔𝒉𝒂
              (Magereza grounds) 𝗘𝘁𝗵𝗶𝗼𝗽𝗶𝗮: 𝑨𝒅𝒅𝒊𝒔 𝑨𝒃𝒂𝒃𝒂 (Millennium Hall) 𝗦𝗼𝘂𝘁𝗵
              𝗔𝗳𝗿𝗶𝗰𝗮: 𝑱𝒐𝒉𝒂𝒏𝒏𝒆𝒔𝒃𝒖𝒓𝒈 (Gallagher Convention Centre) & 𝑪𝒂𝒑𝒆𝒕𝒐𝒘𝒏
              (CTICC | Cape Town International Convention Centre) 𝗡𝗶𝗴𝗲𝗿𝗶𝗮: 𝑨𝒃𝒖𝒋𝒂
              (Abuja Trade & Convention Center)
            </p>

            {/* create grid of 3 col */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Project 1 */}
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <Link href={"/"} key={index}>
                  <Card className="px-0 py-0 group relative overflow-hidden">
                    <img
                      className="rounded-lg shadow-lg w-full h-full transition-transform duration-300 group-hover:scale-105"
                      src="/exhibition-african-business.png"
                      alt="Exhibition Setup"
                    />
                    <p className="absolute inset-0 flex items-center justify-center text-green-600 uppercase font-[500] text-lg bg-white/80 opacity-0 group-hover:opacity-90 transition-all duration-500 transform translate-y-full group-hover:translate-y-0">
                      Brief description of the project goes here.
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex justify-center mb-6">
            <Button
              variant="outline"
              className="px-4 py-5 border-2 border-[#68D391] text-[#68D391] hover:bg-[#68D391] hover:text-white cursor-pointer"
            >
              Watch More
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

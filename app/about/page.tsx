"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const About = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <>
      {/* about header */}
      <div
        className="py-16 px-10"
        style={{
          backgroundImage: "url('/subheader-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="font-[family-name:var(--font-oswald)] text-2xl md:text-4xl font-[400] text-white text-center md:text-start uppercase">
            Company Profile
          </h1>
        </div>
      </div>
      {/* about body */}
      <div className="px-10 pt-20 pb-5">
        <div className="max-w-7xl mx-auto">
          <p className="text-lg font-[500] text-green-600 text-center md:text-start">
            Exhibiting in East Africa Jim Africa Exhibitions Partnership.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-10 px-4 md:px-17 pb-20 max-w-7xl mx-auto">
        <div className="md:col-span-4">
          <Carousel>
            <div className="relative">
              <CarouselContent>
                <CarouselItem>
                  <div className="flex items-center justify-center h-96">
                    <img
                      src="/jim-africa-exhibitions-logo.png"
                      alt="Slide 1"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="flex items-center justify-center h-96">
                    <img
                      src="/exhibition-african-business.png"
                      alt="Slide 2"
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CarouselItem>
                {/* Add more <CarouselItem> as needed */}
              </CarouselContent>
              {/* Carousel navigation buttons */}
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
            </div>
          </Carousel>

          <div className="mt-10">
            <p className="mt-4 text-lg font-[400] text-gray-600">
              For Exhibitions, Trade Shows/ Fairs in East Africa -Kenya, Rwanda,
              Uganda, Tanzania, Ethiopia You want to be Certain that you work
              with a Partner that is Local and understands the need for Quality
              service, Appreciates the Global Brand Requirements in Exhibitions,
              Understands the Venues and is Culturally sensitive to Client
              needs. You want to work with Jim Africa Exhibitions in East Africa
              Region.
            </p>
            <p className="mt-4 text-lg font-[400] text-gray-600">
              Globalization is a fact of life for virtually every business, and
              no company can afford to ignore the important African markets.
              From Nairobi, Kigali, Entebbe, Arusha, Dar esSalaam ,Addis Abba.
              Jim Africa Exhibitions brings the correct cultural perspective to
              your trade fair and exhibitions. We help you to connect with your
              market and to increase your market share in Africa.
            </p>
          </div>

          <div className="max-w-7xl mx-auto mt-16">
            <p className="text-lg font-[500] text-green-600 text-center md:text-start">
              Our Experience
            </p>
          </div>

          <div className="md:col-span-4">
            <Carousel>
              <div className="relative">
                <CarouselContent>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-96">
                      <img
                        src="/jim-africa-exhibitions-logo.png"
                        alt="Slide 1"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-96">
                      <img
                        src="/exhibition-african-business.png"
                        alt="Slide 2"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </CarouselItem>
                  {/* Add more <CarouselItem> as needed */}
                </CarouselContent>
                {/* Carousel navigation buttons */}
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
              </div>
            </Carousel>

            <div className="mt-10">
              <p className="mt-4 text-lg font-[400] text-gray-600">
                Our C.E.O James Njuguna founded Jim Africa Exhibitions a decade
                ago after working at the Major Exhibition Centre in Kenya. His
                BSc in Tourism from Maseno University -Kenya Coupled with Post
                Graduate Degree in Msc. Entrepreneurship fromJomo Kenyatta
                University of Agriculture and Technology- Nairobi Kenya gives
                him an edge in understanding Exhibitors Expectations and most
                importantly how to exceed them.
              </p>
              <p className="mt-4 text-lg font-[400] text-gray-600">
                We have held exhibitions in Most Exhibition Venues in East
                Africa including the Kenyatta International Convention Centre
                K.I.C.C Nairobi, Oshwal Centre Nairobi, Kamp Kigali, Kigali
                International Connvention Centre amongst Others.
              </p>
              <p className="mt-4 text-lg font-[400] text-gray-600">
                Our Clients are left with lasting impressions of our nice work
                leading to repeat Business and Numerous Referral clients.
              </p>
            </div>
          </div>


           <div className="max-w-7xl mx-auto mt-16">
            <p className="text-lg font-[500] text-green-600 text-center md:text-start">
              Our Team
            </p>
          </div>

          <div className="md:col-span-4">
            <Carousel>
              <div className="relative">
                <CarouselContent>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-96">
                      <img
                        src="/jim-africa-exhibitions-logo.png"
                        alt="Slide 1"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-96">
                      <img
                        src="/exhibition-african-business.png"
                        alt="Slide 2"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </CarouselItem>
                  {/* Add more <CarouselItem> as needed */}
                </CarouselContent>
                {/* Carousel navigation buttons */}
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
              </div>
            </Carousel>

            <div className="mt-10">
                <ul className="list-disc list-inside">
                    <li>We have a well-structured team headed by Technical Manager and Technical Supervisors.</li>
                    <li>Our Carpenters, Welders, Spraying Technicians, Electricians are all In house.</li>
                    <li>We have an Excellent design team that has made many Award winning designs.</li>
                    <li>Gives us your Concept and we shall give you a great design.</li>
                </ul>
            </div>
          </div>

          <div className="max-w-7xl mx-auto mt-16">
            <p className="text-lg font-[500] text-green-600 text-center md:text-start">
              Mission
            </p>
          </div>

          <div className="md:col-span-4">
            <Carousel>
              <div className="relative">
                <CarouselContent>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-96">
                      <img
                        src="/jim-africa-exhibitions-logo.png"
                        alt="Slide 1"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-96">
                      <img
                        src="/exhibition-african-business.png"
                        alt="Slide 2"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </CarouselItem>
                  {/* Add more <CarouselItem> as needed */}
                </CarouselContent>
                {/* Carousel navigation buttons */}
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
              </div>
            </Carousel>

            <div className="mt-10">
              
              <p className="mt-4 text-lg font-[400] text-gray-600">
                Jim Africa Exhibitions mission is to Provide Quality Service that provides our Clients with Infrastructure to grow their Business.
              </p>
            </div>
          </div>



           <div className="max-w-7xl mx-auto mt-16">
            <p className="text-lg font-[500] text-green-600 text-center md:text-start">
              Our Facilities
            </p>
          </div>

          <div className="md:col-span-4">
            <Carousel>
              <div className="relative">
                <CarouselContent>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-96">
                      <img
                        src="/jim-africa-exhibitions-logo.png"
                        alt="Slide 1"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="flex items-center justify-center h-96">
                      <img
                        src="/exhibition-african-business.png"
                        alt="Slide 2"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </CarouselItem>
                  {/* Add more <CarouselItem> as needed */}
                </CarouselContent>
                {/* Carousel navigation buttons */}
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
              </div>
            </Carousel>

            <div className="mt-10">
              
              <p className="mt-4 text-lg font-[400] text-gray-600">
                Jim Africa Exhibitions mission is to Provide Quality Service that provides our Clients with Infrastructure to grow their Business.
              </p>

              <p className="mt-4 text-lg font-[400] text-gray-600">
                Our 7 Tonnes Truck backed up With Pick Up trucks ensures that our logistics is seamless. Our Printing press ensures that your Graphics requirements are met with the highest Quality.
              </p>
            </div>
          </div>


        </div>
        <div className="md:col-span-2">
          <div className="border p-6 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-green-600">
              START YOUR FREE DESIGN CONSULTANT NOW!
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <Input
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <Input
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  cols={12}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Attach</label>
                <Input name="attachment" type="file" onChange={handleChange} />
              </div>
              <Button
                type="submit"
                className="mt-4 w-full bg-green-600 hover:bg-green-700"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

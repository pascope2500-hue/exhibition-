"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Testimonial() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
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
            Contact Us
          </h1>
        </div>
      </div>
      {/* about body */}

      <div className="grid grid-cols-1 md:grid-cols-7 gap-10 px-4 md:px-17 max-w-7xl mx-auto md:px-17 pb-20 max-w-7xl mx-auto py-25">
        <div className="md:col-span-3">
          <div className="mb-6">
            <div className="max-w-7xl mx-auto mt-20">
              <h1 className="font-[family-name:var(--font-oswald)] text-xl md:text-4xl font-[400] text-gray-800 text-start md:text-start mb-7">
                Jim Africa Exhibitions ~Exhibitions Partner in East Africa
              </h1>
              <p className="text-lg text-grey-600">
               We help you to connect with your market & increase your market share in Africa.
              </p>
            </div>
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="text-start pb-8">
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl text-gray-800  font-[400]">
              GET IN TOUCH
            </h2>
          </div>
          <div className="border p-6 bg-gray-100 rounded-lg">
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
                  Phone
                </label>
                <Input
                  name="phone"
                  type="text"
                  placeholder="Subject"
                  value={formData.phone}
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
              <Button
                type="submit"
                className="mt-4 w-full bg-green-600 hover:bg-green-700 py-5 w-40 cursor-pointer text-md"
              >
                Contact Us
              </Button>
            </form>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-17 pb-20 max-w-7xl mx-auto py-10">
        <div className="md:col-span-1">
          <div className="mb-6">
            <div className="max-w-7xl mx-auto">
              
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255203.5538306502!2d29.96242590048568!3d-1.929762621636634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali!5e0!3m2!1sen!2srw!4v1756069983538!5m2!1sen!2srw" width="600" height="450" style={{"border":"0"}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <div className="md:col-span-1">
          {/* address details */}
          <div className="px-10">
            <h3 className="text-xl font-bold mb-4 text-green-600">
              OUR OFFICE
            </h3>
            <p className="text-gray-600">
              123 Street Name, Kigali, Rwanda
            </p>
            <p className="text-gray-600">
              Phone: +250 123 456 789
            </p>
            <p className="text-gray-600">
              Email: info@jimaafrica.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

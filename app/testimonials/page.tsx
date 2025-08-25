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
            Testimonials
          </h1>
        </div>
      </div>
      {/* about body */}

      <div className="grid grid-cols-1 md:grid-cols-6 gap-10 px-4 md:px-17 pb-20 max-w-7xl mx-auto py-25">
        <div className="md:col-span-4">
          <div className="mb-6">
            <div className="max-w-7xl mx-auto">
              <h1 className="font-[family-name:var(--font-oswald)] text-2xl md:text-4xl font-[400] text-gray-800 text-center md:text-center uppercase mb-7">
                CLIENT REVIEWS & TESTIMONIALS
              </h1>
              <p className="text-lg text-grey-600 text-center md:text-center">
               Our professionalism and attention to detail exhibited throughout the entire event process, garnered us the following reviews and recommendations from our previous clients. Please click to watch!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                [1,2,3,4,5,6,7,8,9,10].map((_, index) => (
                    <iframe key={index}
              src="https://web.facebook.com/v15.0/plugins/video.php?app_id&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dff3e37966be1afbf9%26domain%3Djimafrica.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fjimafrica.com%252Ffcdf225317a963619%26relation%3Dparent.parent&container_width=360&href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F1129698765189485%2F&locale=en_US&sdk=joey&show_text=false&width=500&_rdc=1&_rdr#"
              title="Client Testimonial"
              className="w-full h-47 md:h-58"
              allowFullScreen
            />
                ))
            }
            
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
}

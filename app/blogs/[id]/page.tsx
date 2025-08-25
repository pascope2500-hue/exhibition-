"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function BlogDetails() {
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
            Blogs Details
          </h1>
        </div>
      </div>
      {/* about body */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-17 pb-20 max-w-7xl mx-auto py-20">
          <div className="rounded-none py-0 md:col-span-2"
          >
            <img
              src="/exhibition-african-business.png"
              className="w-full h-130 object-cover"
            />
            <div className="py-6">
              <h2 className="font-bold text-lg mb-2 text-green-600 font-[family-name:var(--font-oswald)]">
                Blog Title 
              </h2>
              <p className="text-sm text-gray-600 font-[400] leading-relaxed mb-9">
                Event branding isn't just about logos and colors; it's about
                crafting a cohesive identity that resonates with attendees and
                communicates the essence of the occasion.
              </p>


              <ol className="list-decimal list-inside mb-4 gap-8">
                <li className="font-bold text-lg mb-2 text-gray-600 font-[family-name:var(--font-oswald)]">
                 Linear Booths
              </li>

              <p className="text-sm text-gray-600 font-[400] leading-relaxed mb-8">
                Linear booths, also known as inline booths, are typically arranged in a straight line and share one or both sides with neighboring exhibitors. These booths are cost-effective and offer good visibility. However, they have limited space for customization compared to other booth types. Linear booths are suitable for smaller exhibitors or those with a modest budget.
              </p>
              <li className="font-bold text-lg mb-2 text-gray-600">
                Corner Booths:
              </li>

              <p className="text-sm text-gray-600 font-[400] leading-relaxed mb-8">Corner booths occupy a corner space, providing exposure from two aisles. They offer better visibility and traffic flow than linear booths, making them a popular choice for exhibitors looking to maximize their presence without investing in a larger island booth. Corner booths allow for more creative designs and branding opportunities. 
              </p>

              <li className="font-bold text-lg mb-2 text-gray-600">
                Corner Booths:
              </li>

              <p className="text-sm text-gray-600 font-[400] leading-relaxed mb-8">Corner booths occupy a corner space, providing exposure from two aisles. They offer better visibility and traffic flow than linear booths, making them a popular choice for exhibitors looking to maximize their presence without investing in a larger island booth. Corner booths allow for more creative designs and branding opportunities. 
              </p>

              <li className="font-bold text-lg mb-2 text-gray-600">
                Corner Booths:
              </li>

              <p className="text-sm text-gray-600 font-[400] leading-relaxed">Corner booths occupy a corner space, providing exposure from two aisles. They offer better visibility and traffic flow than linear booths, making them a popular choice for exhibitors looking to maximize their presence without investing in a larger island booth. Corner booths allow for more creative designs and branding opportunities. 
              </p>
              </ol>              
            </div>
            
          </div>
      </div>
    </>
  );
}

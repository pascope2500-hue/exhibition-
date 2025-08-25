"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Blogs() {
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
            Blogs
          </h1>
        </div>
      </div>
      {/* about body */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 px-4 md:px-17 pb-20 max-w-7xl mx-auto py-20">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, index) => (
          <Card
            key={index}
            className="rounded-none py-0 border-none shadow-none"
          >
            <img
              src="/exhibition-african-business.png"
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg mb-2 text-green-600">
                Blog Title {index + 1}
              </h2>
              <p className="text-sm text-gray-600 font-[400] leading-relaxed">
                Event branding isn't just about logos and colors; it's about
                crafting a cohesive identity that resonates with attendees and
                communicates the essence of the occasion.
              </p>
            </div>
            <div className="flex justify-center">
              <Link href={`/blogs/${index + 1}`} className="cursor-pointer">
                <Button
                  variant={"outline"}
                  className="px-4 py-5 border-green-600 text-green-600 hover:bg-green-600 hover:text-white w-40 cursor-pointer border-2"
                >
                  Read More
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

import React from "react";
import { Button } from "./ui/button";

const ReviewCard = () => {
  return (
    <div className="text-center bg-gray-100 px-16">
      <h2 className="font-[family-name:var(--font-oswald)] text-3xl text-gray-800 py-10 font-[400]">
        CLIENT REVIEWS & TESTIMONIALS
      </h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        Our professionalism and attention to detail exhibited throughout the
        entire event process, garnered us the following reviews and
        recommendations from our previous clients. Please click to watch!
      </p>

      <div className="flex justify-center mb-6">
        <Button
          variant="outline"
          className="px-4 py-5 border-2 border-[#68D391] text-[#68D391] hover:bg-[#68D391] hover:text-white cursor-pointer mb-7"
        >
          Watch More
        </Button>
      </div>
    </div>
  );
};

export default ReviewCard;

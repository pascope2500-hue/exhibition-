import React from "react";
import { Button } from "./ui/button";

const Consultancy = () => {
  return (
    <div className="text-center bg-green-600">
      <h2 className="font-[family-name:var(--font-oswald)] text-2xl text-white py-10 font-[400]">
        Request For a Free Consultancy now and make your next Exhibition participation a truly rewarding experience.
      </h2>

      <div className="flex justify-center">
        <Button
          variant="default"
          className="px-4 py-5 bg-white text-green-600 hover:bg-black hover:text-white cursor-pointer mb-7 uppercase rounded-none"
        >
          Request Free Quote
        </Button>
      </div> 
    </div>
  );
};

export default Consultancy;

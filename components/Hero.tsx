import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import React from 'react'
import { Button } from './ui/button';
import Image from "next/image";

function Hero() {
  return (
    <div className="flex items-center h-full border-b mx-10 pb-5">
      <div className="flex flex-col w-3/5  ">
        <h1 className="text-6xl font-bold">
          We Provide Total Health Care Solution
        </h1>
        <p className="pt-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut alias
          nesciunt nemo aperiam, repellendus, adipisci, eaque fugiat recusandae
          ratione corporis aspernatur rem optio distinctio porro eligendi? In
          laudantium quibusdam qui?
        </p>
        <div className="flex pt-10 gap-10">
          <Button size="lg" className="bg-green-500 hover:bg-green-400">
            Get Started
          </Button>
          <Button size="lg" className="border-green-500" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>

      <div className="flex w-2/5 justify-center pb-2">
        {/* <Avatar className="w-1/2 h-1/2">
          <AvatarImage src="/doctor.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar> */}
        <Image
          className="dark:invert w-auto h-auto"
          src="/doctor1.png"
          alt="doctor"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}

export default Hero
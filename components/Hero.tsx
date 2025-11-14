import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

function Hero() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex  flex-col-reverse h-full border-b pb-10">
        <div className="flex flex-col w-full text-center px-20">
          <h1 className="text-6xl font-bold">
            We Provide Total Health Care Solution
          </h1>
          <p className="pt-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut alias
            nesciunt nemo aperiam, repellendus, adipisci, eaque fugiat
            recusandae ratione corporis aspernatur rem optio distinctio porro
            eligendi? In laudantium quibusdam qui? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Consequatur alias placeat distinctio
            sint fugit, temporibus quas a tempora odit animi porro ipsa
            repellendus eaque assumenda velit natus consequuntur dicta quam.
          </p>
          <div className="flex w-full justify-center pt-10 gap-10">
            <Button size="lg" className="bg-green-500 hover:bg-green-400">
              Get Started
            </Button>
            <Button size="lg" className="border-green-500" variant="outline">
              Contact Us
            </Button>
          </div>
        </div>

        <div className="flex w-full justify-center pb-2">
          {/* <Avatar className="w-1/2 h-1/2">
          <AvatarImage src="/doctor.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar> */}
          <Image
            className="dark:invert w-full h-1/3 object-cover aspect-video"
            src="/dr-hero.jpg"
            alt="doctor"
            width={700}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Hospital } from "lucide-react";
import { Textarea } from "./ui/textarea";

function AboutUs() {
  return (
    <div id="about-us" className="w-full flex justify-center p-10">
      <div className="flex flex-col h-full px-10 mb-5 rounded-2xl">
        <div className="flex flex-col gap-y-3 w-full h-full">
          <h1 className="w-full text-2xl font-bold text-green-500 mb">
            About Us
          </h1>
          <div className="w-full flex flex-col justify-center items-start text-black">
            <h1 className=" w-full text-2xl font-bold text-green-500 my-2">
              Aim
            </h1>
            <p className="leading-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, voluptatibus eaque quidem odio reprehenderit sint in
              voluptates ullam ipsam natus quia pariatur hic cumque ipsum illum,
              debitis eum provident. Itaque.
            </p>
            <p className="leading-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, voluptatibus eaque quidem odio reprehenderit sint in
              voluptates ullam ipsam natus quia pariatur hic cumque ipsum illum,
              debitis eum provident. Itaque.
            </p>
          </div>
          <div className="w-full flex flex-col justify-center items-start text-black">
            <h1 className=" w-full text-2xl font-bold text-green-500 my-2">
              Our Story
            </h1>
            <div className="flex flex-row gap-x-5">
              <div className="border-r px-5">
                <h1 className=" w-full text-2xl font-bold text-green-500 my-2">
                  History
                </h1>
                <p className="leading-6">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatibus eaque quidem odio reprehenderit sint in
                  voluptates ullam ipsam natus quia pariatur hic cumque ipsum
                  illum, debitis eum provident. Itaque.
                </p>
              </div>
              <div className="border-r px-5">
                <h1 className=" w-full text-2xl font-bold text-green-500 my-2">
                  Mission
                </h1>
                <p className="leading-5">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatibus eaque quidem odio reprehenderit sint in
                  voluptates ullam ipsam natus quia pariatur hic cumque ipsum
                  illum, debitis eum provident. Itaque.
                </p>
              </div>
              <div className="px-5">
                <h1 className=" w-full text-2xl font-bold text-green-500 my-2">
                  Values
                </h1>
                <p className="leading-6">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam, voluptatibus eaque quidem odio reprehenderit sint in
                  voluptates ullam ipsam natus quia pariatur hic cumque ipsum
                  illum, debitis eum provident. Itaque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

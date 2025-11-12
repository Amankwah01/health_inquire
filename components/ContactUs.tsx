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

function ContactUs() {
  return (
    <div id="contact-us" className="w-full flex justify-center p-10">
      <div className=" bg-green-300 flex flex-col h-150 px-10 mb-5 rounded-2xl">
        <div className="flex flex-row justify-between w-full h-full">
          <div className="w-full ms-10 flex flex-col gap-y-2 justify-center items-start text-black">
            <h1 className="text-4xl font-semibold text mb-2">
              Get in touch with <br /> us
            </h1>
            <p className="leading-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quisquam, voluptatibus eaque quidem odio reprehenderit sint in
              voluptates ullam ipsam natus quia pariatur hic cumque ipsum illum,
              debitis eum provident. Itaque.
            </p>
            <div className="flex flex-col">
              Email:
              <a className="text-lg" href="mailto:example@email.com">
                healthinquire@example.com
              </a>
            </div>
            <div className="flex flex-col">
              Phone:
              <a className="text-lg" href="tel:+123456789">
                +233 1234 456 789
              </a>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <Card className="w-5/6">
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
                <CardDescription></CardDescription>
                {/* <CardAction>
                  <Button variant="link">Sign Up</Button>
                </CardAction> */}
              </CardHeader>
              <CardContent>
                <form>
                  <div className="flex flex-col gap-6">
                    <div className="w-full flex justify-between gap-2">
                      <div className="w-full ">
                        <Label htmlFor="first-name">First Name</Label>
                        <Input
                          className="w-full"
                          id="first-name"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div className="w-full gap-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input
                          className="w-full"
                          id="last-name"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Label htmlFor="message">Message</Label>
                      </div>
                      <Textarea
                        id="message"
                        placeholder="Type your message here."
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex-col gap-2">
                <Button
                  type="submit"
                  className="bg-green-500 hover:bg-green-400 w-full"
                >
                  Submit
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

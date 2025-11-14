import React from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "./ui/menubar";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemTitle,
} from "./ui/item";
import Image from "next/image";
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

const models = [
  {
    name: "Dr. Ampoful",
    description: "Everyday tasks and UI generation.",
    image: "/doctor.png",
    credit: "Valeria Reverdo on Unsplash",
  },
  {
    name: "Dr. Asare",
    description: "Advanced thinking or reasoning.",
    image: "/doctor.png",
    credit: "Michael Oeser on Unsplash",
  },
  {
    name: "Dr. Aborgeh",
    description: "Open Source model for everyone.",
    image: "/doctor.png",
    credit: "Cherry Laithang on Unsplash",
  },
  {
    name: "Dr. Ponkoh",
    description: "Open Source model for everyone.",
    image: "/doctor.png",
    credit: "Cherry Laithang on Unsplash",
  },
  {
    name: "Dr. Amankwah",
    description: "Open Source model for everyone.",
    image: "/doctor.png",
    credit: "Cherry Laithang on Unsplash",
  },
  {
    name: "Dr. Andam",
    description: "Open Source model for everyone.",
    image: "/doctor.png",
    credit: "Cherry Laithang on Unsplash",
  },
];

function Doctors() {
  return (
    <div id="doctors" className="px-10 w-full pb-10">
      <h1 className="text-4xl font-bold my-5">Explore Our Doctors</h1>
      <div className="md: w-fit mb-5">
        <Menubar className="ms-50 shadow-xl scale-130">
          <MenubarMenu>
            <MenubarTrigger className="bg-green-500 text-white">
              All
            </MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Cardiologists</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Orthopedics</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Concologists</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Dermatologists</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Surgeons</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Gynacologists</MenubarTrigger>
          </MenubarMenu>
        </Menubar>
      </div>
      <div className="flex justify-center py-10 w-full">
        <div className="w-6/7 grid grid-cols-1 md:grid-cols-3 md:gap-3 gap-y-3">
          {models.map((model) => (
            <Card key={model.name} className="w-full md:p-0 pe-70">
              <CardHeader>
                <Image
                  src={model.image}
                  alt={model.name}
                  width={250}
                  height={250}
                  className="aspect-square w-full rounded-sm object-contain"
                />
                <CardTitle>{model.name}</CardTitle>
                <CardDescription className="w-full">
                  {model.description}
                </CardDescription>
                {/* <CardAction>
                    <Button variant="link">Sign Up</Button>
                    </CardAction> */}
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter className="flex-row gap-2 py-5">
                <Button className="bg-green-500 w-fit">Login</Button>
                <Button variant="outline" className="border-green-500 w-fit">
                  Login with Google
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        {/* <ItemGroup className="grid grid-cols-4 gap-4">
            {models.map((model) => (
              <Item key={model.name} variant="outline">
                <ItemHeader>
                  <Image
                    src={model.image}
                    alt={model.name}
                    width={128}
                    height={128}
                    className="aspect-square w-full rounded-sm object-cover"
                  />
                </ItemHeader>
                <ItemContent>
                  <ItemTitle>{model.name}</ItemTitle>
                  <ItemDescription>{model.description}</ItemDescription>
                </ItemContent>
              </Item>
            ))}
          </ItemGroup> */}
      </div>
    </div>
  );
}

export default Doctors;

{
  models.map((model) => (
    <Card key={model.name} className="w-full max-w-sm">
      <CardHeader>
        <Image
          src={model.image}
          alt={model.name}
          width={128}
          height={128}
          className="aspect-square w-full rounded-sm object-cover"
        />
        <CardTitle>{model.name}</CardTitle>
        <CardDescription>{model.description}</CardDescription>
        {/* <CardAction>
          <Button variant="link">Sign Up</Button>
        </CardAction> */}
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Login
        </Button>
        <Button variant="outline" className="w-full">
          Login with Google
        </Button>
      </CardFooter>
    </Card>
  ));
}

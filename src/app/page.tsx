"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Flashsales from "@/components/Flashsales";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Catagories from "@/components/Catagories";
import ThisMonth from "@/components/ThisMonth";
import OurProduct from "@/components/Ourproduct";
import Featured from "@/components/Featured";

export default function Home() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <div
      className="px-4
      sm:px-8
      md:px-12
      lg:px-32 pt-20"
    >
      <div className="flex flex-col lg:flex-row">
        <div>
          <Sheet>
            <SheetTrigger className="lg:hidden">
              <Image src={"/icons/ham.svg"} alt="cart" width={24} height={24} />
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetDescription>
                <ul className="px-14 pt-10 space-y-5 lg:hidden block">
                  <li className="flex justify-between">
                    <p>Women&apos;s Fashon</p>
                    <Image
                      src={"/icons/dropdownarrow.svg"}
                      alt={"arrow"}
                      width={24}
                      height={24}
                    />
                  </li>
                  <li className="flex justify-between">
                    <p>Men&apos;s Fashon</p>
                    <Image
                      src={"/icons/dropdownarrow.svg"}
                      alt={"arrow"}
                      width={24}
                      height={24}
                    />
                  </li>
                  <li>Eletronicts</li>
                  <li>Home & Lifestyle</li>
                  <li>Medicine</li>
                  <li>Sports & Outdoor</li>
                  <li>Baby&apos;s & Toys</li>
                  <li>Groceries & Pets</li>
                  <li>Health & Beauty</li>
                </ul>
              </SheetDescription>
            </SheetContent>
          </Sheet>
          <ul className="w-60 space-y-5 hidden lg:block">
            <li className="flex justify-between">
              <p>Women&apos;s Fashon</p>
              <Image
                src={"/icons/dropdownarrow.svg"}
                alt={"arrow"}
                width={24}
                height={24}
              />
            </li>
            <li className="flex justify-between">
              <p>Men&apos;s Fashon</p>
              <Image
                src={"/icons/dropdownarrow.svg"}
                alt={"arrow"}
                width={24}
                height={24}
              />
            </li>
            <li>Eletronicts</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Baby&apos;s & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>
        <div className="lg:ml-28">
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-[900px]"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              <CarouselItem>
                <div>
                  <Card className="bg-black rounded-none">
                    <CardContent className="flex items-center justify-between p-6 text-white">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <Image
                            src="/images/apple_logo.png"
                            alt="Mobile"
                            width={40}
                            height={49}
                          />
                          <p>iPhone 14 Series</p>
                        </div>
                        <h1 className="text-5xl font-semibold">
                          Up to 10% off Voucher
                        </h1>
                        <button className="flex items-center gap-4">
                          <p className="border-b border-b-white">Shop Now</p>
                          <Image
                            src="/icons/arrow-right-white.svg"
                            alt="Mobile"
                            width={24}
                            height={24}
                          />
                        </button>
                      </div>
                      <Image
                        src="/images/mobile.png"
                        alt="Mobile"
                        width={496}
                        height={352}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div>
                  <Card className=" bg-black rounded-none">
                    <CardContent className="flex items-center justify-between p-6 text-white">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 py-8">
                          <Image
                            src="/images/canon-logo.png"
                            alt="Mobile"
                            width={40}
                            height={49}
                          />
                          <p>G-911 Special Model</p>
                        </div>
                        <h1 className="text-5xl font-semibold">
                          Up to 20% off Voucher
                        </h1>
                        <button className="flex items-center gap-4">
                          <p className="border-b border-b-white">Shop Now</p>
                          <Image
                            src="/icons/arrow-right-white.svg"
                            alt="Mobile"
                            width={24}
                            height={24}
                          />
                        </button>
                      </div>
                      <Image
                        src="/images/camera.png"
                        alt="camra"
                        width={496}
                        height={352}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div>
                  <Card className="bg-black rounded-none">
                    <CardContent className="flex items-center justify-between p-6 text-white">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4 py-8">
                          <Image
                            src="/images/assus-logo.png"
                            alt="Mobile"
                            width={40}
                            height={49}
                          />
                          <p>Nvidia 13 genration</p>
                        </div>
                        <h1 className="text-5xl font-semibold">
                          Up to 15% off Voucher
                        </h1>
                        <button className="flex items-center gap-4">
                          <p className="border-b border-b-white">Shop Now</p>
                          <Image
                            src="/icons/arrow-right-white.svg"
                            alt="Mobile"
                            width={24}
                            height={24}
                          />
                        </button>
                      </div>
                      <Image
                        src="/images/assus-laptop.png"
                        alt="laptop"
                        width={496}
                        height={352}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <Flashsales />
      <hr className="my-12 mx-8 " />
      <Catagories />
      <hr className="my-12 mx-8 " />
      <ThisMonth />
      <hr className=" mx-8 " />
      <OurProduct />
      <hr className="my-12 mx-8 " />
      <Featured />
    </div>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const OurProduct = () => {
  return (
    <div>
      <div className="w-full mt-12 ">
        <div className="text-base text-[#DB4444] flex items-center gap-2">
          <div className="w-5 h-10 rounded-md bg-[#DB4444]"></div>
          <p>Our Product</p>
        </div>
        <div className="flex mt-6 pb-8">
          <div className="flex-1 flex items-center justify-between">
            <h1 className="text-4xl font-semibold">Explore our Product</h1>
          </div>
          <div className="flex-1 flex items-center justify-end gap-2">
            <div className="w-8 h-8 bg-[#7D8184] rounded-full flex items-center justify-center">
              <Image
                src={"/icons/arrow-left.svg"}
                alt={"arrow"}
                width={24}
                height={24}
              />
            </div>
            <div className="w-8 h-8 bg-[#7D8184] rounded-full flex items-center justify-center">
              <Image
                src={"/icons/arrow-right.svg"}
                alt={"arrow"}
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div
            id="1"
            className="relative w-full flex flex-col items-center justify-center gap-4 bg-[#F5F5F5] "
          >
            {/* <div className="bg-[#DB4444] text-white px-4 py-1.5 rounded-md absolute top-4 left-4">-35%</div> */}
            <div className="flex flex-col gap-3 absolute right-4 top-4">
              <button className="bg-white rounded-full p-2">
                <Image
                  src={"/icons/wishlist.svg"}
                  alt={"wislist"}
                  width={20}
                  height={80}
                />
              </button>
              <button className="bg-white rounded-full p-2">
                <Image
                  src={"/icons/view.svg"}
                  alt={"view"}
                  width={20}
                  height={80}
                />
              </button>
            </div>
            <div className="pt-6 h-[230px] overflow-hidden">
              <Image
                src="/images/dog-food.png"
                alt="dogfood"
                width={178}
                height={129}
              />
            </div>
            <Button className="w-full self-end rounded-t-none">
              <Image
                src={"/icons/Cart-w.svg"}
                alt={"cart"}
                width={20}
                height={80}
              />
              Add To Cart
            </Button>
          </div>
          <div className="text-sm mt-4 space-y-2">
            <h2 className="font-bold">Breed Dry Dog Food</h2>
            <div className="flex  gap-3">
              <p className="text-red-500">$100</p>
              <p>
                ⭐⭐⭐⭐⭐ <span className="text-[#7D8184]">{` (65)`}</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-full flex flex-col items-center justify-center gap-4 bg-[#F5F5F5] ">
            {/* <div className="bg-[#DB4444] text-white px-4 py-1.5 rounded-md absolute top-4 left-4">-35%</div> */}
            <div className="flex flex-col gap-3 absolute right-4 top-4">
              <button className="bg-white rounded-full p-2">
                <Image
                  src={"/icons/wishlist.svg"}
                  alt={"view"}
                  width={20}
                  height={80}
                />
              </button>
              <button className="bg-white rounded-full p-2">
                <Image
                  src={"/icons/view.svg"}
                  alt={"view"}
                  width={20}
                  height={80}
                />
              </button>
            </div>
            <div className="pt-6 h-[230px]">
              <Image
                src="/images/camera-p.png"
                alt="dogfood"
                width={178}
                height={129}
              />
            </div>
            <Button className="w-full self-end rounded-t-none">
              <Image
                src={"/icons/Cart-w.svg"}
                alt={"cart"}
                width={20}
                height={80}
              />
              Add To Cart
            </Button>
          </div>
          <div className="text-sm mt-4 space-y-2">
            <h2 className="font-bold">Breed Dry Dog Food</h2>
            <div className="flex  gap-3">
              <p className="text-red-500">$100</p>
              <p>
                ⭐⭐⭐⭐⭐ <span className="text-[#7D8184]">{` (65)`}</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-full flex flex-col items-center justify-center gap-4 bg-[#F5F5F5] ">
            {/* <div className="bg-[#DB4444] text-white px-4 py-1.5 rounded-md absolute top-4 left-4">-35%</div> */}
            <div className="flex flex-col gap-3 absolute right-4 top-4">
              <button className="bg-white rounded-full p-2">
                <Image
                  src={"/icons/wishlist.svg"}
                  alt={"view"}
                  width={20}
                  height={80}
                />
              </button>
              <button className="bg-white rounded-full p-2">
                <Image
                  src={"/icons/view.svg"}
                  alt={"view"}
                  width={20}
                  height={80}
                />
              </button>
            </div>
            <div className="pt-6 h-[230px]">
              <Image
                src="/images/laptop.png"
                alt="dogfood"
                width={178}
                height={129}
              />
            </div>
            <Button className="w-full self-end rounded-t-none">
              <Image
                src={"/icons/Cart-w.svg"}
                alt={"cart"}
                width={20}
                height={80}
              />
              Add To Cart
            </Button>
          </div>
          <div className="text-sm mt-4 space-y-2">
            <h2 className="font-bold">Breed Dry Dog Food</h2>
            <div className="flex  gap-3">
              <p className="text-red-500">$100</p>
              <p>
                ⭐⭐⭐⭐⭐ <span className="text-[#7D8184]">{` (65)`}</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-full flex flex-col items-center justify-center gap-4 bg-[#F5F5F5] ">
            {/* <div className="bg-[#DB4444] text-white px-4 py-1.5 rounded-md absolute top-4 left-4">-35%</div> */}
            <div className="flex flex-col gap-3 absolute right-4 top-4">
              <button className="bg-white rounded-full p-2">
                <Image
                  src={"/icons/wishlist.svg"}
                  alt={"view"}
                  width={20}
                  height={80}
                />
              </button>
              <button className="bg-white rounded-full p-2">
                <Image
                  src={"/icons/view.svg"}
                  alt={"view"}
                  width={20}
                  height={80}
                />
              </button>
            </div>
            <div className="pt-6 h-[230px]">
              <Image
                src="/images/cosmatic.png"
                alt="dogfood"
                width={178}
                height={129}
              />
            </div>
            <Button className="w-full self-end rounded-t-none">
              <Image
                src={"/icons/Cart-w.svg"}
                alt={"cart"}
                width={20}
                height={80}
              />
              Add To Cart
            </Button>
          </div>
          <div className="text-sm mt-4 space-y-2">
            <h2 className="font-bold">Breed Dry Dog Food</h2>
            <div className="flex  gap-3">
              <p className="text-red-500">$100</p>
              <p>
                ⭐⭐⭐⭐⭐ <span className="text-[#7D8184]">{` (65)`}</span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-full flex flex-col items-center justify-center gap-4 bg-[#F5F5F5] ">
            <div className="bg-[#00FF66] text-white px-4 py-1.5 rounded-md absolute top-4 left-4">
              New
            </div>
            <div className="flex flex-col gap-3 absolute right-4 top-4">
              <button className="bg-white rounded-full p-2">
                <Image
                  src={"/icons/wishlist.svg"}
                  alt={"wislist"}
                  width={20}
                  height={80}
                />
              </button>
              <button className="bg-white rounded-full p-2">
                <Image
                  src={"/icons/view.svg"}
                  alt={"view"}
                  width={20}
                  height={80}
                />
              </button>
            </div>
            <div className="pt-6 h-[230px] ">
              <Image src="/images/car.png" alt="car" width={178} height={129} />
            </div>
            <Button className="w-full self-end rounded-t-none">
              <Image
                src={"/icons/Cart-w.svg"}
                alt={"cart"}
                width={20}
                height={80}
              />
              Add To Cart
            </Button>
          </div>
          <div className="text-sm mt-4 space-y-2">
            <h2 className="font-bold">Breed Dry Dog Food</h2>
            <div className="flex  gap-3">
              <p className="text-red-500">$100</p>
              <p>
                ⭐⭐⭐⭐⭐ <span className="text-[#7D8184]">{` (65)`}</span>
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full border-4 border-black flex justify-center items-center">
                <div className="w-3 h-3 rounded-full bg-[#FB1314] "></div>
              </div>
              <div
              // className="w-6 h-6 rounded-full border-4 border-black flex justify-center items-center"
              >
                <div className="w-6 h-6 rounded-full bg-[#FB1314] "></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-full flex flex-col items-center justify-center gap-4 bg-[#F5F5F5] ">
            {/* <div className="bg-[#DB4444] text-white px-4 py-1.5 rounded-md absolute top-4 left-4">-35%</div> */}
            <div className="flex flex-col gap-3 absolute right-4 top-4">
              <button className="bg-white rounded-full p-2">
                <Image
                  src={"/icons/wishlist.svg"}
                  alt={"view"}
                  width={20}
                  height={80}
                />
              </button>
              <button className="bg-white rounded-full p-2">
                <Image
                  src={"/icons/view.svg"}
                  alt={"view"}
                  width={20}
                  height={80}
                />
              </button>
            </div>
            <div className="pt-6 h-[230px]">
              <Image
                src="/images/Copa_Soccer.png"
                alt="dogfood"
                width={178}
                height={129}
              />
            </div>
            <Button className="w-full self-end rounded-t-none">
              <Image
                src={"/icons/Cart-w.svg"}
                alt={"cart"}
                width={20}
                height={80}
              />
              Add To Cart
            </Button>
          </div>
          <div className="text-sm mt-4 space-y-2">
            <h2 className="font-bold">Breed Dry Dog Food</h2>
            <div className="flex  gap-3">
              <p className="text-red-500">$100</p>
              <p>
                ⭐⭐⭐⭐⭐ <span className="text-[#7D8184]">{` (65)`}</span>
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full border-4 border-black flex justify-center items-center">
                <div className="w-3 h-3 rounded-full bg-[#EEFF61] "></div>
              </div>
              <div
              // className="w-6 h-6 rounded-full border-4 border-black flex justify-center items-center"
              >
                <div className="w-6 h-6 rounded-full bg-[#FB1314] "></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-full flex flex-col items-center justify-center gap-4 bg-[#F5F5F5] ">
            <div className="bg-[#00FF66] text-white px-4 py-1.5 rounded-md absolute top-4 left-4">
              New
            </div>
            <div className="flex flex-col gap-3 absolute right-4 top-4">
              <button className="bg-white rounded-full p-2">
                <Image
                  src={"/icons/wishlist.svg"}
                  alt={"view"}
                  width={20}
                  height={80}
                />
              </button>
              <button className="bg-white rounded-full p-2">
                <Image
                  src={"/icons/view.svg"}
                  alt={"view"}
                  width={20}
                  height={80}
                />
              </button>
            </div>
            <div className="pt-6 h-[230px]">
              <Image
                src="/images/gamepad.png"
                alt="gamepad"
                width={178}
                height={129}
              />
            </div>
            <Button className="w-full self-end rounded-t-none">
              <Image
                src={"/icons/Cart-w.svg"}
                alt={"cart"}
                width={20}
                height={80}
              />
              Add To Cart
            </Button>
          </div>
          <div className="text-sm mt-4 space-y-2">
            <h2 className="font-bold">Breed Dry Dog Food</h2>
            <div className="flex  gap-3">
              <p className="text-red-500">$100</p>
              <p>
                ⭐⭐⭐⭐⭐ <span className="text-[#7D8184]">{` (65)`}</span>
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full border-4 border-black flex justify-center items-center">
                <div className="w-3 h-3 rounded-full bg-[#000000] "></div>
              </div>
              <div
              // className="w-6 h-6 rounded-full border-4 border-black flex justify-center items-center"
              >
                <div className="w-6 h-6 rounded-full bg-[#FB1314] "></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="relative w-full flex flex-col items-center justify-center gap-4 bg-[#F5F5F5] ">
            {/* <div className="bg-[#DB4444] text-white px-4 py-1.5 rounded-md absolute top-4 left-4">-35%</div> */}
            <div className="flex flex-col gap-3 absolute right-4 top-4">
              <button className="bg-white rounded-full p-2">
                <Image
                  src={"/icons/wishlist.svg"}
                  alt={"view"}
                  width={20}
                  height={80}
                />
              </button>
              <button className="bg-white rounded-full p-2">
                <Image
                  src={"/icons/view.svg"}
                  alt={"view"}
                  width={20}
                  height={80}
                />
              </button>
            </div>
            <div className="pt-6 h-[230px]">
              <Image
                src="/images/jacket.png"
                alt="dogfood"
                width={178}
                height={129}
              />
            </div>
            <Button className="w-full self-end rounded-t-none">
              <Image
                src={"/icons/Cart-w.svg"}
                alt={"cart"}
                width={20}
                height={80}
              />
              Add To Cart
            </Button>
          </div>
          <div className="text-sm mt-4 space-y-2">
            <h2 className="font-bold">Breed Dry Dog Food</h2>
            <div className="flex  gap-3">
              <p className="text-red-500">$100</p>
              <p>
                ⭐⭐⭐⭐⭐ <span className="text-[#7D8184]">{` (65)`}</span>
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-6 h-6 rounded-full border-4 border-black flex justify-center items-center">
                <div className="w-3 h-3 rounded-full bg-[#184A48] "></div>
              </div>
              <div
              // className="w-6 h-6 rounded-full border-4 border-black flex justify-center items-center"
              >
                <div className="w-6 h-6 rounded-full bg-[#FB1314] "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Button
          variant={"destructive"}
          className="py-6 px-16 self-center mt-14 col-span-4"
        >
          View All Products
        </Button>
      </div>
    </div>
  );
};

export default OurProduct;

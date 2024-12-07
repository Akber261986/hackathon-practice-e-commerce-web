"use client";

import { productDataHero } from "../../data/products";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

const Flashsales = () => {
  const { addToCart, addToWishlist } = useCart();

  // const isInCart = (slug: string) => {
  //   return cartItems.some((prev) => prev.slug === slug);
  // };
  // const isInWishlist = (slug: string) => {
  //   return wishlistItems.some((prev) => prev.slug === slug);
  // };
  return (
    <div className="flex flex-col ">
      <div className="w-full mt-12 md:flex items-end justify-between">
        <div className="text-base text-[#DB4444] space-y-4 md:py-6">
          <div className="flex items-center gap-2">
            <div className="w-5 h-10 rounded-md bg-[#DB4444]"></div>
            <p>Today&apos;s</p>
          </div>
          <h1 className="text-4xl text-black font-semibold">Flash Sales</h1>
        </div>
        <div className="flex py-6">
          <div className="flex-1 flex items-center justify-between">
            <div className="flex items-center gap-4 text-red-600 text-lg font-bold text-center">
              <div className="text-black">
                <p className="text-xs font-normal">Days</p>
                <p className="text-3xl">03</p>
              </div>{" "}
              :
              <div className="text-black">
                <p className="text-xs font-normal">Hours</p>
                <p className="text-3xl">23</p>
              </div>{" "}
              :
              <div className="text-black">
                <p className="text-xs font-normal">Minutes</p>
                <p className="text-3xl">19</p>
              </div>{" "}
              :
              <div className="text-black">
                <p className="text-xs font-normal">Seconds</p>
                <p className="text-3xl">56</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-end gap-2">
            <div className="w-8 h-8 bg-[#F5F5F5] rounded-full flex items-center justify-center">
              <Image
                src={"/icons/arrow-left.svg"}
                alt={"arrow"}
                width={24}
                height={24}
              />
            </div>
            <div className="w-8 h-8 bg-[#F5F5F5] rounded-full flex items-center justify-center">
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
        {productDataHero.map((item) => (
          <div key={item.slug} className="group">
            <div className="relative w-full flex flex-col items-center justify-center gap-10 bg-[#F5F5F5] ">
              <div className="bg-[#DB4444] text-white px-4 py-1.5 rounded-md absolute top-4 left-4">
                {item.discount}%
              </div>
              <button
                onClick={() => addToWishlist(item)}
                className="place-self-end mt-3 mr-3 bg-white rounded-full p-2"
              >
                <Image
                  src={"/icons/Wishlist.svg"}
                  alt={"view"}
                  width={20}
                  height={80}
                />
              </button>
              <button className="absolute right-3 top-16 bg-white rounded-full p-2">
                <Image
                  src={"/icons/view.svg"}
                  alt={"view"}
                  width={20}
                  height={80}
                />
              </button>
              <div className="h-[250px] p-4 flex items-center justify-center">
                <Image src={item.image} alt="laptop" width={250} height={250} />
              </div>
              <Button
                onClick={() => addToCart(item)}
                className="w-full self-end rounded-t-none invisible group-hover:visible"
              >
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
              <h2 className="font-bold">{item.title}</h2>
              <p className="text-red-500">
                ${item.price}{" "}
                <del className="text-[#7D8184] px-4">
                  ${item.beforeDiscount}
                </del>
              </p>
              <p>
              <span className="text-yellow-400 text-xl">
                    {"★".repeat(4)}
                    {"☆".repeat(1)}
                  </span> <span className="text-[#7D8184]">{` (65)`}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <Button variant={"destructive"} className="py-6 px-16 self-center mt-14">
        View All Products
      </Button>
    </div>
  );
};

export default Flashsales;

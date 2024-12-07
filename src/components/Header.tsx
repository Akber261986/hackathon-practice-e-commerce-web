"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import Image from "next/image";
import { Input } from "./ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTrigger,
} from "./ui/sheet";

export default function Header() {
  const { cartItems, wishlistItems } = useCart();
  const totalCartItems = cartItems.length;
  const totalWishlistItems = wishlistItems.length;

  return (
    <header
      className="py-4 flex justify-between items-center fixed w-full bg-white z-10
      px-4
      sm:px-8
      md:px-12
      lg:px-32
      "
    >
      <Link href="/" className="text-2xl font-bold">
        Exclusive
      </Link>
      <nav className="hidden md:block">
        <ul className="flex gap-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
      <div className="mr-4 flex gap-8 items-center">
        <div className="relative">
          <Input placeholder="What are you looking for? " size={25} />
          <Image
            src={"/icons/search.svg"}
            alt="cart"
            width={20}
            height={20}
            className="absolute top-2 right-2"
          />
        </div>
        <Link href="/wishlist" className="relative flex items-center">
          <Image
            src={"/icons/Wishlist.svg"}
            alt="cart"
            width={24}
            height={24}
          />
          {totalWishlistItems > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalWishlistItems}
            </div>
          )}
        </Link>
        <Link href="/cart" className="relative flex items-center">
          <Image src={"/icons/cart.svg"} alt="cart" width={24} height={24} />
          {totalCartItems > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {totalCartItems}
            </div>
          )}
        </Link>
        {/* <div className='w-10 h-10 bg-red-600 rounded-full flex justify-center items-center'>
          <Link href="/useraccount" className="flex items-center">
            <Image
            src={"/icons/user.svg"}
            alt='cart'
            width={30}
            height={30}
            />
          </Link>
        </div> */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Image src={"/icons/ham.svg"} alt="cart" width={24} height={24} />
          </SheetTrigger>
          <SheetContent>
            <SheetDescription>
              <nav>
                <ul className="flex flex-col gap-10">
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/signup">Signup</Link>
                  </li>
                </ul>
              </nav>
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

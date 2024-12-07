"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const WishListPage = () => {
  const { wishlistItems, removeFromWishlist, addToCart} = useCart();
  return (
    <div className="pt-20 px-32">
      {wishlistItems.length === 0 ? (
        <p className="place-self-center">Your Wishlist is empty.</p>
      ) : (
        <div>
        <div className="w-full flex justify-between py-14 ">
          {/* <div className="text-xl">Wishlist {`(${wishlistItems.length})`}</div> */}
          <Button className="py-6 px-8 border-[#7D8184]" variant={"outline"}>Move All To Bag</Button>
        </div>
        <div className="grid grid-cols-4 gap-4">
        {wishlistItems.map((item) => (
            <div key={item.slug}>
              <div className="w-full flex flex-col items-center justify-center gap-10 bg-[#F5F5F5] ">
              <button
              className="place-self-end mt-3 mr-3 bg-white rounded-full p-2"
              onClick={() => removeFromWishlist(item.slug)}
              >
                <Image src={"/icons/icon-delete.svg"} alt={"bag"} width={20} height={80} />
              </button>
              <div className="w-[178px] h-[129px] p-4 flex items-center justify-center">
                <Image src={item.image} alt={item.slug} width={178} height={129}
                />
              </div>
              <Button
              className="w-full self-end rounded-t-none"
              onClick={()=> addToCart(item)}
              >
                <Image src={"/icons/Cart-w.svg"} alt={"bag"} width={20} height={80} />
                  Add To Cart
              </Button></div>
              <div className="text-sm mt-4">
                <h2 className="font-bold">{item.title}</h2>
                <p className="text-red-500">${item.price}</p>
              </div>
            </div>
        ))}
        </div>
      </div>
      )}
      <div>
        <div className="w-full flex justify-between pt-14 pb-6 ">
          <div className="text-xl flex items-center gap-2">
            <div className="w-5 h-10 rounded-md bg-red-500"></div>
            <p>Just For You</p>
          </div>
          <Button className="py-6 px-8 border-[#7D8184]" variant={"outline"}>See All</Button>
        </div>
        <div className="grid grid-cols-4 gap-4">
            <div >
              <div className="relative w-full flex flex-col items-center justify-center gap-10 bg-[#F5F5F5] ">
              <div className="bg-[#DB4444] text-white px-4 py-1.5 rounded-md absolute top-4 left-4">-35%</div>
              <button
              className="place-self-end mt-3 mr-3 bg-white rounded-full p-2"
              >
                <Image src={"/icons/view.svg"} alt={"view"} width={20} height={80} />
              </button>
              <div className="w-[178px] h-[129px] p-4 flex items-center justify-center">
                <Image src="/images/laptop.png" alt="laptop" width={178} height={129}
                />
              </div>
              <Button
              className="w-full self-end rounded-t-none"
              >
                <Image src={"/icons/Cart-w.svg"} alt={"cart"} width={20} height={80} />
                  Add To Cart
              </Button></div>
              <div className="text-sm mt-4 space-y-2">
                <h2 className="font-bold">ASSUS FHD Gaming Laptop</h2>
                <p className="text-red-500">$960</p>
                <p>⭐⭐⭐⭐⭐ <span className="text-[#7D8184]">{` (65)`}</span></p>
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col items-center justify-center gap-10 bg-[#F5F5F5] ">
              <button
              className="place-self-end mt-3 mr-3 bg-white rounded-full p-2"
              >
                <Image src={"/icons/view.svg"} alt={"view"} width={20} height={80} />
              </button>
              <div className="w-[178px] h-[129px] p-4 flex items-center justify-center">
                <Image src="/images/lcd.png" alt="lcd" width={178} height={129}
                />
              </div>
              <Button
              className="w-full self-end rounded-t-none"
              >
                <Image src={"/icons/Cart-w.svg"} alt={"cart"} width={20} height={80} />
                  Add To Cart
              </Button></div>
              <div className="text-sm mt-4 space-y-2">
                <h2 className="font-bold">IPS LCD Gaming Monitor</h2>
                <p className="text-red-500">$1160 </p>
                <p>⭐⭐⭐⭐⭐ <span className="text-[#7D8184]">{`(65)`}</span></p>
              </div>
            </div>
            <div>
              <div className="relative w-full flex flex-col items-center justify-center gap-10 bg-[#F5F5F5] ">
                <div className="bg-[#00FF66] text-white px-4 py-1.5 rounded-md absolute top-4 left-4">New</div>
              <button
              className="place-self-end mt-3 mr-3 bg-white rounded-full p-2"
              >
                <Image src={"/icons/view.svg"} alt={"view"} width={20} height={80} />
              </button>
              <div className="w-[178px] h-[129px] p-4 flex items-center justify-center">
                <Image src="/images/red-gamepad.png" alt="gamepad" width={178} height={129}
                />
              </div>
              <Button
              className="w-full self-end rounded-t-none"
              >
                <Image src={"/icons/Cart-w.svg"} alt={"cart"} width={20} height={80} />
                  Add To Cart
              </Button></div>
              <div className="text-sm mt-4 space-y-2">
                <h2 className="font-bold">HAVIT HV-G92 Gamepad</h2>
                <p className="text-red-500">$560</p>
                <p>⭐⭐⭐⭐⭐ <span className="text-[#7D8184]">{`(65)`}</span></p>
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col items-center justify-center gap-10 bg-[#F5F5F5] ">
              <button
              className="place-self-end mt-3 mr-3 bg-white rounded-full p-2"
              >
                <Image src={"/icons/view.svg"} alt={"view"} width={20} height={80} />
              </button>
              <div className="w-[178px] h-[129px] p-4 flex items-center justify-center">
                <Image src="/images/keyboard.png" alt="lcd" width={178} height={129}
                />
              </div>
              <Button
              className="w-full self-end rounded-t-none"
              >
                <Image src={"/icons/Cart-w.svg"} alt={"cart"} width={20} height={80} />
                  Add To Cart
              </Button></div>
              <div className="text-sm mt-4 space-y-2">
                <h2 className="font-bold">AK-900 Wired Keyboard</h2>
                <p className="text-red-500">$200</p>
                <p>⭐⭐⭐⭐⭐ <span className="text-[#7D8184]">{`(65)`}</span></p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WishListPage

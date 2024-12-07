import Image from "next/image";
import { Button } from "@/components/ui/button";

const productDetails = () => {
  return (
    <div className="pt-20 font-sans">
      <div className="flex justify-between px-32 py-8">
        <div className=" space-y-2">
          <div className="bg-[#F5F5F5] rounded-md p-4">
            <Image
              src={"/images/product1-image1.png"}
              alt="product1"
              width={121}
              height={114}
            />
          </div>
          <div className="bg-[#F5F5F5] rounded-md p-4">
            <Image
              src={"/images/product1-image2.png"}
              alt="product1"
              width={121}
              height={114}
            />
          </div>
          <div className="bg-[#F5F5F5] rounded-md p-4">
            <Image
              src={"/images/product1-image3.png"}
              alt="product1"
              width={121}
              height={114}
            />
          </div>
          <div className="bg-[#F5F5F5] rounded-md p-4">
            <Image
              src={"/images/product1-image4.png"}
              alt="product1"
              width={121}
              height={114}
            />
          </div>
        </div>
        <div className="flex flex-col justify-center bg-[#F5F5F5] rounded-md px-7">
          <Image
            src={"/images/product1.png"}
            alt="product1"
            width={446}
            height={315}
          />
        </div>
        <div>
          <div className="w-[400px] ">
            <h1 className="text-2xl font-semibold">Havic HV G-92 Gamepad</h1>
            <p className="space-x-2">
              <span className="text-yellow-400 text-xl">
                {"★".repeat(4)}
                {"☆".repeat(1)}
              </span>
              <span className="text-[#7D8184]"> (150 rewiew)</span>
              <span className="text-[#7D8184]">|</span>
              <span className="text-[#00FF66]"> In Stock</span>
            </p>
            <h1 className="text-2xl">$192.00</h1>
            <p className="py-4">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>
          </div>
          <hr className="border-2 border-gray-500 " />
          <div className="flex items-center gap-2 py-6">
            <h1 className="text-xl mr-6">Colours:</h1>
            <div className="w-6 h-6 rounded-full border-4 border-black flex justify-center items-center">
              <div className="w-3 h-3 rounded-full bg-[#A0BCE0] "></div>
            </div>
            <div
            // className="w-6 h-6 rounded-full border-4 border-black flex justify-center items-center"
            >
              <div className="w-6 h-6 rounded-full bg-[#E07575] "></div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <h1 className="text-xl mr-6">Size:</h1>
            <div className="w-8 h-8 rounded-lg border-2 border-[#7D8184] content-center text-center hover:text-white hover:bg-[#DB4444] hover:border-none cursor-pointer">
              XS
            </div>
            <div className="w-8 h-8 rounded-lg border-2 border-[#7D8184] content-center text-center hover:text-white hover:bg-[#DB4444] hover:border-none cursor-pointer">
              S
            </div>
            <div className="w-8 h-8 rounded-lg border-2 border-[#7D8184] content-center text-center hover:text-white hover:bg-[#DB4444] hover:border-none cursor-pointer">
              M
            </div>
            <div className="w-8 h-8 rounded-lg border-2 border-[#7D8184] content-center text-center hover:text-white hover:bg-[#DB4444] hover:border-none cursor-pointer">
              L
            </div>
            <div className="w-8 h-8 rounded-lg border-2 border-[#7D8184] content-center text-center hover:text-white hover:bg-[#DB4444] hover:border-none cursor-pointer">
              XL
            </div>
          </div>
          <div className="flex items-center py-6 gap-4">
            <div className="flex border-2 border-[#7D8184] rounded-lg">
              <div className="w-10 h-10 border-r-2 border-r-gray-400 text-center hover:text-white hover:bg-[#DB4444] hover:border-none content-center rounded-l-lg">
                -
              </div>
              <div className="w-20 h-10 text-center content-center">2</div>
              <div className="w-10 h-10 border-l-2 border-l-gray-400 text-center hover:text-white hover:bg-[#DB4444] hover:border-none content-center rounded-r-lg">
                +
              </div>
            </div>
            <Button variant={"destructive"} className="py-[22px] px-8">
              {" "}
              Buy Now
            </Button>
            <div className="w-10 h-10 border-2 border-gray-400 flex items-center justify-center rounded-lg">
              <Image
                src={"/icons/Wishlist.svg"}
                alt="product1"
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className="border-2 border-[#7D8184] rounded-lg">
            <div className="flex items-center gap-4 border-b-2 border-b-[#7D8184] p-4">
              <Image
                src={"/icons/delivery-b.svg"}
                alt="product1"
                width={40}
                height={40}
              />
              <div>
                <h1 className="text-base font-semibold">Free Delivery</h1>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <Image
                src={"/icons/return.svg"}
                alt="product1"
                width={40}
                height={40}
              />
              <div>
                <h1 className="text-base font-semibold">Return Delivery</h1>
                <p>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productDetails;

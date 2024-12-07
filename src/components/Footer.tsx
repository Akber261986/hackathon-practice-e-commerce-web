import { Input } from "./ui/input";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center items-center gap-10 lg:gap-20 pt-10 pb-5 px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center gap-14 lg:gap-24">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Exclusive</h1>
          <p className="text-xl font-medium">Subscribe</p>
          <div className="space-y-2">
            <p className="text-base">Get 10% off your first order</p>
            <div className="relative ">
              <Input placeholder="Entre you Email" size={20} className="py-6" />
              <Image
                src={"/icons/send.svg"}
                alt="cart"
                width={25}
                height={25}
                className="absolute top-3 right-4"
              />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Support</h1>
          <p className="text-base">
            Block D12 sarjani, Karachi,
            <br />
            DH 1515, Pakistan.
          </p>
          <p className="text-base">akbar@gmail.com</p>
          <p className="text-base">+92 321 3011912</p>
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Account</h1>
          <p className="text-base">My Account</p>
          <p className="text-base">Login / Register</p>
          <p className="text-base">Cart</p>
          <p className="text-base">Wishlist</p>
          <p className="text-base">Shop</p>
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Quick Link</h1>
          <p className="text-base">Privacy Policy</p>
          <p className="text-base">Terms Of Use</p>
          <p className="text-base">FAQ</p>
          <p className="text-base">Contact</p>
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Download App</h1>
          <div className="space-y-2">
            <p className="text-xs font-medium text-[#7D8184]">
              Save $3 with App New User Only
            </p>
            <Image
              src={"/images/qrcode.png"}
              alt="Qr"
              width={200}
              height={84}
            />
          </div>
          <div className="flex gap-8">
            <Image
              src={"/icons/Facebook.svg"}
              alt="Facebook"
              width={24}
              height={24}
            />
            <Image
              src={"/icons/Twitter.png"}
              alt="Twitter"
              width={24}
              height={24}
            />
            <Image
              src={"/icons/Instagram.svg"}
              alt="Instagram"
              width={24}
              height={24}
            />
            <Image
              src={"/icons/Linkedin.svg"}
              alt="Linkedin"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="text-[#222222]">
          &copy; Copyright Rimel 2025. All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

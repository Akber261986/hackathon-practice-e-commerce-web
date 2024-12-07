import Image from "next/image";

const about = () => {
  return (
    <div className="pt-20 font-sans">
      <div className="flex flex-col md:flex-row py-10">
        <div className="w-full flex items-center justify-center">
          <div className="p-4 md:px-20 lg:px-32 space-y-8">
            <h1 className="text-5xl font-semibold">Our Story</h1>
            <p>
              Launced in 2015, Exclusive is South Asia&apos;s premier online
              shopping makterplace with an active presense in Bangladesh.
              Supported by wide range of tailored marketing, data and service
              solutions, Exclusive has 10,500 sallers and 300 brands and serves
              3 millioons customers across the region.{" "}
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </div>
        <div>
          <Image
            src={"/images/Side-Image.png"}
            alt="image"
            width={890}
            height={609}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-14">
          <div className="group hover:bg-[#DB4444] hover:border-none flex flex-col items-center justify-center gap-4 border border-[#7D8184] rounded-md w-[270px] h-60">
            <div className="w-20 h-20 rounded-full bg-gray-400 group-hover:bg-[#E07575] flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-black group-hover:bg-white flex items-center justify-center">
                <Image
                  src="/Catagories/shop-w.png"
                  alt="shop"
                  width={40}
                  height={40}
                  className="group-hover:hidden"
                />
                <Image
                  src="/Catagories/shop.png"
                  alt="shop"
                  width={40}
                  height={40}
                  className="hidden group-hover:block"
                />
              </div>
            </div>
            <h1 className="text-3xl font-bold font-sans group-hover:text-white">
              10.5k
            </h1>
            <h1 className="group-hover:text-white">Sellers active our site</h1>
          </div>
          <div className="group hover:bg-[#DB4444] hover:border-none flex flex-col items-center justify-center gap-4 border border-[#7D8184] rounded-md w-[270px] h-60">
            <div className="w-20 h-20 rounded-full bg-gray-400 group-hover:bg-[#E07575] flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-black group-hover:bg-white flex items-center justify-center">
                <Image
                  src="/Catagories/Sale-w.png"
                  alt="shop"
                  width={40}
                  height={40}
                  className="group-hover:hidden"
                />
                <Image
                  src="/Catagories/Sale.png"
                  alt="sale"
                  width={40}
                  height={40}
                  className="hidden group-hover:block"
                />
              </div>
            </div>
            <h1 className="text-3xl font-bold font-sans group-hover:text-white">
              33k
            </h1>
            <h1 className="group-hover:text-white">Monthly Product Sale</h1>
          </div>
          <div className="group hover:bg-[#DB4444] hover:border-none flex flex-col items-center justify-center gap-4 border border-[#7D8184] rounded-md w-[270px] h-60">
            <div className="w-20 h-20 rounded-full bg-gray-400 group-hover:bg-[#E07575] flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-black group-hover:bg-white flex items-center justify-center">
                <Image
                  src="/Catagories/Shopping-bag-w.png"
                  alt="Shopping-bag"
                  width={40}
                  height={40}
                  className="group-hover:hidden"
                />
                <Image
                  src="/Catagories/Shopping-bag.png"
                  alt="Shopping-bag"
                  width={40}
                  height={40}
                  className="hidden group-hover:block"
                />
              </div>
            </div>
            <h1 className="text-3xl font-bold font-sans group-hover:text-white">
              45.5k
            </h1>
            <h1 className="group-hover:text-white">
              Customer active in our site
            </h1>
          </div>
          <div className="group hover:bg-[#DB4444] hover:border-none flex flex-col items-center justify-center gap-4 border border-[#7D8184] rounded-md w-[270px] h-60">
            <div className="w-20 h-20 rounded-full bg-gray-400 group-hover:bg-[#E07575] flex items-center justify-center">
              <div className="w-14 h-14 rounded-full bg-black group-hover:bg-white flex items-center justify-center">
                <Image
                  src="/Catagories/Moneybag-w.png"
                  alt="Moneybag"
                  width={40}
                  height={40}
                  className="group-hover:hidden"
                />
                <Image
                  src="/Catagories/Moneybag.png"
                  alt="Moneybag"
                  width={40}
                  height={40}
                  className="hidden group-hover:block"
                />
              </div>
            </div>
            <h1 className="text-3xl font-bold font-sans group-hover:text-white">
              25k
            </h1>
            <h1 className="group-hover:text-white">
              Anual gross sale in our site
            </h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-20">
        <div className="flex flex-col md:flex-row justify-center gap-14">
          <div className="space-y-2">
            <div className="px-16 pt-4 bg-slate-100">
              <Image
                src={"/images/tom.png"}
                alt="image"
                width={237}
                height={391}
              />
            </div>
            <h1 className="text-3xl font-medium">Tom Cruise</h1>
            <p>Founder & Chairman</p>
            <div className="flex gap-4">
              <Image
                src={"/icons/Twitter-b.png"}
                alt="Twitter"
                width={24}
                height={24}
              />
              <Image
                src={"/icons/Instagram-b.svg"}
                alt="Instagram"
                width={24}
                height={24}
              />
              <Image
                src={"/icons/Linkedin-b.svg"}
                alt="Linkedin"
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="px-8 pt-4 bg-slate-100">
              <Image
                src={"/images/emma.png"}
                alt="image"
                width={291}
                height={391}
              />
            </div>
            <h1 className="text-3xl font-medium">Emma Watson</h1>
            <p>Managing Director</p>
            <div className="flex gap-4">
              <Image
                src={"/icons/Twitter-b.png"}
                alt="Twitter"
                width={24}
                height={24}
              />
              <Image
                src={"/icons/Instagram-b.svg"}
                alt="Instagram"
                width={24}
                height={24}
              />
              <Image
                src={"/icons/Linkedin-b.svg"}
                alt="Linkedin"
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className="space-y-2">
            <div className="px-8 pt-4 bg-slate-100">
              <Image
                src={"/images/will.png"}
                alt="image"
                width={325}
                height={391}
              />
            </div>
            <h1 className="text-3xl font-medium">Will Smith</h1>
            <p>Product Designer</p>
            <div className="flex gap-4">
              <Image
                src={"/icons/Twitter-b.png"}
                alt="Twitter"
                width={24}
                height={24}
              />
              <Image
                src={"/icons/Instagram-b.svg"}
                alt="Instagram"
                width={24}
                height={24}
              />
              <Image
                src={"/icons/Linkedin-b.svg"}
                alt="Linkedin"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-6">
          <div className="grid grid-cols-4 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center gap-6 col-span-4 md:col-span-1">
              <div className="w-20 h-20 rounded-full bg-gray-400 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                  <Image src="/icons/delivery.svg" alt="Mobile" width={40} height={40} />
                  </div>
              </div>
              <div>
                <h1 className="text-xl font-semibold">FREE AND FAST DELIVERY</h1>
                <p className="text-sm">Free delivery for all orders over $140</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 col-span-2 md:col-span-1">
              <div className="w-20 h-20 rounded-full bg-gray-400 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                  <Image src="/icons/Customer-service.svg" alt="Mobile" width={40} height={40} />
                  </div>
              </div>
              <div>
                <h1 className="text-xl font-semibold">24/7 CUSTOMER SERVICE</h1>
                <p className="text-sm">Friendly 24/7 customer support</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-6 col-span-2 md:col-span-1">
              <div className="w-20 h-20 rounded-full bg-gray-400 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                  <Image src="/icons/secure.svg" alt="Mobile" width={40} height={40} />
                  </div>
              </div>
              <div>
                <h1 className="text-xl font-semibold">MONEY BACK GUARANTEE</h1>
                <p className="text-sm">We reurn money within 30 days</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default about;

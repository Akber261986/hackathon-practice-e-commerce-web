import Image from "next/image"

const Featured = () => {
  return (
    <div>
        <div className="w-full mt-12 ">
          <div className="text-base text-[#DB4444] flex items-center gap-2">
            <div className="w-5 h-10 rounded-md bg-[#DB4444]"></div>
            <p>Featured</p>
          </div>
          <div className="flex mt-6 pb-8">
            <div className="flex-1 flex items-center justify-between">
              <h1 className="text-4xl font-semibold">New Arival</h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 ">
            <div className="relative bg-black col-span-4 lg:col-span-2 lg:row-span-2">
            <span className="text-white absolute left-6 bottom-6 space-y-3">
                    <h1 className="text-2xl font-semibold">PlayStation 5</h1>
                    <p className="text-sm">Black and White version of the PS5 <br />coming out on sale.</p>
                    <button className="flex items-center gap-4">
                        <p className="border-b border-b-white text-base font-medium">Shop Now</p>
                        <Image src="/icons/arrow-right-white.svg" alt="Mobile" width={24} height={24} />
                    </button>
                </span>
                <Image
                src={"/images/slim-playstation.png"}
                alt="playstation"
                width={511}
                height={511}
                />
            </div>
            <div className="relative bg-[#0c0c0c] col-span-4 lg:col-span-2 flex justify-end">
                <span className="text-white absolute left-6 bottom-6 space-y-3">
                    <h1 className="text-2xl font-semibold">Womans Collection</h1>
                    <p className="text-sm">Featured woman collections that <br />give you another vibe.</p>
                    <button className="flex items-center gap-4">
                        <p className="border-b border-b-white text-base font-medium">Shop Now</p>
                        <Image src="/icons/arrow-right-white.svg" alt="Mobile" width={24} height={24} />
                    </button>
                </span>
                <Image
                src={"/images/woman.png"}
                alt="playstation"
                width={432}
                height={286}
                className=""
                />
            </div>
            <div className="relative bg-[url('/images/bg-sm.png')] bg-center bg-cover flex items-center justify-center col-span-2 lg:col-span-1 p-4">
            <span className="text-white absolute left-6 bottom-6 space-y-1">
                    <h1 className="text-2xl font-semibold">Speakers</h1>
                    <p className="text-sm">Amazon wireless speakers</p>
                    <button className="flex items-center gap-4">
                        <p className="border-b border-b-white text-base font-medium">Shop Now</p>
                        <Image src="/icons/arrow-right-white.svg" alt="Mobile" width={24} height={24} />
                    </button>
                </span>
                <Image
                src={"/images/amazon-echo.png"}
                alt="playstation"
                width={190}
                height={221}
                />
            </div>
            <div className="relative bg-[url('/images/bg-sm.png')] bg-center bg-cover flex items-center justify-center col-span-2 lg:col-span-1">
            <span className="text-white absolute left-6 bottom-6 space-y-1">
                    <h1 className="text-2xl font-semibold">Perfume</h1>
                    <p className="text-sm">GUCCI INTENSE OUD EDP</p>
                    <button className="flex items-center gap-4">
                        <p className="border-b border-b-white text-base font-medium">Shop Now</p>
                        <Image src="/icons/arrow-right-white.svg" alt="Mobile" width={24} height={24} />
                    </button>
                </span>
                <Image
                src={"/images/perfume.png"}
                alt="playstation"
                width={190}
                height={221}
                />
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
  )
}

export default Featured

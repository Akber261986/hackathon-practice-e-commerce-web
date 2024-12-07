import Image from "next/image"

const Catagories = () => {
  return (
    <div className="mb-14">
        <div className="w-full mt-12">
          <div className="text-base text-[#DB4444] flex items-center gap-2">
            <div className="w-5 h-10 rounded-md bg-[#DB4444]"></div>
            <p>Catagories</p>
          </div>
          <div className="flex mt-6">
            <div className="flex-1 flex items-center justify-between">
              <h1 className="text-4xl font-semibold">Brows By Catagory</h1>
            </div>
            <div className="flex-1 flex items-center justify-end gap-2">
              <div className="w-8 h-8 bg-[#7D8184] rounded-full flex items-center justify-center">
              <Image src={"/icons/arrow-left.svg"} alt={"arrow"} width={24} height={24} />
              </div>
              <div className="w-8 h-8 bg-[#7D8184] rounded-full flex items-center justify-center">
              <Image src={"/icons/arrow-right.svg"} alt={"arrow"} width={24} height={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">     
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-12 mt-14">
                <div className="group hover:bg-[#DB4444] hover:border-none flex flex-col items-center justify-center gap-4 border border-[#7D8184] rounded-md w-[170px] h-36">
                    <Image
                    src={"/Catagories/CellPhone.png"}
                    alt="CellPhone"
                    width={56}
                    height={56}
                    className="group-hover:hidden"
                    />
                    <Image
                    src={"/Catagories/CellPhone-w.png"}
                    alt="CellPhone"
                    width={56}
                    height={56}
                    className="hidden group-hover:block"
                    />
                    <h1 className="group-hover:text-white">Phones</h1>
                </div>
                <div className="group hover:bg-[#DB4444] hover:border-none flex flex-col items-center justify-center gap-4 border border-[#7D8184] rounded-md w-[170px] h-36">
                    <Image
                    src={"/Catagories/Computer.png"}
                    alt="Computer"
                    width={56}
                    height={56}
                    className="group-hover:hidden"
                    />
                    <Image
                    src={"/Catagories/Computer-w.png"}
                    alt="Computer"
                    width={56}
                    height={56}
                    className="hidden group-hover:block"
                    />
                    <h1 className="group-hover:text-white">Computers</h1>
                </div>
                <div className="group hover:bg-[#DB4444] hover:border-none flex flex-col items-center justify-center gap-4 border border-[#7D8184] rounded-md w-[170px] h-36">
                    <Image
                    src={"/Catagories/SmartWatch.png"}
                    alt="Watch"
                    width={56}
                    height={56}
                    className="group-hover:hidden"
                    />
                    <Image
                    src={"/Catagories/SmartWatch-w.png"}
                    alt="Watch"
                    width={56}
                    height={56}
                    className="hidden group-hover:block"
                    />
                    <h1 className="group-hover:text-white">Smart Watches</h1>
                </div>
                <div className="group hover:bg-[#DB4444] hover:border-none flex flex-col items-center justify-center gap-4 border border-[#7D8184] rounded-md w-[170px] h-36">
                    <Image
                    src={"/Catagories/Camera.png"}
                    alt="Camera"
                    width={56}
                    height={56}
                    className="group-hover:hidden"
                    />
                    <Image
                    src={"/Catagories/Camera-w.png"}
                    alt="Camera"
                    width={56}
                    height={56}
                    className="hidden group-hover:block"
                    />
                    <h1 className="group-hover:text-white">Camera</h1>
                </div>
                <div className="group hover:bg-[#DB4444] hover:border-none flex flex-col items-center justify-center gap-4 border border-[#7D8184] rounded-md w-[170px] h-36">
                    <Image
                    src={"/Catagories/HeadPhone.png"}
                    alt="HeadPhone"
                    width={56}
                    height={56}
                    className="group-hover:hidden"
                    />
                    <Image
                    src={"/Catagories/HeadPhone-w.png"}
                    alt="HeadPhone"
                    width={56}
                    height={56}
                    className="hidden group-hover:block"
                    />
                    <h1 className="group-hover:text-white">HeadPhones</h1>
                </div>
                <div className="group hover:bg-[#DB4444] hover:border-none flex flex-col items-center justify-center gap-4 border border-[#7D8184] rounded-md w-[170px] h-36">
                    <Image
                    src={"/Catagories/Gamepad.png"}
                    alt="Gamepad"
                    width={56}
                    height={56}
                    className="group-hover:hidden"
                    />
                    <Image
                    src={"/Catagories/Gamepad-w.png"}
                    alt="Gamepad"
                    width={56}
                    height={56}
                    className="hidden group-hover:block"
                    />
                    <h1 className="group-hover:text-white">Gaming</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Catagories

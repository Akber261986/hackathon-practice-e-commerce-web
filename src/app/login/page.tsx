import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const login = () => {
  return (
    <div className="py-20 flex justify-between">
      <div className=" bg-[#CBE4E8] py-10">
        <Image
          src={"/images/mobcart.png"}
          alt="image"
          width={920}
          height={706}
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="space-y-12">
          <div>
            <h1 className="text-4xl font-medium pr-40">Login to Exclusive</h1>
            <p className="text-base">Enter your details bellow</p>
          </div>
          <div className="space-y-10">
            <form action="signup" className="flex flex-col gap-10">
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="outline-none border-b-2 border-b-gray-400"
              />
              <input
                type="password"
                placeholder="Password"
                className="outline-none border-b-2 border-b-gray-400"
              />
            </form>
            <div className="flex items-center justify-between gap-4">
              <Button type="submit" variant={"destructive"} className="py-6 px-12">
                Login
              </Button>
              <Link href={"/login"} className="text-[#ff1314]">
              Forgot Password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login

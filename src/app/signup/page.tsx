import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const signup = () => {
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
            <h1 className="text-4xl font-medium">Create an account</h1>
            <p className="text-base">Enter your details bellow</p>
          </div>
          <div className="space-y-10">
            <form action="signup" className="flex flex-col gap-10">
              <input
                type="text"
                placeholder="Name"
                className="outline-none border-b-2 border-b-gray-400 "
              />
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
            <div className="flex flex-col gap-4">
              <Button type="submit" variant={"destructive"} className="py-6">
                Create Accout
              </Button>
              <Button
                variant={"outline"}
                className="py-6 space-x-2 border border-gray-400"
              >
                <Image
                  src={"/icons/Google.svg"}
                  alt="image"
                  width={24}
                  height={24}
                />
                <p>Signup with Google</p>
              </Button>
            </div>
            <div className="flex gap-4 text-base text-[#7D8184] pr-40">
              <p className="">Already have an account?</p>
              <Link href={"/login"} className="border-b-2 border-b-gray-400">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;

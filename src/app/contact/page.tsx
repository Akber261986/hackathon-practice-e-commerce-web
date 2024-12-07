import { Button } from "@/components/ui/button";
import Image from "next/image";

const contact = () => {
  return (
    <div className="pt-20 font-sans">
      <div className="flex flex-col-reverse lg:flex-row py-10 gap-8">
        <div className="p-8 border border-gray-200 rounded-md">
          <div className="flex gap-6">
            <div className=" space-y-4">
              <div className="flex items-center gap-3 ">
                <Image
                  src={"/icons/phone-icon.png"}
                  alt="Instagram"
                  width={40}
                  height={40}
                />
                <h1 className="text-base font-bold">Call To Us</h1>
              </div>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +923213011912</p>
            </div>
            <hr className="border-2 border-gray-500 my-10" />
            <div className=" space-y-4">
              <div className="flex items-center gap-3 ">
                <Image
                  src={"/icons/mail-icon.png"}
                  alt="Instagram"
                  width={40}
                  height={40}
                />
                <h1 className="text-base font-bold">Write To Us</h1>
              </div>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: akbarghulam47@gmail.com</p>
              <p>Emails: customer@exclusive.com</p>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col p-8 border border-gray-200 rounded-md">
          <form action="contact" className="grid grid-cols-6 gap-4">
            <input
              type="text"
              placeholder="Your Name *"
              className="bg-slate-100 p-4 rounded-sm col-span-6 lg:col-span-2"
            />
            <input
              type="email"
              placeholder="Your Email *"
              className="bg-slate-100 p-4 rounded-sm col-span-6 md:col-span-3 lg:col-span-2"
            />
            <input
              type="number"
              placeholder="Your Phone *"
              className="bg-slate-100 p-4 rounded-sm col-span-6 md:col-span-3 lg:col-span-2"
            />
            <textarea
              name="message"
              rows={6}
              placeholder="Message"
              className="col-span-6 bg-slate-100 p-4 rounded-sm mt-10"
            ></textarea>
          </form>
          <Button variant={"destructive"} className="py-6 px-16 self-end mt-12">
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default contact;

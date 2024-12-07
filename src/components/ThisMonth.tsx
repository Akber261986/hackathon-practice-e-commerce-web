import Image from 'next/image'
import { Button } from './ui/button'
import { useCart } from "@/context/CartContext";
import { productDataThisMonth } from '../../data/products';

const ThisMonth = () => {
        const {addToCart, addToWishlist,} = useCart();
     
        // const isInCart = (slug:string) => {
        //   return cartItems.some((prev)=> prev.slug === slug)
        // }
        // const isInWishlist = (slug:string) => {
        //   return wishlistItems.some((prev)=> prev.slug === slug)
        // } 
  return (
    <div>
        <div className="w-full mt-12">
          <div className="text-base text-[#DB4444] flex items-center gap-2">
            <div className="w-5 h-10 rounded-md bg-[#DB4444]"></div>
            <p>This Month</p>
          </div>
          <div className="flex mt-6 py-6">
            <div className="flex-1 flex items-center justify-between">
              <h1 className="text-4xl font-semibold">Best Selling Products</h1>
            </div>
            <div>
            <Button
                variant={"destructive"}
                className='py-6 px-16'
            >View All</Button>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {productDataThisMonth.map((item) => (
          <div key={item.slug} className="group">
            <div className="relative w-full flex flex-col items-center justify-center gap-10 bg-[#F5F5F5] ">
              <div className="bg-[#DB4444] text-white px-4 py-1.5 rounded-md absolute top-4 left-4">
                {item.discount}%
              </div>
              <button
                onClick={() => addToWishlist(item)}
                className="place-self-end mt-3 mr-3 bg-white rounded-full p-2"
              >
                <Image
                  src={"/icons/Wishlist.svg"}
                  alt={"view"}
                  width={20}
                  height={80}
                />
              </button>
              <button className="absolute right-3 top-16 bg-white rounded-full p-2">
                <Image
                  src={"/icons/view.svg"}
                  alt={"view"}
                  width={20}
                  height={80}
                />
              </button>
              <div className="h-[250px] p-4 flex items-center justify-center">
                <Image src={item.image} alt="laptop" width={250} height={250} />
              </div>
              <Button
                onClick={() => addToCart(item)}
                className="w-full self-end rounded-t-none invisible group-hover:visible"
              >
                <Image
                  src={"/icons/Cart-w.svg"}
                  alt={"cart"}
                  width={20}
                  height={80}
                />
                Add To Cart
              </Button>
            </div>
            <div className="text-sm mt-4 space-y-2">
              <h2 className="font-bold">{item.title}</h2>
              <p className="text-red-500">
                ${item.price}{" "}
                <del className="text-[#7D8184] px-4">
                  ${item.beforeDiscount}
                </del>
              </p>
              <p>
              <span className="text-yellow-400 text-xl">
                    {"★".repeat(4)}
                    {"☆".repeat(1)}
                  </span> <span className="text-[#7D8184]">{` (65)`}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
        </div>
        <div className='lg:p-10 mt-6'>
            <div className='bg-[url("/images/bg-black.png")] bg-cover bg-center flex flex-col lg:flex-row items-center justify-around py-8'>
                <div className='flex flex-col justify-between px-8 gap-4'>
                    <p className='text-[#00FF66]'>Catagories</p>
                    <h1 className='text-5xl text-white font-semibold'>Enhance Your Music Experience</h1>
                    <div className='flex gap-4'>
                        <div className='w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center'><p className='text-base font-semibold leading-tight'>23</p><p className='text-[11px]'>Days</p></div>
                        <div className='w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center'><p className='text-base font-semibold leading-tight'>05</p><p className='text-[11px]'>Hours</p></div>
                        <div className='w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center'><p className='text-base font-semibold leading-tight'>59</p><p className='text-[11px]'>Minutes</p></div>
                        <div className='w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center'><p className='text-base font-semibold leading-tight'>35</p><p className='text-[11px]'>Seconds</p></div>
                    </div>
                    <Button
                        variant={"default"}
                        className='py-7 px-12 self-start bg-[#00FF66]'
                    >Buy Now</Button>
                </div>
                <div className='lg:mr-20'>
                <Image 
                    src={"/images/Alexa.png"} 
                    alt={"Alexa"} 
                    width={568} 
                    height={330} 
                    className=' mr-12'
                />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThisMonth

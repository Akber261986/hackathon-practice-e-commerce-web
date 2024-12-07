// Define types for the cart
export interface Product {
    slug: string;
    image: string;
    title: string;
    descruption: string;
    price: number;
    discount?: number;
    beforeDiscount?: number | string;
    quantity: number;
  }

  export const productDataThisMonth:Product [] = [
    {
      slug: "product9",
      image: "/images/Gucci-coat.png",
      title: "The north coat",
      descruption: "A beautiful coat",
      price: 260,
      discount: -40,
      beforeDiscount:360,
      quantity: 0,
    },
    {
      slug: "product10",
      image: "/images/bag.png",
      title: "Gucci duffle bag",
      descruption: "A beautiful bag",
      price: 960,
      beforeDiscount:1160,
      discount: -40,
      quantity: 0,
    },
    {
      slug: "product11",
      image: "/images/gamemax.png",
      title: "RGB liquid CPU Cooler",
      descruption: "Best CPU Cooler",
      price: 160,
      discount: -35,
      beforeDiscount:170,
      quantity: 0,
    },
    {
      slug: "product12",
      image: "/images/Book-self.png",
      title: "Small BookSelf ",
      descruption: "A beautiful self",
      price: 360,
      discount: -40,
      beforeDiscount: "",
      quantity: 0,
    },
  ]
  export const productDataHero:Product [] = [
    {
      slug: "product5",
      image: "/images/red-gamepad.png",
      title: "HAVIT HV-G92 Gamepad",
      descruption: "A beautiful bag",
      price: 120,
      discount: -40,
      beforeDiscount:160,
      quantity: 0,
    },
    {
      slug: "product6",
      image: "/images/keyboard.png",
      title: "AK-900 Wired Keyboard",
      descruption: "A beautiful bag",
      price: 960,
      discount: -40,
      beforeDiscount:1160,
      quantity: 0,
    },
    {
      slug: "product7",
      image: "/images/lcd.png",
      title: "IPS LCD Gaming Monitor",
      descruption: "A beautiful bag",
      price: 370,
      discount: -40,
      beforeDiscount:400,
      quantity: 0,
    },
    {
      slug: "product8",
      image: "/images/chair.png",
      title: "S-Series Comfort Chair ",
      descruption: "A beautiful bag",
      price: 3745,
      discount: -40,
      beforeDiscount:400,
      quantity: 0,
    },
  ]

  export const productData:Product [] = [
    
    {
      slug: "product3",
      image: "/images/gamepad.png",
      title: "Gp11 Shooter USB Gamepad",
      descruption: "Best Gamepad",
      price: 550,
      discount: -30,
      quantity: 0,
    },
    {
      slug: "product4",
      image: "/images/jacket.png",
      title: "Quilted Satin Jacket",
      descruption: "Winter's Best product",
      price: 750,
      discount: -25,
      quantity: 0,
    },
  ]
  
  export interface CartContextType {
    cartItems: Product[];
    wishlistItems: Product[];
    addToCart: (product: Product) => void;
    addToWishlist: (product: Product) => void;
    removeFromCart: (slug: string) => void;
    removeFromWishlist: (slug: string) => void;
    updateQuantity: (slug: string, quantity: number) => void;
    updateQuantityWishlist: (slug: string, quantity: number) => void;
    getTotalPrice: () => number;
  }
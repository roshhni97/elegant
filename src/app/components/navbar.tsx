import React from "react";
import { ShoppingCart } from "lucide-react";
const Navbar = () => {
  return (
    <div className="flex justify-between p-8 mx-56">
      <h1 className="text-2xl">Elegant</h1>
      <div className=" text-[#5C5C5C] flex gap-6 font-medium">
        <a href="/home">Home</a>
        <a href="/home">New Collection</a>
        <a href="/home">Catalog</a>
        <a href="/home">Delivery</a>
        <a href="/contact">Contact Us</a>
      </div>
      <ShoppingCart className="text-[#5C5C5C]" />
    </div>
  );
};

export default Navbar;

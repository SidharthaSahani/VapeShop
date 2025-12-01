import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/"> <img src={assets.logo} className="w-20" /></Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/Collection" className="flex flex-col items-center gap-1">
          <p>Collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/About" className="flex flex-col items-center gap-1">
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/Contact" className="flex flex-col items-center gap-1">
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

        <div className="group relative">
        <Link to='/login'>  <img src={assets.profile_icon} className="w-5 cursor-pointer" alt=""/></Link> 

          <div className="absolute right-0 hidden group-hover:block dropdown-menu">
            <div className="flex flex-col gap-2 w-36 py-5 bg-slate-100 text-gray-500">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-9 min-w-8" alt="" />
          <p className="absolute right-[-8px] top-[15px] w-5 text-center leading-5 bg-black text-white aspect-square rounded-full text-[10px]">
            {getCartCount()}
          </p>
        </Link>

        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all 
          ${visible ? "w-full" : "w-0"}`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              className="h-4 rotate-180 "
              src={assets.dropdown_icon}
              alt=""
            />
            <p>Back</p>
          </div>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to="/">Home</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to="collection">Collection</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to="/about">About</NavLink>
          <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to="/contact">Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



// 4:43

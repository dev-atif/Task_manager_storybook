import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
const SearchBar = () => {
  const [click,setClick] =useState(false)
  return (
    <div className= {`${!click ? 'bg:none md:bg-[#F7F7F7]':'bg-[#F7F7F7]'}  transition-all transform duration-200 px-3 w-full py-1 rounded-lg flex items-center overflow-hidden`}>
      <span onClick={()=>setClick(!click)} className={`${!click ? "md:translate-x-0 translate-x-48":'translate-x-0'} transition-all transform duration-200`}>
        <FiSearch size={25}/>
      </span>{" "}
      <input type="text" className= {`${!click ?"translate-x-56 md:translate-x-0":'translate-x-0'}  transition-all transform duration-200 bg-transparent py-1 outline-none pl-3 placeholder:font-mona w-full`} placeholder="Search" />
    </div>
  );
};

export default SearchBar;

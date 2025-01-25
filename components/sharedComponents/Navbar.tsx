"use client";
import React, { useState, useEffect } from "react";
import logo from "@/public/assets/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useGeneralContext } from "@/context/GenralContext";
import { Router } from "next/router";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const { user, logoutUser }: any = useGeneralContext();
  // console.log("🚀 ~ Navbar ~ user:", user);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const gotoPlans = () => {
    router.push("/plans");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".dropdown")) {
        closeDropdown();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-inherit py-3 fixed font-inter left-0 right-0 z-20">
      <div className="flex items-center justify-between mx-auto w-[90%] p-4">
        {/* Logo */}
        <Link
          href="https://afroai.ai/home"
          className="flex flex-col items-center justify-center gap-1 md:flex-row md:items-end"
        >
          <Image src={logo} className="w-[32px]" alt="logo" />
          <span className="text-primary-50 text-xs font-sans">AFRO AI</span>
        </Link>

        {/* User Session Logic */}
        <div className="relative dropdown">
          {user?.user || user?.email ? (
            <div>
              <div
                onClick={toggleDropdown}
                className="flex items-center gap-2 cursor-pointer"
              >
                {user && (
                  <Image
                    src={user?.user?.avatar || user?.image || logo}
                    alt="user"
                    width={32}
                    height={32}
                    className="rounded-full cursor-pointer"
                    onClick={toggleDropdown}
                  />
                )}
                <span className="hidden px-4 py-2 font-bold text-lg text-primary-50 md:block">
                  {user.email || user.user?.email}
                  {/* {user.user?.email} */}
                </span>
              </div>
              {dropdownOpen && (
                // <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg">
                <div className="absolute right-0 mt-2 w-64 border-gray-200 shadow-lg border rounded-lg bg-gray-600 cursor-pointer hover:border-green-500 hover:border-[1px]">
                  <ul className="py-1 text-gray-700">
                    {/* <li className="px-4 py-2 font-bold text-lg text-gray-900 border-b border-gray-300">
                      {user.name}
                    </li> */}
                    <li className="px-4 py-2 text-sm text-primary-50">
                      Available Tokens:{" "}
                      {user?.user && user?.token?.toLocaleString()}
                    </li>
                    <hr className="opacity-50 my-2 w-full" />
                    <li
                      onClick={gotoPlans}
                      className="px-4 py-2 text-primary-50 cursor-pointer hover:bg-gray-100 hover:text-primary-300"
                    >
                      {/* <Link
                        href="/plans"
                        onClick={closeDropdown}
                        className="text-blue-500"
                      > */}
                      Plans
                      {/* </Link> */}
                    </li>
                    <li
                      className="px-4 py-2 cursor-pointer text-red-500 hover:bg-gray-100"
                      onClick={() => {
                        logoutUser();
                        closeDropdown();
                      }}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="text-primary-50 border px-8 py-3 hover:bg-primary-100 hover:text-black rounded-[13px] hover:border-primary-200"
            >
              LOGIN
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// "use client";
// import React, { useState } from "react";
// import logo from "@/public/assets/images/logo.png";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useGeneralContext } from "@/context/GenralContext";
// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [subnav, setSubNavOpen] = useState(false);

//   const { user }: any = useGeneralContext();

//   const toggleSubNav = () => {
//     return setSubNavOpen(!subnav);
//   };

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeMenu = () => {
//     setIsOpen(false);
//   };

//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const path = usePathname();

//   const obj: { [key: string]: string } = {
//     assistant: "bg-[#1C352D]",
//     gene: "bg-[#1A2421]",
//   };

//   return (
//     <div
//       className={`${
//         obj[path.split("/")[1]] ?? "bg-inherit"
//       } py-3 fixed font-inter left-0 right-0 z-20`}
//     >
//       {/* Desktop Nav */}
//       <div className="hidden lg:flex items-center  list-none  sm:max-w-7xl sm:mx-auto w-full">
//         <div className="">
//           <Link href="/" className="flex items-end justify-center gap-1">
//             <Image src={logo} className="w-[32px]" alt="logo" />
//             <span className="text-primary-100 text-xs font-sans">AFRO AI</span>
//           </Link>
//         </div>
//         <div
//           className={`flex grow ml-8 gap-4 items-center text-primary-50 w-2/5`}
//         >
//           <li className="hover:bg-primary-100 cursor-pointer hover:text-black px-8 py-2 hover:rounded-md">
//             <Link href="/plans">PLANS</Link>
//           </li>
//           {/* <li className="hover:bg-primary-100 cursor-pointer hover:text-black  px-8 py-2 hover:rounded-md">
//             <Link href="/about">ABOUT</Link>
//           </li>
//            <li
//             className="relative group"
//             onMouseEnter={toggleDropdown}
//             onMouseLeave={toggleDropdown}
//           >
//             <a className="flex text-white justify-center gap-2  items-center hover:bg-primary-100 cursor-pointer hover:text-black  px-8 py-2 hover:rounded-md">
//               <h1> PRODUCTS</h1>
//               <div className="flex items-center pb-2 ">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   fill="#FFFFFF"
//                   viewBox="0 0 256 256"
//                   className="opacity-90 mt-2"
//                 >
//                   <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
//                 </svg>
//               </div>
//             </a>
//             {dropdownOpen && (
//               <ul className="absolute top-full left-0 bg-gray-800  list-none p-0 m-0 min-w-[300px] rounded-sm">
//                 <li>
//                   <a
//                     href="/assistant"
//                     className="text-white px-4 py-2 block hover:bg-gray-700"
//                   >
//                     AFRO AI
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/genie"
//                     className="text-white px-4 py-2 block hover:bg-gray-700"
//                   >
//                     CAMPUST GENIE
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/wisenurse"
//                     className="text-white px-4 py-2 block hover:bg-gray-700"
//                   >
//                     WISE NURSE
//                   </a>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li className="hover:bg-primary-100 cursor-pointer hover:text-black   px-8 py-2 hover:rounded-md">
//             <Link href="/resources">RESOURCES</Link>
//           </li>
//           <li className="hover:bg-primary-100 cursor-pointer hover:text-black   px-8 py-2 hover:rounded-md">
//             <Link href="/community">COMMUNITY</Link>
//           </li>
//           <li className="hover:bg-primary-100 cursor-pointer hover:text-black   px-8 py-2 hover:rounded-md">
//             <Link href="/contact">CONTACT</Link>
//           </li> */}
//         </div>
//         <div className="flex grow justify-end gap-[10px]">
//           {/* {user ? (
//             <span className="flex items-end gap-4 cursor-crosshair">
//               <Image
//                 src={user.image}
//                 alt="user"
//                 width={32}
//                 height={32}
//                 className="rounded-full"
//               />
//               <span className="text-primary-50">{user.name}</span>
//             </span>
//           ) : ( */}
//           <li className="text-primary-50 border px-8 py-3 hover:bg-primary-100 hover:text-black  rounded-[13px] hover:border-primary-200">
//             <Link href="/login">LOGIN</Link>
//           </li>
//           {/* )} */}
//           {/* <li className="border bg-primary-50 text-black px-8 py-3 rounded-[13px]">
//             <Link href="">TRY AI</Link>
//           </li> */}
//         </div>
//       </div>
//       {/* Desktop nav ends here */}

//       {/* Mobile Nav */}
//       <div className="lg:hidden">
//         <div className="py-2 px-2 flex justify-between items-center mx-4 list-none">
//           <div>
//             <Link href="/" className="flex items-end justify-center gap-1">
//               <Image src={logo} className="w-[32px]" alt="logo" />
//               <span className="text-primary-100 text-xs font-sans">
//                 AFRO AI
//               </span>
//             </Link>
//           </div>
//           {/* Hamburger Menu */}
//           <div className="block md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-primary-50 focus:outline-none"
//             >
//               <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M2 6h20v2H2V6zm0 5h20v2H2v-2zm0 5h20v2H2v-2z"
//                 />
//               </svg>
//             </button>
//           </div>
//         </div>

//         <div
//           className={`py-8 flex flex-col gap-3 text-lg grow ml-8 list-none text-primary-50 ${
//             isOpen ? "block" : "hidden"
//           }`}
//         >
//           <li>
//             <Link href="/about" onClick={closeMenu}>
//               ABOUT
//             </Link>
//           </li>
//           <li
//             className="relative group"
//             onMouseEnter={toggleDropdown}
//             onMouseLeave={toggleDropdown}
//           >
//             <a className="flex text-white gap-2 items-center cursor-pointer py-2">
//               <h1> PRODUCTS</h1>
//               <div className="flex items-center pb-2 ">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   fill="#FFFFFF"
//                   viewBox="0 0 256 256"
//                   className="opacity-90 mt-2"
//                 >
//                   <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
//                 </svg>
//               </div>
//             </a>
//             {dropdownOpen && (
//               <ul className="absolute top-full left-0 bg-gray-800  list-none p-0 m-0 min-w-[300px] rounded-sm">
//                 <li>
//                   <a
//                     href="/assistant"
//                     className="text-white px-4 py-2 block hover:bg-gray-700"
//                   >
//                     AI ASSISTANT
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/genie"
//                     className="text-white px-4 py-2 block hover:bg-gray-700"
//                   >
//                     CAMPUST GENIE
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="/wisenurse"
//                     className="text-white px-4 py-2 block hover:bg-gray-700"
//                   >
//                     WISE NURSE
//                   </a>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li>
//             <Link href="/resources" onClick={closeMenu}>
//               RESOURCES
//             </Link>
//           </li>
//           <li>
//             <Link href="/community" onClick={closeMenu}>
//               COMMUNITY
//             </Link>
//           </li>
//           <li>
//             <Link href="/contact" onClick={closeMenu}>
//               CONTACT
//             </Link>
//           </li>
//         </div>

//         <div
//           className={`flex grow ml-8 list-none gap-8 ${
//             isOpen ? "block" : "hidden"
//           }`}
//         >
//           {/* <li className="text-primary-50 border px-6 py-1 rounded-md hover:border-primary-200">
//             <Link href="/login" onClick={closeMenu}>
//               LOGIN
//             </Link>
//           </li> */}
//           <li className="border bg-primary-50 px-6 py-1 rounded-md hover:border-primary-300">
//             <Link href="/login" onClick={closeMenu}>
//               LOGIN
//             </Link>
//           </li>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

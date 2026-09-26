
"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/app/assets/logo.png";
import { PlanContext } from "@/app/context/pagecontext";

const NavBar = () => {
    const { planpage, savepage } = useContext(PlanContext);

    const pathname = usePathname();

    return (
        <div className="w-full bg-[#0B0D10] border-b border-zinc-800">

            <div className="container mx-auto h-[80px] flex items-center justify-between px-6">

                {/* LOGO */}
                <div className="flex items-center gap-3">

                    <Link href="/" className="flex items-center gap-3">

                    <Image src={logo} alt="dumball Logo" width={28} height={28}/>

                    <span className="font-bold text-[20px] text-white">
                        FITLOG
                    </span>
                   </Link>
                </div>


               
                <div className="flex items-center gap-2">

                   
                    <Link href= "/" className={`px-5 py-2 rounded-full text-[14px]
                            
                            ${
                                pathname === "/"
                                    ? "bg-[#17230D] text-[#C2F800] font-semibold"
                                    : "text-gray-400 hover:text-white"
                            }
                        `}
                    >
                        Home
                    </Link>


                    {/* WORKOUTS */}
                    <Link href="/library" className= {`px-5 py-2 rounded-full text-[14px]
                            
                            ${
                                pathname.startsWith("/library")
                                    ? "bg-[#17230D] text-[#C2F800] font-semibold"
                                    : "text-gray-400 hover:text-white"
                            }
                        `}
                    >
                        Workouts
                    </Link>


                    {/* MY PLAN */}
                    <Link href="/planaction" className={` px-5 py-2 rounded-full text-[14px]
        
                            ${
                                pathname === "/planaction"
                                    ? "bg-[#17230D] text-[#C2F800] font-semibold"
                                    : "text-gray-400 hover:text-white"
                            }
                        `}
                    >
                        My Plan
                    </Link>

                </div>


                <div className="flex items-center gap-7">




                    {/* PLAN */}
                    <Link  href="/planaction" className="flex items-center gap-2 text-[14px]" >
                        <span className="text-gray-300">
                            Plan
                        </span>

                        <span className="  px-1.5 rounded-full bg-[#C2F800] text-black  flex  items-center justify-center text-[12px] font-bold " >

                            {planpage?.length || 0}

                        </span>


                    </Link>


                    {/* SAVED */}
                    <Link href="/saveaction" className="flex items-center gap-2 text-[14px]">

                    <span className="text-gray-300">
                
                     Saved

                     </span>

                    <span className=" px-1.5 rounded-full border border-zinc-700 text-gray-300 flex items-center justify-center text-[12px]"
                        >
                            {savepage?.length || 0}
                        </span>
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default NavBar;


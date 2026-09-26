
"use client";

import React, { useContext } from "react";
import { PlanContext } from "../context/pagecontext";
import Image from "next/image";
import Link from "next/link";
import { Bookmark,Clock,Flame,Star, X,Plus} from "lucide-react";
import { toast } from "react-toastify";

const SaveAction = () => {

    const { savepage, setsavepage,  planpage, setplanpage } = useContext(PlanContext);

    const handleRemove = (index) => {

        const newSaveList = savepage.filter(function (item, i) {

            return i !== index;

        });

        setsavepage(newSaveList);

        toast.info("Exercise removed from saved list");
    };


    const handleAddToPlan = (book) => {

      
        setplanpage([...planpage, book ]);

        toast.success( `${book.name} added to today's plan` ); };


    return (

        <div className="container mx-auto">

            <div className="m-10">

                <h2 className="font-bold text-[40px]">
                    SAVED
                </h2>

                <p className="text-[14px]">
                    Your saved exercises.
                </p>

            </div>

            <div className="px-10">


                {savepage.length === 0 && (

                    <div className="text-center py-20">

                        <Bookmark
                            size={45}
                            className="mx-auto mb-4"
                        />

                        <h3 className="text-2xl font-bold">
                            No saved exercises
                        </h3>

                        <p className="text-gray-400 mt-2">
                            Save exercises from the library to see them here.
                        </p>

                    </div>

                )}


                
                {/* SAVED EXERCISES */}
               

                <div className="flex flex-col gap-4">

                    {savepage.map((book, index) => {

                        return (

                            <div key={`${book.id}-${index}`}
                                className=" w-full bg-[#15171D]  border border-zinc-700  rounded-[18px] p-4 flex  items-center gap-5 " >

                              {/* IMAGE */}
                        

                                <div className="relative w-[145px] h-[80px] shrink-0">

                                    <Image
                                        src={book.image}
                                        alt={book.name}
                                        fill
                                        className="object-cover rounded-[12px]"
                                    />

                                </div>



                            <div className="flex-1">

                                    <h3 className="font-bold text-[18px] uppercase">
                                        {book.name}
                                    </h3>

                                    <p className="text-sm text-gray-400">
                                        {book.equipment}
                                    </p>

                                    <div className="flex gap-5 mt-3">


                                        {/* DURATION */}

                                        <p className="flex items-center gap-1 text-sm">

                                            <Clock
                                                size={15}
                                                className="text-[#C2F800]"
                                            />

                                            {book.duration} min

                                        </p>


                                        {/* CALORIES */}

                                        <p className="flex items-center gap-1 text-sm">

                                            <Flame
                                                size={15}
                                                className="text-[#C2F800]"
                                            />

                                            {book.caloriesBurned} kcal

                                        </p>


                                        {/* RATING */}

                                        <p className="flex items-center gap-1 text-sm">

                                            <Star
                                                size={15}
                                                className="text-[#C2F800]"
                                            />

                                            {book.rating}

                                        </p>

                                    </div>

                                </div>


                               

                                <div className="flex items-center gap-3">

                                    <Link
                                        href={`/library/${book.id}`}
                                        className=" px-5 py-2  rounded-full border border-zinc-600 text-sm hover:bg-zinc-800" >
                                        View Details
                                    </Link>


                                    <button
                                        onClick={() => handleAddToPlan(book)}
                                        className=" flex items-center gap-2  px-5  py-2 rounded-full bg-[#C2F800] text-black text-sm font-semibold  hover:bg-[#aee000] " >

                                        <Plus size={17} />

                                        Add Plan

                                    </button>


                              

                                    <button
                                        onClick={() => handleRemove(index)}
                                        className="
                                            p-2
                                            text-gray-400
                                            hover:text-white
                                        "
                                    >

                                        <X size={20} />

                                    </button>

                                </div>

                            </div>

                        );

                    })}

                </div>

            </div>

        </div>

    );
};

export default SaveAction;


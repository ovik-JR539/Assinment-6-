"use client";

import React, { useContext } from "react";
import { PlanContext } from "../context/pagecontext";
import Image from "next/image";
import Link from "next/link";
import { Bookmark,Clock, Flame, Star, X, Dumbbell,} from "lucide-react";
import { toast } from "react-toastify";

const SaveAction = () => {

    const { savepage, setsavepage,} = useContext(PlanContext);


    // =========================
    // REMOVE SAVED EXERCISE
    // =========================

    const removeSave = (index) => {

        const newSaveList = savepage.filter(function (item, i) {
            return i !== index;
        });

        setsavepage(newSaveList);

        toast.info("Exercise removed from saved list");
    };



    const savedExercise = savepage.length;

    const savedMinutes = savepage.reduce((total, book) => {

        return total + Number(book.duration || 0);

    }, 0);


    const savedCalories = savepage.reduce((total, book) => {

        return total + Number(book.caloriesBurned || 0);

    }, 0);


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


                {/* =========================
                    CALCULATOR
                ========================= */}

                <div className="w-full bg-[#15171D] border border-zinc-700 rounded-[20px] p-6 mb-8">

                    <div className="flex items-center gap-3 mb-6">

                        <div className="bg-[#C2F800] text-black p-2 rounded-full">

                            <Dumbbell size={20} />

                        </div>


                        <div>

                            <h3 className="font-bold text-[22px]">
                                WORKOUT CALCULATOR
                            </h3>

                            <p className="text-sm text-gray-400">
                                Saved workout summary
                            </p>

                        </div>

                    </div>


                    <div className="grid grid-cols-3 gap-4">


                        

                        <div className="bg-zinc-800 rounded-[15px] p-5">

                            <p className="text-sm text-gray-400">
                                TOTAL EXERCISE
                            </p>

                            <p className="text-[32px] font-bold mt-2">
                                {savedExercise}
                            </p>

                            <p className="text-xs text-gray-500">
                                exercises
                            </p>

                        </div>


                        

                        <div className="bg-zinc-800 rounded-[15px] p-5">

                            <div className="flex items-center gap-2">

                                <Clock
                                    size={17}
                                    className="text-[#C2F800]"
                                />

                                <p className="text-sm text-gray-400">
                                    TOTAL TIME
                                </p>

                            </div>


                            <p className="text-[32px] font-bold mt-2">
                                {savedMinutes}
                            </p>

                            <p className="text-xs text-gray-500">
                                minutes
                            </p>

                        </div>


                   

                        <div className="bg-zinc-800 rounded-[15px] p-5">

                            <div className="flex items-center gap-2">

                                <Flame
                                    size={17}
                                    className="text-[#C2F800]"
                                />

                                <p className="text-sm text-gray-400">
                                    TOTAL CALORIES
                                </p>

                            </div>


                            <p className="text-[32px] font-bold mt-2">
                                {savedCalories}
                            </p>

                            <p className="text-xs text-gray-500">
                                kcal
                            </p>

                        </div>

                    </div>

                </div>


                {/* =========================
                    SAVED EXERCISES
                ========================= */}

                {savepage.length === 0 ? (

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

                ) : (

                    <div className="flex flex-col gap-4">

                        {savepage.map((book, index) => (

                            <div
                                key={`${book.id}-${index}`}
                                className="w-full bg-[#15171D] border border-zinc-700 rounded-[18px] p-4 flex items-center gap-5"
                            >


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


                                      

                                        <p className="flex items-center gap-1 text-sm">

                                            <Clock
                                                size={15}
                                                className="text-[#C2F800]"
                                            />

                                            {book.duration} min

                                        </p>


                                       

                                        <p className="flex items-center gap-1 text-sm">

                                            <Flame
                                                size={15}
                                                className="text-[#C2F800]"
                                            />

                                            {book.caloriesBurned} kcal

                                        </p>


                                 

                                        <p className="flex items-center gap-1 text-sm">

                                            <Star
                                                size={15}
                                                className="text-[#C2F800]"
                                            />

                                            {book.rating}

                                        </p>

                                    </div>

                                </div>


                                {/* BUTTONS */}

                                <div className="flex items-center gap-3">


                                    {/* VIEW DETAILS */}

                                    <Link
                                        href={`/library/${book.id}`}
                                        className="px-5 py-2 rounded-full border border-zinc-600 text-sm hover:bg-zinc-800"
                                    >
                                        View Details
                                    </Link>


                                    {/* REMOVE */}

                                    <button
                                        onClick={() => removeSave(index)}
                                        className="p-2 text-gray-400 hover:text-white"
                                    >

                                        <X size={20} />

                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                )}

            </div>

        </div>

    );
};

export default SaveAction;
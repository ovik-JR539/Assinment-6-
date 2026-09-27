"use client";

import React, { useContext } from "react";
import { PlanContext } from "../context/pagecontext";
import Image from "next/image";
import Link from "next/link";
import { Clock, Flame,Star, X, Check, Dumbbell,} from "lucide-react";

const PlanAction = () => {

    const { planpage,setplanpage,savepage,setsavepage, } = useContext(PlanContext);


    // =========================
    // PLAN CALCULATOR
    // =========================

    const planExercise = planpage.length;

    const planMinutes = planpage.reduce((total, book) => {

        return total + Number(book.duration || 0);

    }, 0);

    const planCalories = planpage.reduce((total, book) => {

        return total + Number(book.caloriesBurned || 0);

    }, 0);


    // =========================
    // REMOVE PLAN
    // =========================

    const removePlan = (index) => {

        const newPlanList = planpage.filter(function (item, i) {

            return i !== index;

        });

        setplanpage(newPlanList);
    };


    // =========================
    // MARK PLAN AS DONE
    // =========================

    const donePlan = (index) => {

        const newPlanList = planpage.filter(function (item, i) {

            return i !== index;

        });

        setplanpage(newPlanList);
    };


    // =========================
    // REMOVE SAVED
    // =========================

    const removeSave = (index) => {

        const newSaveList = savepage.filter(function (item, i) {

            return i !== index;

        });

        setsavepage(newSaveList);
    };


    // =========================
    // PLAN WORKOUT CARD
    // =========================

    const WorkoutCard = ({ book, index }) => {

        return (

            <div className="w-full bg-[#15171D] border border-zinc-700 rounded-[18px] p-4 flex items-center gap-5">


               

                <div className="relative w-[145px] h-[80px] shrink-0">

                    <Image
                        src={book.image}
                        alt={book.name}
                        fill
                        className="object-cover rounded-[12px]"
                    />

                </div>


                {/* WORKOUT INFORMATION */}

                <div className="flex-1">

                    <h3 className="font-bold text-[18px] uppercase">
                        {book.name}
                    </h3>

                    <p className="text-sm text-gray-400">
                        {book.equipment}
                    </p>


                    <div className="flex gap-4 mt-2">


                        

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


                    {/* MARK AS DONE */}

                    <button
                        onClick={() => donePlan(index)}
                        className="bg-[#C2F800] text-black px-5 py-2 rounded-full flex items-center gap-2"
                    >

                        <Check size={16} />

                        Mark as Done

                    </button>


                    {/* REMOVE */}

                    <button
                        onClick={() => removePlan(index)}
                        className="text-gray-400 hover:text-white"
                    >

                        <X size={20} />

                    </button>

                </div>

            </div>

        );
    };


   
    // SAVED WORKOUT CARD
  

    const SavedCard = ({ book, index }) => {

        return (

            <div className="w-full bg-[#15171D] border border-zinc-700 rounded-[18px] p-4 flex items-center gap-5">



                <div className="relative w-[145px] h-[80px] shrink-0">

                    <Image
                        src={book.image}
                        alt={book.name}
                        fill
                        className="object-cover rounded-[12px]"
                    />

                </div>


                {/* WORKOUT INFORMATION */}

                <div className="flex-1">

                    <h3 className="font-bold text-[18px] uppercase">
                        {book.name}
                    </h3>

                    <p className="text-sm text-gray-400">
                        {book.equipment}
                    </p>


                    <div className="flex gap-4 mt-2">


                       

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


                    {/* REMOVE SAVED */}

                    <button
                        onClick={() => removeSave(index)}
                        className="text-gray-400 hover:text-white"
                    >

                        <X size={20} />

                    </button>

                </div>

            </div>

        );
    };


    return (

        <div className="container mx-auto">


            

            <div className="m-10">

                <h2 className="font-bold text-[40px]">
                    MY PLAN
                </h2>

                <p className="text-[14px]">
                    Cap of five lifts for today. Finish them, then load more.
                </p>

            </div>


            {/* =========================
                TABS
            ========================= */}

            <div className="tabs tabs-border">


                {/* =========================
                    TODAY'S PLAN TAB
                ========================= */}

                <input
                    type="radio"
                    name="my_tabs_2"
                    className="tab px-6 py-3 font-bold text-gray-400 transition-all duration-200 checked:bg-[#C2F800] checked:text-black checked:border-[#C2F800]"
                    aria-label={`Today's Plan (${planpage.length})`}
                    defaultChecked
                />


                <div className="tab-content border-base-300 bg-base-100 p-10">


                    {/* PLAN CALCULATOR */}

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
                                    Todays workout summary
                                </p>

                            </div>

                        </div>


                        <div className="grid grid-cols-3 gap-4">


                           

                            <div className="bg-zinc-800 rounded-[15px] p-5">

                                <p className="text-sm text-gray-400">
                                    TOTAL EXERCISE
                                </p>

                                <p className="text-[32px] font-bold mt-2">
                                    {planExercise}
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
                                    {planMinutes}
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
                                    {planCalories}
                                </p>

                                <p className="text-xs text-gray-500">
                                    kcal
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* PLAN CARDS */}

                    <div className="flex flex-col gap-4">

                        {planpage.length > 0 ? (

                            planpage.map((book, index) => (

                                <WorkoutCard
                                    key={`${book.id}-${index}`}
                                    book={book}
                                    index={index}
                                />

                            ))

                        ) : (

                            <div className="text-center py-10 text-gray-500">

                                No exercises added to todays plan.

                            </div>

                        )}

                    </div>

                </div>


                
                    {/* SAVED TAB */}
                

                <input
                    type="radio"
                    name="my_tabs_2"
                    className="tab px-6 py-3 font-bold text-gray-400 transition-all duration-200 checked:bg-[#C2F800] checked:text-black checked:border-[#C2F800]"
                    aria-label={`Saved (${savepage.length})`}
                />


                <div className="tab-content border-base-300 bg-base-100 p-10">


                    {/* SAVED CARDS */}

                    <div className="flex flex-col gap-4">


                        {savepage.length > 0 ? (

                            savepage.map((book, index) => (

                                <SavedCard
                                    key={`${book.id}-${index}`}
                                    book={book}
                                    index={index}
                                />

                            ))

                        ) : (

                            <div className="text-center py-10 text-gray-500">

                                No saved exercises yet.

                            </div>

                        )}

                    </div>


                </div>

            </div>

        </div>

    );
};

export default PlanAction;
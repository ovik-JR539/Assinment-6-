import { Clock3, Flame, Star } from "lucide-react";
import React from 'react';
import Image from 'next/image';
import Link from "next/link";
import HomePage from "../homepage/page";

const LibraryCard = ({ data }) => {

    return (
        
        

<Link href={`/library/${data.id}`}>

        <div className="card bg-base-100 w-96 shadow-sm">

            <figure>
                <Image
                    src={data.image}
                    alt={data.name}
                    width={400}
                    height={300}
                />
            </figure>



            <div className="card-body">



                <div className="flex gap-2">
                    {data.muscleGroups.map((muscle, index) => (
                        <button
                            key={index}
                            className="font-bold bg-[#C2F800] text-black text-[16px] px-[10px] py-[3px] rounded-[20px]"
                        >
                            {muscle}
                        </button>
                    ))}
                </div>






                <h2 className="card-title">
                    {data.name}
                </h2>

                <p>{data.equipment}</p>


                <p className='py-[10px]'><hr /></p>

                <div className="flex gap-4 items-center">

                    <p className="flex items-center gap-1">
                        <Clock3 size={14} />
                        {data.duration}
                    </p>

                    <p className="flex items-center gap-1">
                        <Flame size={14} />
                        {data.caloriesBurned} kcal
                    </p>

                    <p className="flex items-center gap-1">
                        <Star size={14} />
                        {data.rating}
                    </p>

                </div>

            </div>

        </div>

        </Link>
    );
};

export default LibraryCard;
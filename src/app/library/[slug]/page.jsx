import PlanPageProps from "@/app/component/planpage/page";
import SavePageProps from "@/app/component/savepage/page";
import Image from 'next/image';
import React from 'react';

const DetailPage = async ({ params }) => {

    const { slug } = await params;

    console.log(slug, "id");

    const res = await fetch(
        "https://api.abcz.workers.dev/api/fitlog"
    );

    const librarydata = await res.json();

    const Idata = librarydata.find(
        (item) => item.id.toString() === slug
    );

    console.log(Idata);



    return (
        <div className='container mx- auto mx-120 my-20' >
            <div className="card lg:card-side bg-base-100 shadow-sm rounded-[30px]" >

                <figure className='rounded-[20px]'>
                    <Image
                        src={Idata.image}
                        alt={Idata.name}
                        width={1400}
                        height={2000}
                    />
                </figure >

                <div className="card-body mx-10 my-10">

                    <h2 className="font-bold text-[36px] px-4">
                        {Idata.name}
                    </h2>

                    <p className='px-4'>
                        {Idata.description}
                    </p>


                    <div className="flex gap-8 mx-5 my-3 ">
                        {Idata.muscleGroups.map((muscle, index) => (
                            <button
                                key={index}
                                className="font-bold bg-[#C2F800] text-black text-[16px] px-[10px] py-[3px] rounded-[20px]"
                            >
                                {muscle}
                            </button>
                        ))}
                    </div>



                    <div className="bg-zinc-800 p-5 rounded-[20px] text-[18px] mx-5  my-3" >

                        <div className="grid grid-cols-2 gap-x-80 py-3 border-b border-zinc-700">
                            <p>Equipment:</p>
                            <p>{Idata.equipment}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-x-80 py-3 border-b  border-zinc-700">
                            <p>Difficulty:</p>
                            <p>{Idata.difficulty}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-x-80 py-3 border-b  border-zinc-700">
                            <p>Duration:</p>
                            <p>{Idata.duration} min</p>
                        </div>

                        <div className="grid grid-cols-2 gap-x-80 py-3 border-b  border-zinc-700">
                            <p>Calories:</p>
                            <p>{Idata.caloriesBurned} kcal</p>
                        </div>

                        <div className="grid grid-cols-2 gap-x-80 py-3 border-b  border-zinc-700">
                            <p>Sets:</p>
                            <p>{Idata.sets}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-x-80 py-3 border-b  border-zinc-700">
                            <p>Reps:</p>
                            <p>{Idata.reps}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-x-80 py-3">
                            <p>Rating:</p>
                            <p>{Idata.rating}</p>
                        </div>

                    </div>


                    <div className='mx-7 my-3'>
                        {Idata.instructions.map((info, index) => (
                            <p key={index} className="py-2 ">
                                {index + 1}. {info}
                            </p>
                        ))}
                    </div>








                    <div className="card-actions justify-end gap-12 my-7">


                        <PlanPageProps book={Idata}></PlanPageProps>
                        <SavePageProps savebook={Idata}></SavePageProps>
                       

                       

                       
                    </div>


                </div>

            </div>
        </div>
    );
};

export default DetailPage;


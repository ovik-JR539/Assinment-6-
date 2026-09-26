import React from 'react';
import men from '@/app/assets/banner.png'
import Image from 'next/image';

const HomePage = () => {
    return (

        <section className=' container mx-auto m-10'>

            <div className=' bg-[#15171D] p-20 rounded-[10px] grid grid-cols-2 gap-10 iten-center  '>

                <div>
                    <p className='font-bold text-[#C2F800] text-[12px] py-[10px]' >WORKOUT LIBRARY</p>

                    <p className='font-semibold text-white text-[60px]' >TRAIN WITH INTENT.LOG <br />

                        <p className='my-[-30]'> EVERY SET.</p>

                    </p>



                    <p className='font-regular text-[16px] text-[9CA3AF] py-7'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br />
                        into today`s plan, and watch the week`s work add up.</p>

                    <button className=' bg-[#C2F800] font-blod text-[12px] text-black px-[12] py-[7] rounded-[5px] my-[3px] '>BROWSE WORKOUTS</button>
                </div>

                <div>
                    <Image src={men} alt='men' className="ml-[50px]"></Image>
                </div>



            </div>

        </section>


    );
};

export default HomePage;
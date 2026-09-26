import React from 'react';
import LibraryCard from '../component/librarycard';


const LibraryPage = async () => {
    const res = await fetch("https://api.api-store.workers.dev/api/fitlog");

    const librarydata = await res.json();

    return (
        <div className="container mx-auto ">


            <div className='py-15'>
            <p className="font-bold text-[30px]">
                THE LIBRARY
            </p>

            <p className="text-[14px]">
                Twelve lifts covering every major muscle group.
            </p>
            </div>



            <div className="grid grid-cols-3 gap-48 ">

                {librarydata.map((data) => (
                    <LibraryCard
                        key={data.id}
                        data={data}
                    />
                ))}

            </div>

        </div>
    );
};

export default LibraryPage;
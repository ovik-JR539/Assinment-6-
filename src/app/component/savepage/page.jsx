
"use client";

import React, { useContext } from "react";
import { Bookmark } from "lucide-react";
import { PlanContext } from "@/app/context/pagecontext";
import { toast } from "react-toastify";

const SavePageProps = ({ savebook }) => {

    const { savepage, setsavepage } = useContext(PlanContext);


    const handleSavePage = () => {

        setsavepage([ ...savepage,savebook ]);

        toast.success(`${savebook.name} saved for later`);
 };


    return (

        < button className=" btn btn-primary text-black bg-[#C2F800] border border-white " onClick={handleSavePage}>

        <Bookmark size={18} />

        Save for later

        </button>

    );
};

export default SavePageProps;

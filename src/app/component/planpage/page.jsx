
"use client";

import React, { useContext } from "react";
import { Save } from "lucide-react";
import { PlanContext } from "@/app/context/pagecontext";
import { toast } from "react-toastify";

const PlanPageProps = ({ book }) => {

    const { planpage, setplanpage } = useContext(PlanContext);

    console.log(planpage);

    const handlePlanPage = () => {

        console.log("trigger", book);

        setplanpage([...planpage, book]);
        toast.success(`the plan was added ${book.name}`)


    };

    return (

        <button className="btn btn-primary text-black bg-[#C2F800] border border-white"onClick={() => handlePlanPage()}>
        <Save size={18} />

        add to today`s plan
        
        </button>
    );
};

export default PlanPageProps;


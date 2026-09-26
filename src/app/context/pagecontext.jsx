"use client";

import React, { createContext, useState } from "react";

export const PlanContext = createContext();

const PageContext = ({ children }) => {

    const [planpage, setplanpage] = useState([]);
    const [savepage, setsavepage] = useState([]);

    const sharedata = {
        planpage,
        setplanpage,
        savepage,
        setsavepage
    };

    return (
        <PlanContext.Provider value={sharedata}>
            {children}
        </PlanContext.Provider>
    );
};

export default PageContext;
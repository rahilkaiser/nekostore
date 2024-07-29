"use client"
import React from 'react';
import { ClipLoader } from 'react-spinners';

const CustomSpinner = () => {

    return (
        <div className="flex items-center justify-center py-12">
            <ClipLoader color={"#ed1d24"} size={50} />
        </div>
    );
};

export default CustomSpinner;

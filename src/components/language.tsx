'use client'

import React from "react";
import values from "@/app/values";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const LanguageElement = () =>
{
    return (
        <button onClick={onClicky}>
            <li className="px-8 border-b-2 hover:border-b-4 h-full flex items-center transition-all">
                {values.getLang()}
            </li>
        </button>
        
    )
}

const onClicky = () =>
{
    values.cycleLanguages()
}

export default LanguageElement;
'use client'
import { useState } from "react";
import exCapModule from "@/app/excap/excap.module.css"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Code = (props:any) =>
{
    const [fontSize, setFontSize] = useState('text-lg');
    const other = ' m-4 transition-all select-none'

    const handleClick = () => 
    {
        setFontSize(fontSize === 'text-lg' ? 'text-2xl' : 'text-lg');
    };

    return (
        <div onClick={handleClick} className={fontSize + other}>
        <code className={exCapModule.code}>
                {props.methodName}
            </code>
            <p className="indent-8">
                {props.children}
            </p>
        </div>
    )
    
}

export default Code;
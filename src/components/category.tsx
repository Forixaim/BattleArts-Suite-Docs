'use client'
import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CollapsibleCategory = (props:any) =>
{
    const [collapsed, setCollapsed] = useState('invisible scale-y-0 h-0')
    const other = ' transition-all'

    const onClick = () =>
    {
        setCollapsed(collapsed === 'invisible scale-y-0 h-0' ? 'visible scale-y-100 h-auto' : 'invisible scale-y-0 h-0')
    }

    return (
        <div>
            <h2 onClick={onClick} className={props.styles}>
                {props.identifier}
            </h2>
            <div className={collapsed + other}>
                {props.children}
            </div>
        </div>
    )
}

export default CollapsibleCategory;
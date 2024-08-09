"use client"

import React, { useEffect, useState } from 'react'
import GlobalStylesProvider from './GlobalStylesProvider'

interface Props {
    children : React.ReactNode
}

export default function ContextProvider({children}: Props) {

    const [isReady,setIsready] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setIsready(true);
        },200)
    },[])

    if(!isReady) return null;

    return (
        <GlobalStylesProvider>
            {children}
        </GlobalStylesProvider>
    )

}

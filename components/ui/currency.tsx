"use client"

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("en-US", {
    style: 'currency',
currency:"BDT"})

interface CurrencyProps{
    value?: string | number;
}

const Currency:React.FC<CurrencyProps> = ({value}) => {
    const [isMounted, setMounted] = useState(false)
    
    useEffect(() => { setMounted(true) }, [])
    if (!isMounted) {
        return null;
    }
    return (
        <div className="font-bold">{formatter.format(Number(value))}</div>
    )
}

export default Currency;
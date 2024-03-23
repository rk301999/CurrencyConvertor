import { useEffect,useState } from "react";

const useCurrencyInfo =(currency)=>{
    const [data,setData] = useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json()) //convert the string output res to json response 
        .then((res)=>setData((res)=>res[currency])) // store the data  
    },[currency])
    return data
}

export default useCurrencyInfo; // exported the whole function thats what happens behind all hooks


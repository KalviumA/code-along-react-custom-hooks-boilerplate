import { useState,useEffect } from "react";


function saveValue(key,initialValue){
    const saveLocal = JSON.parse(localStorage.getItem(key))

    const saveSession =JSON.parse(sessionStorage.getItem(key));


    if(saveLocal) return saveLocal;

    if(saveSession) return saveSession;

    else return initialValue;
}

export default function useLocalStorage(key,initialValue){
    const [content, setcontent] = useState(()=> {return saveValue(key,initialValue)});

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(content))
        sessionStorage.setItem(key,JSON.stringify(content))
    },[key,content]);

    return([content,setcontent])
}
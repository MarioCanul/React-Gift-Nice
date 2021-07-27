import { useEffect, useState } from "react"
import { giftSearch } from "../../helpers/GiftUri";


export const useFetchGifs = (category) => {
 const [state, setState]=useState({
     data:[],
     loading:true
 });
 
    useEffect(()=>{
        giftSearch(category)
        .then(img=>{
setTimeout(() => {
    setState({
       data:img,
       loading:false 
    })
}, 1500);
        });
    },[category]);
return state;
}

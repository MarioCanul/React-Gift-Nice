import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid'
import { Header } from './components/Header'

 const GiftExpert = () => {
     const [categories, setCategories] = useState([])
    
    //  const handleAdd =()=>{
    //      //spread con arrays
    //    setCategories([...categories ,'Sailos Moon'])
    //  setCategoris(cat=>[...cats,'Sailor Moon])
    //  }
    
     return (
        <>
            <Header/>
           <hr/>
      <AddCategory setCategories={setCategories}/>
           <hr/>
           <ol>
               {
                   categories.map(cat=>(
                    
                    <GiftGrid key={cat} categoria={cat}/>
                
                   ))
               
                  
               }
               </ol>
        </>
    )
}
export default GiftExpert;
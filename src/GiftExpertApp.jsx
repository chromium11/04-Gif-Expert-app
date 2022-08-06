import React from "react";
import { useState } from "react"
import { AddCategories, GifGrid } from "./components";

export const GiftExpertApp = () => {
 
  const [categories, setCategories] = useState(['one punch'])

  const OnAddCategorie = (newCategory) =>{
        if (categories.includes(newCategory)) {
          return; //no deja pasar valores repetidos
        }
        // valorant
        // categories.push('Valorant');
        setCategories([newCategory,...categories ])

  }

  console.log(categories);


    return (
    <>
    {/* titulo*/}
    <div>Gift Expert App</div>

    {/* Input*/}
        <AddCategories 
            onNewCategory={event => OnAddCategorie(event)}
        // setCategories={setCategories} 
        />

    {/* Listed de gif*/}
   
  
      {
        categories.map( (category) =>(
          <GifGrid key={category } 
                    category={category}
          /> //llama al componente
            // return <li key={category}>{category}</li>
        ))
      }
       
  

    {/* Gif Item*/}
    </>
    
  )
}

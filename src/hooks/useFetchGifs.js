import React from 'react'
import {useEffect, useState} from 'react'
import {getGif} from '../helpers/getgifs';

export const useFetchGifs = (category) => {

    const [Images, setImages] = useState([]);
    const [isloading,setIsLoading] = useState(true);

    // con use effect la api solo se genera un vez al crearse 
    // el componente
     const getImages = async() => {
        const newImages = await getGif(category);
        setImages(newImages);
        setIsLoading(false)
     }
        useEffect(() => {  

            getImages();
            // getGif(category)
            // .then(newImages=>setImages(newImages));
        }, []);



    return {
        Images:Images,
        isLoading : isloading
        
    }


}

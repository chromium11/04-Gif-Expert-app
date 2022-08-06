import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {
 
const {Images, isLoading} = useFetchGifs(category);
    
 
 
    return (
    <>
    <h2>{category}</h2>
    {
        isLoading && (<h3>Cargando</h3> )
    }
      <div className='card-grid'>
        {Images.map((image) =>(
            <GifItem 
            key={image.id} 
            {...image} //desestructura todos los datos del item
            // title={image.title}
            // url={image.url}
            />
        ))}
      </div>
    </>
  )
}

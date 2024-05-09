import { useEffect,useState } from "react";
import { createClient } from 'pexels';
import { useParams } from "react-router-dom";

const Gallery = (props) => {
  const [photos,setPhotos] = useState([])
  const params = useParams()
  console.log(params);
  const client = createClient('pgjKta04fLUgeW73cq9w8WYtBcUDaWZRqJb9DncYF0OkCgkK7O2Nbh2c');

  const handleFetch = async() => {
    client.photos.search({ query:params.id, per_page: params.num })
    .then(photos => { 
      console.log(photos)
      setPhotos(photos.photos)
    });
  }

  useEffect(()=>{
  
  handleFetch()
 },[params.id])

 const name = params.id[0].toUpperCase()+params.id.slice(1)

  if(params.id){
    if(photos.length>0){
      return <div>
        <h2>{name}</h2>
        {photos.map(item => {
          return <img className="image" style={{margin:"10px"}} key={item.id} src={`${item.src.original}`}/>
        })}
        
        </div>
    }
  }
  return <h1>Try other query</h1>
      
}

export default Gallery
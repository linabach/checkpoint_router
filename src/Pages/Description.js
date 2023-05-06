import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieList } from '../components/Data/MovieList'

const Description = () => {

    const [descrip, setDescrip]=useState({})
    const {id}=useParams()

    useEffect( () => {
        const movie=MovieList.find((el)=> el.id == id);
        setDescrip(movie);

    })

  return (
    <div>
    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height: "100vh",flexDirection: "column", boxSizing: "border-box", borderRadius:"25px", border: "1px solid white",marginTop:"40%",width:"500px", height:"600px"}}>
        <img src={descrip.imgSrc} style={{width:"50%" , marginTop:"2%", marginBottom:"2%",}} alt="poster"/>
        <div style={{width:"60%"}}>
        <h5 style={{color:"white",textAlign:"center"}}>{descrip.description}</h5>
       </div>
    </div>
    </div>
  );
};

export default Description
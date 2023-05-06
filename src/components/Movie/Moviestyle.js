import React from 'react'
import './MovieStyle.css'
import ReactStars from "react-rating-stars-component";
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Movie({Movie}) {
  const navigate = useNavigate()
  return (
    <div>
       <div class="box">
          <div class="imgBx">
            <img src={Movie.imgSrc} alt="poster"/>
          </div>
          <div class="content">
            <div >
              <h2>{Movie.name}</h2>
              <Button variant="primary" onClick={()=> navigate(`/Description/${Movie.id}`)} style={{backgroundColor:"transparent", marginTop:"12px", color:"white", width:"200px", borderRadius:"25px", marginBottom:"10px",left: "50%",bottom: "20px",zIndex: "999"}}>
                Description
              </Button>
              <Button  variant="primary" onClick={()=> navigate(`/Trailer/${Movie.id}`)} style={{backgroundColor:"transparent", color:"white", width:"200px", borderRadius:"25px", marginBottom:"10px",left: "50%",bottom: "20px",zIndex: "999"}}>
                Trailer
              </Button>
      
            </div>
           
          </div>
          
           <div>
          <ReactStars
              value={Movie.rate}
              size={24}
              activeColor="#ffd700"
              edit={false}/> </div> 
      </div>
    </div>)
}

export default Movie

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieList } from '../components/Data/MovieList'
import ReactPlayer from 'react-player'

const Trailer = () => {

    const [MovieT, setTrail] = useState({})
    const {id}= useParams()

    useEffect ( () => {
        const movie = MovieList.find ( (el) => el.id == id)
        setTrail ( movie)
    })

  return (
  
        <ReactPlayer url={MovieT.trailer} controls />
  )
}

export default Trailer
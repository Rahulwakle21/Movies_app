import { Chip } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'

export default function Genres({
    type,
    selectedGenra,
    setSelectedGenra,
    genres,
    setGenra,
    setPage
}) {

    const fetchGenrs = async() =>{
      const {data} =   await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

      setGenra(data.genres)
    }
    // console.log(genres)
    useEffect(()=>{
        fetchGenrs()
        // eslint-disable-next-line
    },[])

    return (
        <div style={{padding:"6px 0"}}>
                {
                    genres.map((genre)=>(
                        <Chip  label={genre.name}/>
                    ))
                }
        </div>
    )
}

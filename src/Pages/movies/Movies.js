import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Genres from '../../components/genres/Genres'
import CustomPagination from '../../components/pagination/CustomPagination'
import SingleContent from '../../components/singleContent/SingleContent'

export default function Movies() {

    const[page,setPage] = useState(1)
    const[content,setContent] = useState([])
    const[numberOfPage, setNumberOfPage] = useState()
    const[selectedGenra, setSelectedGenra] = useState([])
    const[genres, setGenres] = useState([])

    const fetchData = async()=>{
      const {data} =   await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`)
        
      setContent(data.results)
       setNumberOfPage(data.total_pages) 
    }
    

    useEffect(()=>{
        fetchData()
        // eslint-disable-next-line
    },[page])
    return (
        <div>
            <span className="pageTitle">Movies</span>
            <Genres  type = "movies"
             selectedGenra={selectedGenra}
             setSelectedGenra={setSelectedGenra}
             genres={genres}
             setGenres={setGenres}
             setPage={setPage}
             />
            <div className="trending">
                    {
                        content && content.map((c)=>(
                            <SingleContent key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type={c.media_type}
                            vote_average={c.vote_average}
                            />
                        ))
                    }
                </div>
                <CustomPagination setPage={setPage} numberOfPAges={numberOfPage}/>
        </div>
    )
}

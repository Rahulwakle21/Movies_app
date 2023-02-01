import { Button,TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab'
import axios from 'axios';
import SingleContent from '../../components/singleContent/SingleContent';
import CustomPagination from '../../components/pagination/CustomPagination';

export default function Search() {

    const[type,setType] = useState()
    const[page,setPage] = useState()
    const[searchText,setSearchText]=useState("")
    const[content,setContent]=useState()
    const[numOfPages ,setNumOfPages]=useState()

    const theme = createTheme({
     
        palette: {
            type:"dark",
          primary: {
            // light: '#757ce8',
            main: '#3f50b5',
            // dark: '#002884',
            contrastText: '#fff',
          },
          secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
        },
      });
      const handleChange = (event, newValue) => {
        setType(newValue);
        setPage(1)
      };

      const searchBox = async()=>{
        const {data} = await axios.get(`https://api.themoviedb.org/3/search/${type?"tv":"movie"}?api_key=${process.env.REACT_APP_API_KEY
      }&language=en-US&query=${searchText}&page=${page}&include_adult=false`)

          setContent(data.results)
          setNumOfPages(data.total_pages)
      }

      useEffect(()=>{
        window.scroll(0,0)
        searchBox()
      },[type,page])
    return (
        <div>
            <ThemeProvider theme={theme}>
           <div style={{display:"flex", margin:"15px 0"}}>
           <TextField
            style={{flex:"1" , backgroundColor:"white"}}
            className='searchBox'
            label="search"
            variant='filled'
            onChange={(e)=>setSearchText(e.target.value)}
           />
           <Button variant='contained' style={{marginLeft:10}} onClick={searchBox} ><SearchIcon /></Button>
           </div>
           <Tabs value={type} theme={theme} onChange={handleChange}  textColor="secondary"
  indicatorColor="secondary"
  aria-label="secondary tabs example" centered>
                <Tab style={{width:"50%"}} label='search movies'  textColor="secondary" indicatorColor='secondary'/>
                <Tab style={{width:"50%"}} label='search TV Series' color='white'/>
           </Tabs>
            </ThemeProvider>
            <div className="trending">
                    {
                        content && content.map((c)=>(
                            <SingleContent key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type={type ? 'tv' : 'movie'}
                            vote_average={c.vote_average}
                            />
                        ))
                    }
                    {
                      searchText && !content && (type? <h2>No Series found</h2> : <h2>No Movies Found</h2>)
                    }
                </div>

                <CustomPagination setPage={setPage}/>
          
        </div>
    )
}

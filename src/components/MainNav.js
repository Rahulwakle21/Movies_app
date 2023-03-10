import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function SimpleBottomNavigation() {
  
  const [value, setValue] = React.useState(0);
  const navigate= useNavigate()

  useEffect(()=>{
      if(value===0){
        navigate('/')
      }else if(value === 1){
        navigate('movies')
      }else if(value===2){
        navigate('/series')
      }else if(value===3){
        navigate('/search')
      }
  },[value,navigate])

  return (
    <Box className='bg-dark' sx={{ width: "100%", position:"fixed",bottom:"0",zIndex:"100"}} >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction label="Movies" icon={<LocalMoviesIcon />} />
        <BottomNavigationAction label="Tv Series" icon={<LiveTvIcon />} />
        <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
     </Box>
  );
}
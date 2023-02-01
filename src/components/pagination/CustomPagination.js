import { ThemeProvider } from '@emotion/react'
import {  createTheme } from '@mui/material'
import Pagination from '@mui/material/Pagination'
import React from 'react'

const theme = createTheme({
    palette:{
        type:"dark"
    }
})
export default function CustomPagination({setPage,numberOfPAges = 10}) {

    const handleChange=(page)=>{
        setPage(page)
        window.scroll(0,0) // page goes on top
    }

    return (
        <div style={{ width:'100%', display:"flex" , justifyContent:"center" ,marginTop:"10px"}}>
            <ThemeProvider theme={theme}>
                <Pagination 
                Pagination count={numberOfPAges} color="primary"
                onChange={(e)=>handleChange(e.target.textContent)}/>
            </ThemeProvider>
           
        </div>
    )
}

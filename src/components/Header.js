import './Header.css'

const Header = ()=>{
    return(
        <span className='header' onClick={()=>window.scroll(0,0)}>
                Movies HUB
        </span>
    )
}

export default Header
import React from 'react'
import {Link} from 'react-router-dom'
import {colors} from '../constants/colors'


const Header = () => {
    return (
        <div className="header">
        <div className="title-wrapper">
          <p className="App-title">LOGO</p>
        </div>
        <nav
          className="nav-bar"
        >
          <Link to="/">
            home
          </Link>
          <Link to="/rejestracja" >
          rejestracja
          </Link>
          <Link to="/logowanie" >
          logowanie
          </Link>
          <Link to="/przypomnienie_hasla" >
          przypomnienie_hasla
          </Link>
            <Link
              to="/resetowanie_hasla"
            >
              resetowanie_hasla
            </Link>
            <Link to="/wyszukiwarka_graczy" >
            wyszukiwarka_graczy
          </Link>
          <Link to="/moje_gry" >
          moje_gry
          </Link>
        </nav>
        <style jsx>{`

.header {
    background: ${colors.header.bg};
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    color: white;
    position: relative;
}
a {
  color: white;
  margin: 10px 20px;
  flex:1;
}
.App-title {
  margin:0;
    margin: 5px 10px;
    font-size: 25px;
}
         
        `}</style>
      </div>
    )
  }
  
  export default Header
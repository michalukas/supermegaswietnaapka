import React from 'react'
import {Link} from 'react-router-dom'
import {colors} from '../constants/colors'
import logo from '../images/logo.svg'
import ustawienia from '../images/ustawienia.svg'
import sygnet from '../images/sygnet.svg'
import lupa from '../images/lupa.svg'



const Header = () => {
    return (
      <div className>
        <nav class="navbar navbar-expand-lg header  " >

          <a class="navbar-brand " href="/strona_domowa"><img class="logo" src={logo}></img></a>


         
          <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon "></span>
          </button>

          <div class="collapse navbar-collapse  " id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto ">
              <form class="form-inline my-2 my-lg-0" id="searchfield">
              <input class="form-control mr-sm-2" type="search" placeholder="Szukaj..." aria-label="Search"/>
              <button class="btn header my-2 my-sm-0" type="submit"><img class="icony" src={lupa}/> </button>
              </form>

              
              <li class="nav-item dropdown">
              
                <a class="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img class="icony" src={sygnet}/> 
                </a>
                <div class="dropdown-menu header dropdown-menu-right" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    <Link to="/moje_gry" >
                      Moje Gry
                    </Link>
                    </a>
                  <a class="dropdown-item" href="#">
                    <Link to="/wyszukiwarka_graczy" >
                      Wyszukaj gracza
                    </Link>
                  </a>
                </div>
              </li>
              <div>
              <li class="nav-item dropdown ">
                <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">            
                  <img class="icony" src={ustawienia}/> 
                </a>
                <div class="dropdown-menu header dropdown-menu-right" aria-labelledby="navbarDropdown">
                  
                  <a class="dropdown-item" href="#">
                  
                    <Link to="/">
                      Strona domowa
                    </Link>
                  </a>
                  <a class="dropdown-item" href="#">
                    <Link to="/logowanie" >
                      Logowanie
                    </Link>
                  </a>	
                  <a class="dropdown-item" href="#">
                    <Link to="/rejestracja" >
                      Rejestracja
                    </Link>
                  </a>
                  <a class="dropdown-item" href="#">
                    <Link to="/przypomnienie_hasla" >
                     Przypomnienie Hasła
                    </Link>
                  </a>
                  <a class="dropdown-item" href="#">
                    <Link to="/resetowanie_hasla" >
                      Reset Hasła
                    </Link>
                  </a>
                </div>
              </li>
              </div>
            </ul>
          </div>
        </nav>
        <style jsx>{`

          .header {
              background: ${colors.header.bg};
              color: white;     
          }
          a {
            color: white;
          }
          
          #searchfield{
            margin-right:80px;
          }

          .App-title {
            margin:0;
              margin: 5px 10px;
              font-size: 25px;
          }
          
          .logo
          {
            max-height:50px;
            height: 50px;
          }
          .icony
          {
            max-height:20px;
            height: 20px;
            margin-right:20px;
              
          }

      

         
        `}</style>
      </div>
    )
  }
  
  export default Header

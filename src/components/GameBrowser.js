import React from 'react'
import {colors} from '../constants/colors'
import ListComponent from './ListComponent'

const GameBroser = () => 
<div className="game-browser">
<div className="title">Wyszukiwarka gier</div>
<div className="list-wrapper">
<input type="text" className="search" placeholder="Szukaj..."/>
<ListComponent />
</div>
<style jsx>{`
.game-browser {
    background: ${colors.pageBg};
    margin: 0px 40px 20px 0px;
    display: grid;
    grid-template-rows: 70px auto; 
    
}
::placeholder {
            color: white;
            font-weight: 300;
        }
.search {
font-family: Lato;
color: white;
font-weight: bold;
padding: 0 20px;
margin: 0px 0px 20px 0px;
height: 50px;
background: rgba(255,255,255,0.4);
border:none;
border-radius: 2px;
}
.title {
    font-family: Lato;
    font-weight: 300;    
    font-size: 30px;
    color: white;
    width:100%;
    border-bottom: 2px solid ${colors.myGames.another};
    padding: 10px 50px;
}
.list-wrapper {
    display: grid;
    grid-template-rows: 100px 300px;
    grid-template-columns: 100%; 
    margin: 60px 0px 50px 50px;
}
`}</style>
</div>

export default GameBroser
import React from 'react'
import ListComponent from './ListComponent'
import {colors} from '../constants/colors'

const MyGames = () => 
<div className="games">
<div className="title">Moje gry</div>
<div className="games-container">
<div className="game-list">
Wiedźmin 3: Dziki Gon (PC)
</div>
<div className="game-list-wrapper">
<div className="game-info">
<img src="http://www.miastogier.pl/baza/Encyklopedia/gry/Wiedzmin3DzikiGon_PC/Okladka/okl_wiedzmin3dzikigonpc.jpg" height='100px'/>
</div>
<ListComponent header={['LP.','Produkt', 'Stan instalacji','Data dodania' ]} style={{header: {display:'grid', gridTemplateColumns:'50px auto 20% 20%'},
row: {display:'grid', gridTemplateColumns:'50px auto 20% 20%'}
}}/>
</div>

</div>
<style jsx>{`
.game-list-wrapper {
    display: grid;
    grid-template-rows: 27% 73%;
}
.game-info {
    height: 130px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    margin-bottom: 40px;
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
.games {
    margin: 20px 0px 20px 0px;
    display: grid;
    grid-template-rows: 70px 740px;
    grid-template-columns: 100%;
}
.games-container {
    display:grid;
    grid-template-columns: 25% 75%;
    grid-template-rows: 100%;
    grid-gap:70px;
    padding: 60px 40px;
}
.game-list {
    border-right: 1px solid rgba(255,255,255,0.4);
    padding: 10px 20px;
    color: white;
    font-size: 17px;
    text-align:right;
}
`}</style>
</div>

export default MyGames
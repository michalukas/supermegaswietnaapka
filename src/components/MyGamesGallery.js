import React from 'react';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom'


const GameGallery = () => 


<div className="game-gallery">
    <div>
        <span>Moje gry</span>
        <hr/>
    </div>
    <div class="row">
        <div id="slider" class="row__inner">
       
            <div class="tile">
                <div class="tile__media">
                    <img class="tile__img" src="https://cdn.tutsplus.com/psd/uploads/legacy/psdtutsarticles/linkb_60vgamecovers/44.jpg"></img>
                </div>
                <div class="tile__details">
                    <div class="tile__title">
                        Crysis
                    </div>
                </div>
            </div>
            <div class="tile">
                <div class="tile__media">
                    <img class="tile__img" src="https://static.posters.cz/image/750/plakaty/gears-of-war-4-game-cover-i30650.jpg"></img>
                </div>
                <div class="tile__details">
                    <div class="tile__title">
                        Gears Of War 4
                    </div>
                </div>
            </div>
            <div class="tile">
                <div class="tile__media">
                    <img class="tile__img" src="http://images5.fanpop.com/image/photos/30900000/Grand-Theft-Auto-IV-The-Lost-And-Damned-Game-Cover-grand-theft-auto-iv-the-lost-and-damned-30918123-500-556.jpg"></img>
                </div>
                <div class="tile__details">
                    <div class="tile__title">
                        Grand Theft Auto IV
                    </div>
                </div>
            </div>
            <div class="tile">
                <div class="tile__media">
                    <img class="tile__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwpvNPgDN57KAcCxKf-X0ch2W5DWs1g3bl28aUU3exkCH8CxxkPg"></img>
                </div>
                <div class="tile__details">
                    <div class="tile__title">
                        Far Cry 4
                    </div>
                </div>
            </div>
            <div class="tile">
                <div class="tile__media">
                    <img class="tile__img" src="https://cdn.pastemagazine.com/www/system/images/photo_albums/best-game-covers-2016/large/far-cry-primal-box-art.jpg?1384968217"></img>
                </div>
                <div class="tile__details">
                    <div class="tile__title">
                        Far Cry Primal
                    </div>
                </div>
            </div>
            <div class="tile">
                <div class="tile__media">
                    <img class="tile__img" src="https://i.ytimg.com/vi/M2Ndcu8ITnI/maxresdefault.jpg"></img>
                </div>
                <div class="tile__details">
                    <div class="tile__title">
                        Mass Effect 2
                    </div>
                </div>
            </div>
       
        </div>
        
    </div>
    <p id="myGamesContainer"><Link id="mygamesButton" to="/moje_gry" ><c>Przeglądaj Gry</c></Link></p>
    
<style jsx>{`


    #myGamesContainer{
        text-align:center;
        background-color:cyan; /* Green */
        -webkit-border-radius: 2px;
        -moz-border-radius: 2px;
        border-radius: 2px;
        color: white;
        padding: 5px 15px;
        text-decoration: none;
        font-size: 16px;
        margin-left: 40%;
        margin-right: 40%;
        padding-bottom:5px
        -webkit-transition: background-color 1s ease-out;
        -moz-transition: background-color 1s ease-out;
        -o-transition: background-color 1s ease-out;
        transition: background-color 1s ease-out;
        
    }
    #myGamesContainer:hover
    {
        background-color:#3229A9;
    }
    a:hover {
       color: white;
       text-decoration:none;
    }
    span{
        color:white;
    }
    hr{
        display: block;
        height: 1px;
        border: 0;
        border-top: 1px solid #303579;
        margin: 1em 0;
        padding: 0;
        
    }
    
    .game-gallery {
        background: #1a1d42;
        margin: 20px 20px 20px 50px;
        //border: 1px solid black;
        //overflow: hidden;
    }
    .gameCover{
        width:150px;
        height:200px;
    }
    
    .row {
        overflow: hidden;
        height:77%;
        width:100%;
        margin-left:0px;
        
    }
    .row__inner {
        transition: 450ms -webkit-transform;
        transition: 450ms transform;
        transition: 450ms transform, 450ms -webkit-transform;
        font-size: 0;
        white-space: nowrap;
        margin:40px 0;
        padding-bottom: 10px;
    }
    .tile {
        position: relative;
        display: inline-block;
        width: 250px;
        height: 200px;
        margin-right: 10px;
        font-size: 20px;
       
        transition: 450ms all;
        -webkit-transform-origin: center left;
                transform-origin: center left;
    }
    .tile__img {
        width: 250px;
        height: 200px;
        -o-object-fit: cover;
        object-fit: cover
        max-width:100%;
    }
    .tile__details {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
        font-size: 10px;
        opacity: 0;
        background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
        transition: 450ms opacity;
    }
    .tile__details:after,
    .tile__details:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        display: #000;
    }
    .tile__details:after {
        margin-top: -25px;
        margin-left: -25px;
        width: 50px;
        height: 50px;
        border: 3px solid #ecf0f1;
        line-height: 50px;
        text-align: center;
        border-radius: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 1;
    }
    .tile__details:before {
        content: '▶';
        left: 0;
        width: 100%;
        font-size: 30px;
        margin-left: 4px;
        margin-top: -23px;
        text-align: center;
        z-index: 2;
        color:white;
    }
    .tile:hover .tile__details {
        opacity: 1;
    }
    .tile__title {
        position: absolute;
        bottom: 0;
        padding: 10px;
        color:white;
      
    }
    .row__inner:hover {
        -webkit-transform: translate3d(-62.5px, 0, 0);
                transform: translate3d(-62.5px, 0, 0);
    }
    .row__inner:hover .tile {
        opacity: 0.3;
    }
    .row__inner:hover .tile:hover {
        -webkit-transform: scale(1.3);
                transform: scale(1.3);
        opacity: 1;
    }
    .tile:hover ~ .tile {
        -webkit-transform: translate3d(125px, 0, 0);
                transform: translate3d(125px, 0, 0);
    }

    @keyframes slider {
        
        0%  { left: 30px; }
        15% { left: 30px; }
        25% { left: -11%; }
        35% { left: -17%; }
        50% { left: -23%; }
        60% { left: -23%; }
        70% { left: -17%; }
        80% { left: -11%; }
        100% { left: 30px; }

    }
    #slider{ 
    position: relative;
   
    animation: 30s slider infinite; 
    }

    #slider:hover{
        -webkit-animation-play-state:paused;
        -moz-animation-play-state:paused;
        -o-animation-play-state:paused;
        animation-play-state:paused;
        
      }
    .game-gallery{
        -webkit-animation-play-state:paused;
        -moz-animation-play-state:paused;
        -o-animation-play-state:paused;
        animation-play-state:paused;
        
    }


`}</style>


</div>




export default GameGallery
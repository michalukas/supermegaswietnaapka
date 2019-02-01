import React from 'react'
import MyGamesGallery from '../components/MyGamesGallery'
import Contacts from '../components/contacts'
import GameBrowser from '../components/GameBrowser'
import {colors} from '../constants/colors'


const Home = () => 
<div className="home">
<div className="home-main">
<GameBrowser />
<MyGamesGallery />
</div>
<Contacts />
<style jsx>{`
.home {
    background: ${colors.pageBg};
    width: 100vw;
    height: 100%;
    display: grid;
    grid-template-columns: 70% 30%;

}

.home-main {
    margin:20px 0;
    overflow:auto;
    display:grid;
    grid-template-columns: 100%;
    grid-template-rows:  70% 70%;
    
}
`}</style>
</div>

export default Home
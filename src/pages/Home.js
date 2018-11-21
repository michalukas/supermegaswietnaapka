import React from 'react'
import MyGamesGallery from '../components/MyGamesGallery'
import Contacts from '../components/contacts'
import FindGamers from '../components/FindGamers'


const Home = () => 
<div className="home">
<div className="home-main">
<MyGamesGallery />
<FindGamers />
</div>
<Contacts />
<style jsx>{`
.home {
    background: #1a1d42;
    width: 100vw;
    height:100%;
    display: grid;
    grid-template-columns: 70% 30%;
    grid-template-rows:  100%;

}

.home-main {
    display:grid;
    grid-template-columnns: 100%;
    grid-template-rows:  50% 50%;
    
}
`}</style>
</div>

export default Home
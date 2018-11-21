import React from 'react'
import Games from '../components/MyGames'
import Contacts from '../components/contacts'

const MyGames = () => 
<div className="my-games">
<Games />
<Contacts />
<style jsx>{`
.my-games {
    background: #1a1d42;
    width: 100vw;
    height: 100%;
    display: grid;
    grid-template-columns: 70% 30%;
}
`}</style>
</div>

export default MyGames
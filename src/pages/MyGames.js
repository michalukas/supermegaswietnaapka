import React from 'react'
import Games from '../components/MyGames'
import Contacts from '../components/contacts'
import {colors} from '../constants/colors'

const MyGames = () => 
<div className="my-games">
<Games />
<Contacts />
<style jsx>{`

.my-games {
    overflow:hidden;
    background: ${colors.pageBg};
    width: 100vw;
    height: 100%;
    display: grid;
    grid-template-columns: 80% 20%;
}
`}</style>
</div>

export default MyGames
import React from 'react'
import FindGamers from '../components/FindGamers'
import Contacts from '../components/contacts'

const GamersBrowser = () => 
<div className="gamers-browser">
<FindGamers />
<Contacts />
<style jsx>{`
.gamers-browser {
    background: #1a1d42;
    width: 100vw;
    height: 100%;
    display:grid;
    grid-template-columns: 70% 30%;
}
`}</style>
</div>

export default GamersBrowser
import React from 'react'
import SignComponent from '../components/SignComponentSignUp'
import Background from '../images/obrazek_strona_glowna'
import sygnet from '../images/sygnet.svg' 

const SignUp = () => 
<div className="sign-up" style={{backgroundImage: `url(${Background})`}}>
<div className="information-wrapper">
<img className="sygnet" src={sygnet}></img>
<span className="information">Pierwsza platforma dla biednych ludzi</span>
</div>
<div className="comp"><SignComponent /></div>
<style jsx>{`
.information-wrapper {
    height: 100%;
    display:grid;
    grid-auto-flow: column;
    place-content: center;
}
.sygnet {
    margin: auto 40px;
    width: 140px;
    height:140px;
}
.information {
    color: white;
    font-size: 60px;
    width: 550px;
    font-family: Lato;
    font-weight:bold;
    letter-spacing: 1px;
}
.sign-up {
    background: #1a1d42;
    width: 100vw;
    height: 100%;
    display:grid;
    grid-template-columns: 60% 40%;
    place-content: center;
}
.comp {
    width: 600px;
    height: 500px;
    margin: 10% 40px 10px 60%;
}
`}</style>
</div>

export default SignUp

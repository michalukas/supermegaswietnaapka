import React from 'react'
import SignComponentResetPassword from '../components/SignComponentResetPassword' 
import Background from '../images/obrazek_strona_glowna'
import sygnet from '../images/sygnet.svg' 

const ResetPassword = () => 
<div className="reset-password" style={{backgroundImage: `url(${Background})`}}>
<div className="information-wrapper">
<img className="sygnet" src={sygnet}></img>
<span className="information">Pierwsza platforma dla biednych ludzi</span>
</div>
<div className="reset-password_change">
<SignComponentResetPassword />
</div>
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
.reset-password {
    background: #1a1d42;
    width: 100vw;
    height: 100%;
    display:grid;
    grid-template-columns: 60% 40%;
    place-content: center;
}
.reset-password_change {
    width: 600px;
    height: 420px;
    margin: 10% 40px 10px 60%;
}
`}</style>
</div>

export default ResetPassword

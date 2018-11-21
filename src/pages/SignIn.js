import React from 'react'
import SignComponent from '../components/SignComponent'

const SignIn = () => 
<div className="sign-in">
<div className="comp"><SignComponent /></div>
<style jsx>{`
.sign-in {
    background: #1a1d42;
    width: 100vw;
    height: 100%;
    display:grid;
    place-content: center end;
}
.comp {
    width: 600px;
    height: 400px;
    margin-right: 10%;
}
`}</style>
</div>

export default SignIn
import React from 'react'
import ForgotPassw from '../components/SignComponent' 

const ForgotPassword = () => 
<div className="forgot-password">
<div className="forgot-password_change">
<ForgotPassw />
</div>
<style jsx>{`
.forgot-password {
    background: #1a1d42;
    width: 100vw;
    height: 100%;
    display:grid;
    place-content: center end;
}
.forgot-password_change {
    width: 600px;
    height: 400px;
    margin-right: 10%;
}
`}</style>
</div>

export default ForgotPassword
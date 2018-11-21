import React from 'react'
import SignComponent from '../components/SignComponent' 

const ResetPassword = () => 
<div className="reset-password">
<div className="reset-password_change">
<SignComponent />
</div>
<style jsx>{`
.reset-password {
    background: #1a1d42;
    width: 100vw;
    height: 100%;
    display:grid;
    place-content: center end;
}
.reset-password_change {
    width: 600px;
    height: 400px;
    margin-right: 10%;
}
`}</style>
</div>

export default ResetPassword
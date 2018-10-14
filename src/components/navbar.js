import React from 'react'

const NavBar = () => (
    <div className="nav-bar">
    <p className="logo">Logo</p>
    <style jsx>{`
    .nav-bar {
        background: #395177;
        width: 100%;
        height: 50px;
        color: white;
        position: relative;
    }
    .logo {
        position: absolute;
        margin-left: 10px;
    }
    `}</style>
    </div>
)

export default NavBar
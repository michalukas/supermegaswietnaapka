import React from 'react'
import {colors} from '../constants/colors'

const Footer = () => 
<div>
<div className="footer"/>
<style jsx>{`
.footer {
    background: ${colors.footer.bg};
    color: ${colors.footer.font};
    width: 100%;
    height: 10em;
    bottom: 0;
    position: absolute;
}
`}</style>
</div>

export default Footer
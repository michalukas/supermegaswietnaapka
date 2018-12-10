import React from 'react'
import {colors} from '../constants/colors'

const Footer = () => 
<div>
<div className="footer">
	<div className="Table">
      <tr>
          <td>Address</td>
		  <td align="right"><b>STEAM4POOR APP</b></td>
      </tr>
	  <tr>
          <td>132 Golden St.  San Francisco,  USA</td>
		  <td align="right">Copyright SGGW &#169; 2018</td>
      </tr>
	</div>

<style jsx>{`
.footer {
    background: ${colors.footer.bg};
    color: ${colors.footer.font};
    width: 100%;
    height: 4em;
    bottom: 0;
    position: absolute;
}
.Table{
	margin: 7px 10px 10px 30px;
}
td {
	color:white;
	width: 980px;
    height: 13px;
}

`}</style>
</div>
</div>

export default Footer

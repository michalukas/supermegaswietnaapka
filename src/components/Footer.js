import React from 'react'
import {colors} from '../constants/colors'

const Footer = () => 
<div className="footer">
	<div className="Table">
      <tr>
          <td></td>
		  <td align="right"><b>STEAM4POOR APP</b></td>
      </tr>
	  <tr>
          <td></td>
		  <td align="right">Copyright SGGW &#169; 2018</td>
      </tr>
	</div>

<style jsx>{`
.footer {
    background: ${colors.footer.bg};
    color: ${colors.footer.font};
    width: 100%;
    position:relative;
}
.Table{
	margin: 7px 40px 10px 30px;
}
td {
	color:white;
	width: 980px;
    height: 13px;
}

`}</style>
</div>

export default Footer

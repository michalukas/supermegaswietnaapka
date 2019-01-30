import React from 'react'
import {Link} from 'react-router-dom'

const SignComponent = () => 
<div className="sign-component" >
	<div className="formularz" >
		<p><h4>Zapomniałeś hasła?</h4> 
		<c>Wpisz adres email, a my wyślemy Ci link do zmiany hasła</c></p> <br></br>
		
		
        <form class="form-inline my-2 my-lg-0" id="searchfield">
			<p><input class="log" type="email" placeholder="e-mail" aria-label="Email address"/></p>
			<p><button class="btn1" type="submit">WYŚLIJ LINK</button></p>	
		</form>			
	
	</div>

<style jsx>{`
.sign-component {
    background: white;
    width: 100%;
    height: 100%;
    border: 1px solid black;
	border-radius: 5px;
}

a{
	color : white;
}

c{
	color : #9F9F9F;
}

h4{
	color: #444444;
	margin: 35px 0px 0px 0px;
}

.btn1{
	color: white;
	width: 530px;
	height: 60px;
	background: #746BDE;
	border: none;
	border-radius: 5px;
	margin: 5px 0px 0px 0px;
}

.log{
	color: #444444;
	background: #E5E9ED;
	width: 530px;
	height: 60px;
	border: none;
	webkit-border-radius: 5px; 
    moz-border-radius: 5px; 
    border-radius: 5px; 
	margin: 8px 0px ;	
	padding: 15px;
}

.formularz{
	margin: 7px 40px 10px 30px;	
}

`}</style>
</div>

export default SignComponent
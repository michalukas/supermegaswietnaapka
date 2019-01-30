import React from 'react'
import {Link} from 'react-router-dom'

const SignComponent = () => 
<div className="sign-component" >
	<div className="formularz" >
		<p><h4>ZAREJESTRUJ SIĘ DO STEAM4POOR</h4>
		<c>Podaj swoje dane, by utworzyć nowe konto</c></p>
		
		
        <form class="form-inline my-2 my-lg-0" id="searchfield">
			<p><input class="log" type="text" placeholder="Login" aria-label="Text"/></p>
			<p><input class="log" type="email" placeholder="e-mail" aria-label="Email address"/></p>
			<p><input class="log" type="password" placeholder="Hasło" aria-label="Password"/></p>
			<p><button class="btn1" type="submit">UTWÓRZ KONTO</button></p>	

		</form>			
	
	</div>

<style jsx>{`
.sign-component {
    background: white;
    width: 100%;
    height: 100%;
    border: 1px solid black;
	border-radius: 8px;
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
	border: none;
	background: #746BDE;
	border-radius: 8px;
	margin: 25px 0px 0px 0px;
}

.log{
	color: #444444;
	background: #E5E9ED;
	font-color:black;
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
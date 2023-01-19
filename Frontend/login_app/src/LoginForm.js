import React, {useRef} from "react";
import './LoginForm.css';

const LoginForm = (props) => {
	const loginRef = new useRef();
	const passwordRef = new useRef();

	const handleSubmit = (event) =>{
		event.preventDefault();

		props.onSubmit({
			login: loginRef.current.value,
			password: passwordRef.current.value,
		});
	}

	return (
		<form className="form">
			<h1>Login</h1>
			<label htmlFor="name">Name</label>
			<input type="text" id="name" ref ={loginRef}/>
			<label htmlFor="password">Password</label>
			<input type="password" id="password" ref ={passwordRef} />
			<button type="submit" onClick={handleSubmit}>Continue</button>
		</form>
	)
}

export default LoginForm;
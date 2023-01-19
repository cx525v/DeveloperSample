import React from "react";
import "./LoginAttemptList.css";

const LoginAttempt = (props) => <li {...props}>{props.children}</li>;

const LoginAttemptList = (props) => (
	<div className="Attempt-List-Main">
	 	<p>Recent activity</p>
	  	<input type="input" placeholder="Filter..." />
		<ul className="Attempt-List">
			{
				props.attempts && props.attempts.length > 0 &&				
					(
					props.attempts.map((user, index) => {
					return (
					  <LoginAttempt  key={index}>
				     	  attemps: {props.attempts.length -index} <br />
						  user:  {user.login} <br />
						  password: {user.password}
					    
					   </LoginAttempt>)
					})
					)
				
			}
				
		</ul>
	</div>
);

export default LoginAttemptList;
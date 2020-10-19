import React, { useState } from 'react';
// import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';

const Signin = () => {
	
	const [form, setState] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	// const [message, setMessage] = useState();
	const history = useHistory();
	// const [fireRedirect, setFireRedirect] = useState(false);
	
	const handleInputChange = (e) => {
		setState({
			...form,
			[e.target.name]: e.target.value
		});
	};

	const formSubmit= async (e)=> {
		e.preventDefault();
		// setMessage({
		// 	data: "Login in progress",
		// 	type: 'alert-warning',
		// });
		let userForm = { 
						email: form.email, 
						password:form.password 
	   	};

		let reqOptions = {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			body: JSON.stringify(userForm)
		};

		const response = await fetch('http://localhost:7000/auth/signin', reqOptions);
		const json = await response.json();

		if(response.status !== 401 && response.status !== 500){
			localStorage.setItem('auth-token', json.token);
			history.push("/dashboard");
			// setFireRedirect({fireRedirect: true,  userProfile: json.token})
		}
		console.log(json)
	}
	
	const togImage=()=>{
		setShowPassword(showPassword ? false : true )
	}

	// const fxnRedirect=()=>{
	// 	if(fireRedirect){
	// 		return (
	// 			<Redirect to={{
	// 				pathname: '/dashboard',
	// 				// state: { userProfile: userProfile }
	// 			}} />
	// 		)
	// 	}
	// }

	return (
		<React.Fragment>
		
			<div className="container mt-4">
				<div className="row">
					<div className="col-xs-12 col-sm-12 col-md-6 justify-content-center pb-3 login-col">
						<div className="card border-none shadow-lg pt-1 pb-1 mx-auto mt-5 login-card">
							<div className="card-body mx-auto login-card-body">
							<form className="form" onSubmit={formSubmit}>
									<h5 className="text-center"><strong>Login your Account</strong></h5>
									<p className="small text-info text-center"><em>You can sign into your account here</em></p>
									<span className="small text-success text-center" id="messenger"></span>
									<div className="form-group">
										<input type="email" name="email" onChange={handleInputChange} placeholder="Enter Your Email here.." className="form-control" id="mymail" required />
										<span id="mailmessage"></span>
									</div>
									<div className="input-group">
										<input type={showPassword ? "text" : "password"} name="password" id="myinput" className="form-control" onChange={handleInputChange} placeholder="Your Password" />
										<div className="input-group-append">
											<span onClick={togImage} className="input-group-text">
												<img src={showPassword ? require('./assets/images/icons/eye.png') : require('./assets/images/icons/eyeclose.png')} alt='sign password' id='imgmi' width='25px'/>
											</span>
										</div>
									</div>

									<button type="submit" className="btn btn-info form-control shadow">Sign In</button>
                                    <p className="small mt-2">Not yet registered? <Link to="/signup">to Register</Link></p>
								</form>
							</div>
						</div>			
					</div>
					<div className="col-md-6 p-5">
						<div className="w-75 ml-4 mt-4">
							<img src={require('./assets/images/svgs/new_sign_in.svg')} alt="login" className="img-fluid shadow" />
						</div>
					</div>
				</div>
			</div>
        </React.Fragment>
    );
}
export default Signin;
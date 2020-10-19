import React, { useState } from 'react';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import './assets/css/index.css';

const SignUp = (props) => {

	const [form, setState] = useState(null);
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError ] = useState(null);
	const [data, setData ] = useState(null);

	const handleInputChange = (e) => {
		setState({
			...form,
			[e.target.name]: e.target.value
		});
	};
	
	const formSubmit= async(e)=> {
		e.preventDefault();
		let userForm = {
						 userName:form.userName, 
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

		const response = await fetch('http://localhost:7000/auth/signup', reqOptions)
        const json = await response.json();
		
		// console.log(json)
		setMessage({ message: json})
		
	}

	const togImage=()=>{
		setShowPassword(showPassword ? false : true); 
	}

	return (
		<React.Fragment>
			<div className="container mt-3">
				<div className="row pt-4">
					<div className="col-xs-12 col-sm-12 col-md-6 justify-content-center pb-3 signup-col">
						<div className="card border-none shadow-lg pt-1 pb-1 mx-auto signup-card">
							<div className="card-body mx-auto signup-card-body">
								<form className="form" onSubmit={formSubmit}>
									<h5 className="text-center"><strong>Register New Account</strong></h5>
									<p className="small text-center">It's extremely easy and quick</p>
									<span className="small text-success text-center"></span>
									<div className="form-group">
										<input type="text" name="userName" onChange={handleInputChange} className="form-control" placeholder="Enter your Username..." id="username" />
									</div>
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
									
									<small className="mb-2 signup-small">By clicking Register, You agree to our terms and Policy. You may receive notifications and opt out any time.</small>
									<button type="submit" className="btn btn-secondary form-control m-1">Register</button>
									<p className="small mt-2">Are you a registered user? <Link to="/login">Login here</Link></p>
								</form>
							</div>
						</div>			
					</div>
					<div className="col-md-6 p-5">
						<div className="w-75">
							<img src={require('./assets/images/svgs/new_my_app.svg')} alt="signup svg" className="img-fluid" />
						</div>
					</div>
				</div>
			</div>
			{/* <div className="container-fluid">
				<div className="row">
					<div className="col-md-5 col-sm-7 mx-auto mt-3">
						<div className="card shadow text-center pt-3">
							<h4>Register Here</h4>
							<div className="card-body">
								<form className="form" onSubmit={formSubmit}>
									
                                    <div className="form-group">
                                        <input type="text" name="fullName" placeholder="Full Name..." className="form-control" onChange={handleInputChange}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="userName" placeholder="Username..." className="form-control" onChange={handleInputChange}/>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" placeholder="Your Email..." className="form-control" onChange={handleInputChange}/>
                                    </div>
                            
                                    <div className="form-group">
                                        <input type="password" name="password" placeholder="Your Password..." className="form-control" onChange={handleInputChange} />
                                    </div>
                                    <button type="submit" className="btn btn-info form-control">Register</button>
                                    <p className="small mt-2">Are you a registered user? <Link to="/login">Login here</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </React.Fragment>
    );
}
export default SignUp;

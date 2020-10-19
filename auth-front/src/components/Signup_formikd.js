import React, { useState } from 'react';
// import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

const validationSchema = Yup.object().shape({
	userName: Yup.string().min(2, 'Username is too Short!')
			.max(50, 'Username is too Long!').required('Your username is Required...'),
	email: Yup.string().email('This is Invalid email').required('Email is Required...'),
	password: Yup.string().min(5, 'Password is too Short!').required('Your password Required...'),
});
	  
const SignUp = () => {
	const [showPassword, setShowPassword] = useState(false);
	 // const [authError, setAuthError] = useState(null)
	  // console.log('authError: ', authError)
	const history = useHistory();

	async function authUser(values, setFieldError) {
		// const { userName, email, password } = values;
		let userForm = {
			userName: values.userName,
			email:values.email,
			password:values.password
		}
		let reqOptions = {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			body: JSON.stringify(userForm)
		};
		try {
			const response = await fetch ('http://localhost:7000/auth/signup', reqOptions)
			if(response.status !== 401 && response.status !== 500){
				const json = await response.json()
				setFieldError("myErrorFieldName", json.message)
                history.push("/login");
            }
		} catch (error){
			console.log('Authentication error: ', error)
			 // setAuthError(error.message)
			setFieldError("myErrorFieldName", error.message)
		}
	}

	const togImage=()=>{
		setShowPassword(showPassword ? false : true); 
	}
	const initialValues = { userName: '', email: '', password:'' };
	return (   
		// <React.Fragment>                                                                                                                                                                                                              		<React.Fragment>
			<div className="container mt-3">
				<div className="row pt-4">
					<div className="col-xs-12 col-sm-12 col-md-6 justify-content-center pb-3 signup-col">
						<div className="card border-none shadow-lg pt-1 pb-1 mx-auto signup-card">
							<div className="card-body mx-auto signup-card-body">
								<h5 className="text-center"><strong>Register New Account</strong></h5>
								<p className="small text-center">It's extremely easy and quick</p>
								<Formik
									initialValues={initialValues}
									validationSchema={validationSchema}
									onSubmit={async (
									values,
									{ authError, setError, setErrors, setSubmitting, resetForm, setFieldError }
									) => {
									setSubmitting(true)
									authUser(values, setFieldError) // <-------------------
									setSubmitting(false)
									resetForm()
									}}
								>
								
								{({ errors, touched, isSubmitting, isValid }) => (
								
									<Form className="form">
										{ errors.myErrorFieldName &&  <div className="alert alert-danger">
										{errors.myErrorFieldName}</div> }
										<div className="form-group">
											<Field type="text" name="userName" className="form-control" placeholder="Your Username"/>
											{/* If this Field has been touched, and it contains an error, display it
											*/}
											{touched.userName && errors.userName &&
											 <p className="small text-danger">{errors.userName}</p>}
										</div>
										{/* <ErrorMessage name="userName" /> 
										{touched.email && error.email ? <div>{error.email}</div> : null} */}
										<div className="form-group">
											<Field type="email" name="email" className="form-control" placeholder="Your Email"/>
											{/* If this Field has been touched, and it contains an error, display
											it */}
											{touched.email && errors.email &&
											 <p className="small text-danger">{errors.email}</p>}
										</div>
										<div className="input-group">
											<Field type={showPassword ? "text" : "password"} name="password" className="form-control" id="myinput" placeholder="Your Password" />
											<div className="input-group-append">
												<span onClick={togImage} className="input-group-text">
													<img src={showPassword ? require('./assets/images/icons/eye.png') : require('./assets/images/icons/eyeclose.png')} alt='sign password' id='imgmi' width='25px'/>
												</span>
											</div>
											{/* If this Field has been touched, and it contains an error, display
											it */}
										</div>
										{touched.password && errors.password && <p className="small text-danger">{errors.password}</p>}
										{/* <button disabled={ isValid || isSubmitting} className="btn btn-block btn-success" type="submit">
											Submit
										</button> */}
											{/* <ErrorMessage component="div" name="myErrorFieldName"/> */}
										<div className="form-group mt-2">
										{( touched.userName&&touched.email&&touched.password && Object.entries(errors).length=== 0 ) ? (
											<button type="submit" className="btn btn-block btn-secondary">Register</button>
											) : (
											<button type="submit" className="btn btn-block btn-secondary" disabled>Register</button>
											)
										}
											<p className="small">Are you a registered user? <Link to="/Login">Login here</Link></p>											
										</div>
									</Form>
								)}
								</Formik>
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
		// </React.Fragment>
	);
}

export default SignUp;
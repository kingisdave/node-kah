import React from 'react';
// import axios from 'axios';
import { Formik } from "formik";
// import * as EmailValidator from "email-validator"; // used when validating with a self-implemented approach
import * as Yup from "yup"; // used when validating with a pre-built solution
import { useHistory, Link } from 'react-router-dom';
import './assets/css/styles.css';



// const ValidatedLoginForm = () => {

	// const [form, setState] = useState(null);
	// const [showPassword, setShowPassword] = useState(false);
	// const [error, setError ] = useState(null);
	// const [data, setData ] = useState(null);

	// const handleInputChange = (e) => {
	// 	setState({
	// 		...form,
	// 		[e.target.name]: e.target.value
	// 	});
	// };
	
	// const formSubmit= useCallback(() => {
	// 	e.preventDefault();
	// 	let userForm = {
	// 					 userName:form.userName, 
	// 					 email: form.email, 
	// 					 password:form.password 
	// 				};
	// 	let reqOptions = {
	// 		method: 'POST',
	// 		headers: new Headers({
	// 			'Content-Type': 'application/json'
	// 		}),
	// 		body: JSON.stringify(userForm)
	// 	};
	// 	axios.post('http://localhost:7000/auth/signup', reqOptions)
	// 	.then((response) => {
	// 		setData(response);
	// 	})
	// 	.catch((err) => setError(err))

	// })
	// useEffect(() => {
	// 	formSubmit();
	// }, [])


		// const response = await fetch('http://localhost:7000/auth/signup', reqOptions)
        // const json = await response.json();
		
		// console.log(json)
		// setMessage({ message: json})
		
	// }

	const validationSchema= Yup.object().shape({
		userName: Yup.string().required("Username is Required")
			.min(3, "Username must be atleast 3 letters."),
		email: Yup.string().email().required("Email is Required"),
		password: Yup.string()
		  .required("No password provided.")
		  .min(8, "Password is too short - should be 8 chars minimum.")
		  .matches(/(?=.*[0-9])/, "Password must contain a number.")
	});

const SignUp = () =>{
	// const [showPassword, setShowPassword] = useState(false);
	const history = useHistory()

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
			const json = await response.json()
			if(response.status !== 401 && response.status !== 500){
				setFieldError("myErrorFieldName", json.message)
                history.push("/login");
                // setFireRedirect({fireRedirect: true,  userProfile: json.token})
			} else {
				setFieldError("myErrorFieldName", json.message)
			}
		} catch (error){
			console.log('Authentication error: ', error)
			 // setAuthError(error.message)
			setFieldError("myErrorFieldName", error.message)
		}
	}

	// const togImage=()=>{
	// 	setShowPassword(showPassword ? false : true); 
	// }
	const initialValues = { userName: '', email: '', password:'' };

	return (
		<React.Fragment>
	 		<div className="container mt-3">
	 			<div className="row pt-4">
	 				<div className="col-xs-12 col-sm-12 col-md-6 justify-content-center pb-3 signup-col">
	 					<div className="card border-none shadow-lg pt-1 pb-1 mx-auto signup-card">
	 						<div className="card-body mx-auto signup-card-body">
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
								{props => {
									const { values, touched, errors,
										handleChange, handleBlur, handleSubmit 
									} = props;
							return (
								<form onSubmit={handleSubmit}>
									<h5 className="text-center"><strong>Register New Account</strong></h5>
									<p className="small text-center">It's extremely easy and quick</p>
										
									<div className="form-group">
										{/* <label htmlFor="userName">Username</label> */}
										<input id="userName" name="userName" type="text" placeholder="Enter your username"
											value={values.userName} onChange={handleChange} onBlur={handleBlur}
											className={(errors.userName && touched.userName && "error") || (errors.myErrorFieldName && "error")}
										/>
										{errors.userName && touched.userName && (
											<div className="input-feedback">{errors.userName}</div>
										)}
										{errors.myErrorFieldName === "Username Exist" && (
											<div className="input-feedback">{errors.myErrorFieldName}</div>
										)}
									</div>
									<div className="form-group">
										{/* <label htmlFor="email">Email</label> */}
										<input id="email" name="email" type="text" placeholder="Enter your email"
											value={values.email} onChange={handleChange} onBlur={handleBlur}
											className={(errors.email && touched.email && "error") || (errors.myErrorFieldName && "error")}
										/>
										{errors.email && touched.email && (
											<div className="input-feedback">{errors.email}</div>
										)}
										{errors.myErrorFieldName === "Email Exist" && (
											<div className="input-feedback">{errors.myErrorFieldName}</div>
										)}
									</div>
									<div className="form-group">
										{/* <label htmlFor="password">Password</label> */}
										<input id="password" name="password" type="password" placeholder="Enter your password"
											value={values.password} onChange={handleChange} onBlur={handleBlur} 
											className={errors.password && touched.password && "error"}
										/>
										{errors.password && touched.password && (
											<div className="input-feedback">{errors.password}</div>
										)}
									</div>
									{/* <div className="input-group">
										<label htmlFor="password">Password</label>
										<input id="password" name="password" type={showPassword ? "text" : "password"} placeholder="Enter your password"
											value={values.password} onChange={handleChange} onBlur={handleBlur}
											className={errors.password && touched.password && "error"}
										/>
										<div className="input-group-append">
											<span onClick={togImage} className="input-group-text">
												<img src={showPassword ? require('./assets/images/icons/eye.png') : require('./assets/images/icons/eyeclose.png')} alt='sign password' id='imgmi' width='25px'/>
											</span>
										</div>
										{errors.password && touched.password && (
											<div className="input-feedback">{errors.password}</div>
										)}
									</div> */}

									<small className="mb-2 signup-small">By clicking Register, You agree to our terms and Policy. You may receive notifications and opt out any time.</small>
									<button type="submit" className="btn btn-secondary form-control m-1">Register</button>
									<p className="small mt-2">Are you a registered user? <Link to="/login">Login here</Link></p>
								</form>
								);
							}}
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
        </React.Fragment>
    );
}
export default SignUp;

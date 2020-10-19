import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './assets/css/index.css';

const Dashboard = () => {
    const [user, setUser ] = useState(null);
    const [form, setState] = useState(null);
    // const [loading, setLoading] = useState(false);
    // const [newUser, setNewUser] = useState('');
    const history = useHistory();

    const myAuth = async () => {
        let myJsonToken = localStorage.getItem("auth-token");
        let bearer = 'Bearer ' + myJsonToken;
        let requestOptions = {
            method: 'GET',
            credentials: 'include',
            headers: new Headers({
                'authorization': bearer,
                'Content-Type': 'application/json'
            })
        }
        let response = await fetch('http://localhost:7000/app/getUser', requestOptions)
        const json = await response.json();
        if (json.message ==="Unauthorized"){
                history.push("/login");
            } else { 
                setUser(json.username);
        }   
    }
    useEffect(() => {
        myAuth();
    })
    // const fetchData = useCallback(() => {
        //     setLoading(true);

    //     callApi()
    //       .then((fetchedData) => {
    //         setData(fetchedData);
    //         props.onSuccess();
    //       })
    //       .catch((err) => setError(err))
    //       .finally(() => setLoading(false));
    //   }, [props.onSuccess]);
    
    // useEffect(() => {
    //     myAuth();
    // }, []);
    // const handleInputChange = (e) => {
    //     setState({
    //         ...form,
    //         [e.target.name]: e.target.value
    //     });
    // };
    const changeHandler = (e) => {
        setState({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        let userForm = {
            firstName:  form.firstName,
            lastName:   form.lastName,
			userName:   user,
            phone:      form.phone,
            occupation: form.occupation
		};
		let reqOptions = {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			body: JSON.stringify(userForm)
        };
 
		try {
			const response = await fetch ('http://localhost:7000/auth/edit', reqOptions)
            if(response.status !== 401 && response.status !== 500){
			    const json = await response.json();
                // setFieldError("myErrorFieldName", json.message)
                console.log(json, "Success")
			} else {
                // console.log(json, "Wrong")
                // console.log(json)
		        // setFieldError("myErrorFieldName", json.message)
			}
		} catch (error){
            console.log(error);
		// 	console.log('Authentication error: ', error)
		// 	 // setAuthError(error.message)
		// 	setFieldError("myErrorFieldName", error.message)
		}
    }


    return(
        <div className="container-fluid">
            <div className="row">
                {/* Column for the profile name */}
                <div className="col-md-3 col-sm-4 col-12">
                    <div className="card m-1 shadow-lg">
                        <div className="card-body">
                            <div className="row">
                                <h6 className="col-lg-6 col-md-12" id="textCapitalize">{user}</h6>
                                <div className="col-lg-6 col-md-12">
                                    <button className="btn btn-sm btn-outline-secondary m-1" data-toggle="modal" data-target="#myName">Add<span className="ml-1 fa fa-plus"></span></button>
                                </div>
                                {/* Add New Name Modal */}
                                <div className="modal fade" id="myName">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            
                                            {/* Modal body */}
                                            <div className="modal-body">
                                                <form className="form">
                                                    {/* <p id="textCapitalize">{user.}</p> */}
                                                    {/* <div className="form-group">
                                                        <input type="text" className="form-control" value={newUser}/>
                                                    </div> */}
                                                    <button type="submit" className="btn btn-danger"></button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                  
                            <div className="row"> 
                                <h6 className="col-lg-6 col-md-12">Profile</h6>
                                <div className="col-lg-6 col-md-12">
                                    <button className="btn btn-sm btn-outline-secondary m-1" data-toggle="modal" data-target="#profileEdit">Edit<i className="ml-1 fa fa-edit"></i></button>
                                </div>

                                {/* Edit User Profile Modal */}
                                <div className="modal fade" id="profileEdit">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            
                                            {/* Modal body */}
                                            <div className="modal-body">
                                                <form className="form" onSubmit={handleEditSubmit}>
                                                    {/* <div className="form-group files">
                                                        <label>Upload Your Profile Image </label>
                                                        <input type="file" name="picture" className="form-control" multiple="" placeholder="Input Files" onChange={changeHandler} />
                                                    </div> */}
                                                    <div className="form-group row pl-3 pr-3">
                                                        <input type="text" name="firstName" className="form-control col-md-6 col-sm-6" placeholder="First Name" onChange={changeHandler}/>
                                                    {/* </div>
                                                    <div className="form-group"> */}
                                                        <input type="text" name="lastName" className="form-control col-md-6 col-sm-6" placeholder="Last Name" onChange={changeHandler}/>
                                                    </div>

                                                    <div className="form-group">
                                                        <input type="tel" name="phone" className="form-control" placeholder="Phone Number" onChange={changeHandler}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <select name="occupation" placeholder="Your Occupation" onChange={changeHandler} className="form-control">
                                                            <option value="Student">Student</option>
                                                            <option value="Teacher">Teacher</option>
                                                            <option value="Professional">Professional</option>
                                                        </select>                                                    
                                                    </div>
                                                    
                                                    <button type="submit" className="btn btn-success btn-block">Edit Profile</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row"> 
                                <h6 className="col-lg-6 col-md-12">Kahoots</h6>
                                <div className="col-lg-6 col-md-12">
                                    <button className="btn btn-sm btn-outline-secondary m-1" data-toggle="modal" data-target="#addKahoot">Add<i className="ml-1 fa fa-plus"></i></button>
                                </div>

                                {/* Add New Kahoots Modal */}
                                <div className="modal fade" id="addKahoot">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            
                                            {/* Modal body */}
                                            <div className="modal-body">
                                                <form className="form">
                                                    
                                                    <button type="submit" className="btn btn-danger"></button>
                                                </form>
                                            </div>        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card m-1 shadow-lg">
                        <div className="card-body">
                            <h4>Challenges in progress</h4>
                            <div className="card border-0 shadow">
                                <div className="card-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                                    </p>
                                    <button className="btn btn-sm btn-primary shadow">Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card img-fluid m-1 shadow">
                        <img className="card-img-top" src={require('./assets/images/network.jpg')} alt="Network one" />
                    </div>
                </div>
                <div className="col-md-6 col-sm-8 col-12">
                    <div className="card m-1 bd-success">
                        <div className="card-body">
                            {/* <p id="textCapitalize">Welcome, {user}</p> */}
                            <h3>Let's get started: </h3>
                            <div className="row">
                                <div className="col-4 mx-auto">
                                    <img src={require('./assets/images/svgs/arrived.svg')} alt="mysvges" className="rounded-cirlce" width="100"/>
                                    <button className="btn btn-sm shadow">See how it works</button>
                                </div>
                                <div className="col-4 mx-auto">
                                    <img src={require('./assets/images/svgs/arrived.svg')} alt="mysvges" className="rounded-cirlce" width="100"/>
                                    <button className="btn btn-sm shadow">See how it works</button>
                                </div>
                                <div className="col-4 mx-auto">
                                    <img src={require('./assets/images/svgs/arrived.svg')} alt="mysvges" className="rounded-cirlce" width="100"/>
                                    <button className="btn btn-sm shadow">See how it works</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card m-1 shadow">
                        <div className="card-header">
                            Recent News
                        </div>
                        <div className="card-body">
                            <div className="media border-bottom p-3">
                                <img src={require('./assets/images/svgs/connection_online.svg')} alt="Connection online" className="mr-3 mt-3 rounded" width="100" />
                                <div className="media-body">
                                    <h6>John Doetempor incididunt</h6>
                                    <p>Lorem ipsum tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                                </div>
                            </div>
                            <div className="media border-bottom p-3">
                                <img src={require('./assets/images/svgs/connection_online.svg')} alt="Connection online" className="mr-3 mt-3 rounded" width="100" />
                                <div className="media-body">
                                    <h6>John Doetempor incididunt</h6>
                                    <p>Lorem ipsum tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                                </div>
                            </div>
                            <div className="media border-bottom p-3">
                                <img src={require('./assets/images/svgs/connection_online.svg')} alt="Connection online" className="mr-3 mt-3 rounded" width="100" />
                                <div className="media-body">
                                    <h6>John Doetempor incididunt</h6>
                                    <p>Lorem ipsum tempor incididunt ut labore et dolore magna aliqua. Ut enim</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-12">
                    <div className="card border-0 shadow m-1">
                        <div className="card-body">
                            <ul className="nav nav-tabs nav-justified">
                                <li className="nav-item">
                                    <a className="nav-link active" data-toggle="tab" href="#home">My Kahoots</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-toggle="tab" href="#menu1">Team space</a>
                                </li>
                            </ul>
            
                            <div className="tab-content">
                                <div className="tab-pane container active" id="home">
                                    <div className="card bg-secondary shadow border-0 m-1">
                                        <div className="card-body">
                                            <p>Create your Kahoot by clicking here </p>
                                            <a href="/create" className="btn btn-sm btn-primary shadow">Create Kahoot</a>
                                        </div>
                                    </div>
                                    <div className="card img-fluid m-1 shadow">
                                        <img className="card-img-top" src={require('./assets/images/network.jpg')} alt="Network" />
                                    </div>
                                    <div className="card m-1 shadow">
                                        <div className="card-body">

                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane container fade" id="menu1">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;

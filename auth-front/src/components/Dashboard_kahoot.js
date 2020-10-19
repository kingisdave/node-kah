import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './assets/css/index.css';

const Dashboard = () => {
    // const [ user, setUser ] = useState(null);
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
            let response = await fetch('http://localhost:7000/app/getUser', requestOptions);
            const json = await response.json();
            if (json.message==="Unauthorized"){
                history.push("/login");
            } else {
               let myuser = json.username;
               console.log(myuser)
    
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
                                <h6 className="col-lg-6 col-md-12">Decoded_king</h6>
                                <div className="col-lg-6 col-md-12">
                                    <button className="btn btn-sm btn-outline-secondary">Add name <span className="m-1 fa fa-plus"></span></button>
                                </div>
                            </div>                  
                            <div className="row"> 
                                <h6 className="col-lg-6 col-md-12">Profile</h6>
                                <div className="col-lg-6 col-md-12">
                                    <button className="btn btn-sm btn-outline-secondary">Edit <i className="ml-2 fa fa-notepad"></i></button>
                                </div>
                            </div>
                            <div className="row">
                                
                                <h6 className="col-lg-6 col-md-12">Kahoots</h6>
                                <div className="col-lg-6 col-md-12">
                                    <button className="btn btn-sm btn-outline-secondary">Add more <i className="ml-2 fa fa-plus"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card m-1 shadow-lg">
                        <div className="card-body">
                            <h4>Challenges in progress</h4>
                            <div className="card border-0 shadow bg-secondary">
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
                            <p>Welcome, decoded_king</p>
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

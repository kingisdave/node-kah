import React from 'react';
import './assets/css/index.css';
import { Link } from 'react-router-dom';

const Display = () => {

    return (
        <React.Fragment>
            <div className="container-fluid" id='disp'>
                <div className="row">
                    <div className="col-12 text-center text-white mt-5">
                        <div className="row" id='indexrow'>
                            <div className="col-10 mx-auto">
                                <h2 className="mt-2 mb-3">Provides Expert Services</h2>
                                <h4 className="mb-3">Join our list of Distinguished Clients</h4>
                                <h6>Join now experience an excellent project</h6>
                                <button type="button" className="text-white mt-3" id="mybtn"><Link to="/register" className="text-white">Click to Join</Link></button>	
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row mx-auto cat">
                    <div className="col-12">
                        <h3 className="text-center text-lead">Categories</h3>
                    </div>
                    <div className="row m-2">
                        <div className="col-lg-4 col-md-4 col-12 shadow p-1 mb-3 category">
                            <div className="row">
                                <div className="col-3">
                                    <i className="h3 fa fa-chalkboard-teacher"></i>
                                </div>
                                <div className="col-9">
                                    <h5 className="text-center">Education</h5>
                                    <p className="text-lead m-2">Engages in Academic Training, Programmes and Workshop</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 shadow p-1 mb-3 category">
                            <div className="row">
                                <div className="col-3">
                                    <i className="h3 fa fa-laptop"></i>
                                </div>
                                <div className="col-9">
                                    <h5 className="text-center">Computer/ICT</h5>
                                    <p className="text-lead m-2">Performs Software, Website Security and development</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 shadow p-1 mb-3 category">
                            <div className="row">
                                <div className="col-3">
                                    <i className="h3 fa fa-network-wired"></i>
                                </div>
                                <div className="col-9">
                                    <h5 className="text-center">Electrical</h5>
                                    <p className="text-lead m-2">Provides Services in Electrical and electronic Engineering</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 shadow p-1 mb-3 category">
                            <div className="row">
                                <div className="col-3">
                                    <i className="h3 fa fa-toolbox"></i>
                                </div>
                                <div className="col-9">
                                    <h5 className="text-center">Mechanical</h5>
                                    <p className="text-lead m-2">Expert in Automobile Engineering</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 shadow p-1 mb-3 category">
                            <div className="row">
                                <div className="col-3">
                                    <i className="h3 fa fa-warehouse"></i>
                                </div>
                                <div className="col-9">
                                    <h5 className="text-center">Housing</h5>
                                    <p className="text-lead m-2">Deals with Estate Management and Surveying</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12 shadow p-1 mb-3 category">
                            <div className="row">
                                <div className="col-3">
                                    <i className="h3 fa fa-certificate"></i>
                                </div>
                                <div className="col-9">
                                    <h5 className="text-center">Consultancy</h5>
                                    <p className="text-lead m-2">We give Expert Advice</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container text-center">
                <div className="row shadow-lg">
                    <h3 className="col-12">About Us</h3>
                    <div className="row p-3">
                        <div className="col-lg-6 col-md-6 col-12 p-1 aboutimg"></div>
                        <div className="col-lg-6 col-md-6 col-12 p-2">
                            <p className="text-center"> Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...
                            </p>
                            <button className="btn readmore text-white"><Link to="/about" className="text-white">Read More</Link></button>
                        </div>
                    </div>
                </div>
            </div>
            
            <hr/>
            <div className="container blog">
                <h3 className="text-center">Blogs</h3>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 shadow">
                        <small>December 12, 2019</small>
                        <h5 className="m-1 text-lead">There is stand-up party for the SQI</h5>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
                        <button className="btn btn-primary"><Link to="/login" className="text-white">Read More</Link></button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 shadow">
                        <small>December 12, 2019</small>
                        <h5 className="m-1 text-lead">There is stand-up party for the SQI</h5>
                        <p> t amet, consectetur adipisicing elit, sed do eiusmod
                            unt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
                        <button className="btn btn-primary"><Link to="/login" className="text-white">Read More</Link></button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 shadow">
                        <small>December 12, 2019</small>
                        <h5 className="m-1 text-lead">There is stand-up party for the SQI</h5>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            iqua. Ut enim ad minim veniam...</p>
                        <button className="btn btn-primary"><Link to="/login" className="text-white">Read More</Link></button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 shadow">
                        <small>December 12, 2019</small>
                        <h5 className="m-1 text-lead">There is stand-up party for the SQI</h5>
                        <p> Lorem ipsu sed do eiusmod tempor incididunt ut labore et dolo
                            re magna alim veniam...</p>
                        <button className="btn btn-primary"><Link to="/login" className="text-white">Read More</Link></button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 shadow">
                        <small>December 12, 2019</small>
                        <h5 className="m-1 text-lead">There is stand-up party for the SQI</h5>
                        <p> Lorem ipsum dolor sit od
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
                        <button className="btn btn-primary"><Link to="/login" className="text-white">Read More</Link></button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 shadow">
                        <small>December 12, 2019</small>
                        <h5 className="m-1 text-lead">There is stand-up party for the SQI</h5>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut...</p>
                        <button className="btn btn-primary"><Link to="/login" className="text-white">Read More</Link></button>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="container">
                <h5>Recents Comments</h5>
                <div className="media border p-3">
                    <img src={require('./assets/images/male.jpg')} alt="male" width="60" className="mr-5 mt-1 rounded adminimg"/>
                    <div className="media-body">
                        <h4 className="mr-2">John Doe <small><i>Sep 29, 2019, 9:12 PM</i></small></h4>
                        <p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="media border p-3">
                    <img src={require('./assets/images/male.jpg')} alt="male" width="60" className="mr-5 mt-1 rounded adminimg"/>
                    <div className="media-body">
                        <h4 className="mr-2">Bo <small><i>Sep 28, 2019, 10:00 PM</i></small></h4>
                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..</p>
                    </div>
                </div>
            </div>
            <div className="w-100 contact">
                <div className="container p-2">
                    <h3 className="text-center">Contact Us</h3>
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <h5>Head Office</h5>
                            <p>No 20, SQI Headquaters, Sqi zone</p>
                            <p>Email: blucola@mail.com</p>
                            <p>Telephone: +23454323454</p>
                        </div>
                        <div className="col-md-6 text-center">
                            <h5>Branch Offices</h5>
                            <p>No 20, SQI branch, Sqi zone</p>
                            <p>Email: blucola@mail.com</p>
                            <p>Telephone: +23454323454</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    );
}

export default Display;
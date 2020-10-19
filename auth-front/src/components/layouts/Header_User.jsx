import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/index.css';

const Navbar = (props) => {
	
	// ComponentDidMount() {
	// 	$(window).scroll(function(){
	// 		$('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
	// 	});
    // }
    {}

    return (
        <nav className="navbar navbar-expand-sm navbar-dark shadow-lg sticky-top mynav">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand h4 text-dark">PROJECT-K</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="collapsibleNavbar">	
                    <ul className="navbar-nav">
                        <li className="nav-item ml-2 mr-3">
                            <Link to="/" className="fa fa-home text-dark">Home</Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link to="/blogs" className="fa fa-blog text-dark">Blogs</Link>
                        </li>
                        <li className="nav-item mr-3">
                            <Link to="/about" className="fa fa-users text-dark">About Us</Link>
                        </li>
                        <li className="nav-item dropdown mr-3">
                            <Link to="/" className="dropdown-toggle fa fa-layer-group text-dark" data-toggle="dropdown">Categories</Link>
                            <div className="dropdown-menu">
                                <Link to="/login" className="dropdown-item text-dark">Computer/ICT</Link>
                                <Link to="/login" className="dropdown-item text-dark">Consultancy</Link>
                            </div>
                        </li>
                       
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item ml-2 mr-3">
                            <Link to="/create" className="btn btn-primary text-white">Create</Link>
                        </li>
                        <li className="nav-item m-1 dropdown">
                            <div className="dropdown-toggle nav-link" data-toggle="dropdown">
                                <span className="h4 fa fa-user-circle mr-1 text-dark">{props.username}</span>
                            </div>
                            <div className="dropdown-menu">
                                <h5 className="dropdown-header">Dashboard</h5>
                                <a href="/dashboard" className="dropdown-item">Profile</a>
                                <a href="/admin/profile-setting" className="dropdown-item">Setting</a>
                                <div className="dropdown-divider"></div>
                                <a href="/admin/privacy" className="dropdown-item">Privacy</a>
                                <a href="/logout" className="dropdown-item">Log Out</a>
                            </div>
                        </li>
                    </ul>
                  
                        {/* <li className="nav-item ml-2 mr-3">
                            <Link to="/create" className="nav-link btn btn-white text-primary">Create</Link>
                        </li>
                        <li className="nav-item m-1 dropdown">
                            <div className="dropdown-toggle nav-link" data-toggle="dropdown">
                                <span className="h4 fa fa-user-circle mr-1"></span>
                            </div>
                            <div className="dropdown-menu">
                                <h5 className="dropdown-header">Dashboard</h5>
                                <a href="/admin/profile" className="dropdown-item">Profile</a>
                                <a href="/admin/profile-setting" className="dropdown-item">Setting</a>
                                <div className="dropdown-divider"></div>
                                <a href="/admin/privacy" className="dropdown-item">Privacy</a>
                                <a href="/login" className="dropdown-item">Log Out</a>
                            </div>
			 			</li>  	 */}
                </div>
            </div>  
        </nav>
    );
}

export default Navbar;
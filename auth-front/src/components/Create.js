import React, { useState } from 'react';
import './assets/css/index.css';
import { Link } from 'react-router-dom';

const Create = (props) => {
    console.log(props);
    // const [question, setQuestion] = useState(null);

    const handleSubmit = async ()=> {
        
    }

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-sm-4 col-xs-12 shadow">
                        <div className="row mt-2 mb-2">
                            <div className="col-1">
                                <h6>1</h6>
                                <i className="fa fa-image"></i>
                            </div>
                            <div className="col-10">
                                <h6>Quiz</h6>
                                <button type="button" className="p-5 bg-white btn btn-lg btn-outline-dark" data-toggle="modal" data-target="#questionModal"></button>
                            </div>
                        </div>
                        <button className="btn btn-primary shadow-lg mx-4 my-1">Add question</button>
                        <button className="btn btn-outline-primary shadow-lg mx-4 my-1">Question bank</button>
                    </div>


                    <div className="col-md-9 col-sm-8 col-12 container">
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control writingInput m-3 shadow border-0" placeholder="Click to start typing your question" />
                            </div>
                            <div className="row p-1">
                                <div className="col-md-5 col-sm-6 col-12">
                                    <div className="row m-1">
                                        <div className="col-5">
                                            <p>Time limit</p>
                                        </div>
                                        <div className="col-7 input-group mb-3">
                                            <input type="text" className="form-control" name="time" placeholder="Time taken..." />
                                            <div className="input-group-append">
                                                <select className="form-control">
                                                    <option>secs</option>
                                                    <option>mins</option>
                                                    <option>hrs</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-5">
                                            <p>Points</p>
                                        </div>
                                        <div className="col-7 input-group mb-3">
                                    
                                            <input type="text" className="form-control" placeholder="Value Ranges..." name="valueRange" id="valueRange" />
                                            <div className="input-group-append">
                                                <span className="input-group-text">Points</span>
                                            </div>
                                    
                                            {/* <label for="customRange">Value: <span>slideRanger</span></label>
                                            <input type="range" value={value} onChange={changeEvent => setValue(changeEvent.target.value)} className="custom-range" min="1" max="1000" value="500" id="customRange" name="pointRange" /> */}
                                        
                                        </div>
                                        <div className="col-5">
                                            <p>Answer options</p>
                                        </div>
                                        <div className="col-7">
                                            <select className="form-control">
                                                <option>Single Select</option>
                                            </select>
                                        </div>
                                    </div>                           
                                </div>
                                <div className="col-md-7 col-sm-6 col-12">
            
                                </div>
                            </div>
                            <div className="row pt-3">
                                <div className="col-md-6 col-12 input-group mb-3 shadow-lg">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text bg-warning">
                                            <span className="fa fa-circle text-white"></span>
                                        </div>
                                    </div>
                                    <input className="form-control answerInput" name="answerOne" id="answerOne" placeholder="Add answer 1"/>
                                </div>
                                <div className="col-md-6 col-12 input-group mb-3 shadow-lg">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text bg-primary">
                                            <span className="fa fa-star text-white"></span>
                                        </div>
                                    </div>
                                    <input className="form-control answerInput" name="answerTwo" id="answerTwo" placeholder="Add answer 2"/>
                                </div>
                                <div className="col-md-6 col-12 input-group mb-3 shadow-lg">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text bg-success">
                                            <span className="fa fa-play text-white"></span>
                                        </div>
                                    </div>
                                    <input className="form-control answerInput" name="answerThree" id="answerThree" placeholder="Add answer 3 (optional)"/>
                                </div>
                                <div className="col-md-6 col-12 input-group mb-3 shadow-lg">
                                    <div className="input-group-prepend">
                                        <div className="input-group-text bg-danger">
                                            <span className="fa fa-square text-white"></span>
                                        </div>
                                    </div>
                                    <input className="form-control answerInput" name="answerFour" id="answerFour" placeholder="Add answer 4 (optional)"/>
                                </div>
                            </div>
                            <div className="clearfix">
                                <button className="float-right px-3 mx-1 btn btn-primary">Done</button>
                                <Link to="/dashboard" className="float-right px-3 mx-1 btn btn-outline-primary">Exit</Link>to="/dashboard" 
                            </div>

                        </form>
                    </div>
                </div>
            
          
                <div className="modal fade" id="questionModal">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            
                            <h4 className="modal-title">Kahoot summary</h4>
            
                            <div className="modal-body">
                                <form className="form container">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="form-group">
                                                <label for="title">Title</label>
                                                <input type="text" className="form-control" name="title" id="title" />
                                            </div>
                                            <div className="form-group">
                                                <label for="descriptn">Description <em>(Optional)</em></label>
                                                <textarea className="form-control" rows="5" name="description" id="descriptn"></textarea>
                                                <small>Pro tip: a good description will help users find your kahoot</small>
                                            </div>
                                        </div>
                                        <div className="col-md-5">
                                            <div className="card img-fluid">
                                                <img className="card-img-top" src={require('./assets/images/sqilogo.jpg')} alt="Card avatar" width="100" />
                                                <div className="card-img-overlay">
                                                
                                                <a href="/" className="btn btn-primary btn-sm">See Profile</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="button" className="btn btn-default shadow m-1">Cancel</button>
                                        <button type="button" className="btn btn-success shadow m-1">Done</button>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Create;
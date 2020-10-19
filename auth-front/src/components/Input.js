import React from 'react';

const Input = (props) => { 
    return (
        <div>
            <div className="form-group">
                <input type={props.type}
                    className='form-control'
                    name={props.name}
                    value={props.value}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    onBlur={props.onBlur} required  
                />
            
                <p>{(props.touched && props.errors) ? (
                    <small>{props.errors}</small>
                    ) : (
                    ""
                    )}
                </p>
            </div>
        </div>
    )
}

export default Input;

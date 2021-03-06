import React, { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';

const Password = (props) => {

    // context Firebase
    const firebase = useContext(FirebaseContext);

    // State login
    const [email, setemail] = useState("");
    const [success, setsuccess] = useState(null);
    const [error, seterror] = useState(null);

    // capture login and check with db
    const handelSubmit = (e) => {
        e.preventDefault();
        firebase.passwordReset(email)
        .then(()=>{
            seterror("");
            setsuccess('Check your email please.');
            setemail("");
            setTimeout(()=>{props.history.push('/')},3000);

        })
        .catch(error=>{
            seterror(error);
            setemail("");
        })
    };

    return (
        <div className="container text-center  bg-dark text-white  mt-5 w-50">
            

            <h4 className="mt-5">Password reset</h4>
            {(error !== null) ? <span className="text-warning">{error.message}</span>:<span className="text-warning">{success}</span>}

            <form onSubmit={handelSubmit}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="email" >Email</label>
                    </div>
                    <input className="form-control" onChange={e => {setemail(e.target.value);seterror('');}} value={email} type="text" autoComplete="off" required />
                </div>
                <div>
                    <Link to='/'>I know my password.</Link>
                </div>
                <button className="btn btn-success m-1" disabled={!email} >Send</button>
            </form>
            
        </div>
    )
}

export default Password

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
        <div>
            {(error !== null) ? <span>{error.message}</span>:<span>{success}</span>}

            <h2>Forgot password</h2>
            <form onSubmit={handelSubmit}>
                <div className="" >
                    <label htmlFor="email" >Login</label>
                    <input onChange={e => setemail(e.target.value)} value={email} type="text" autoComplete="off" required />
                </div>
                <button disabled={!email} >Send</button>
            </form>
            <Link to='/'>I know my password.</Link>
        </div>
    )
}

export default Password

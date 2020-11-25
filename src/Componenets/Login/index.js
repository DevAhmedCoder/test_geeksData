import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../Firebase';

const Login = (props) => {

    // context Firebase
    const firebase = useContext(FirebaseContext);

    // state
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const [btn, setbtn] = useState(false);
    const [error, seterror] = useState('')

    // Button connexion
    useEffect(() => {
        if (password !== "" && email !== "") {
            setbtn(true);
        }
        else if (btn) {
            setbtn(false);
        }
    }, [password, email, btn]);

    // Check with a db Firebase
    const handelSubmit = (e) => {
        e.preventDefault();

        firebase.loginUser(email, password)
            .then(user => {
                setemail('');
                setpassword('');
                props.history.push('/landing');
            })
            .catch(error => {
                seterror(error);
                setemail('');
                setpassword('');
            })

    }

    return (
        <div className="container text-center  bg-dark text-white  mt-5 w-50 ">
            <h3 className="mt-5 p-2">WELCOME TO A.SOUA WEBSITE</h3>
            {error !== "" && <span className="text-warning">{error.message}</span>}
            <form onSubmit={handelSubmit}>

                <div className="input-group mb-3" >
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="email" >Email :</label>
                    </div>
                    <input className="form-control" onChange={e => {setemail(e.target.value);seterror("");}} value={email} type="text" autoComplete="off" required />
                </div>

                <div className="input-group mb-3" >
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="password" >Password : </label>
                    </div>
                    <input className="form-control" onChange={e => setpassword(e.target.value)} value={password} type="password" autoComplete="off" required />
                </div>

                <div>
                    <Link to='/password'>I forget my password or This is my first connexion</Link>
                </div>

                <button className="btn btn-success m-1" disabled={!btn} >Sign in</button>
            </form>

            <p>If your identifier no corresponding, please contact the support [ahmed.soua@outlook.com].</p>

        </div>
    )
}

export default Login

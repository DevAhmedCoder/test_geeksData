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
        <div>

            {error !== "" && <span>{error.message}</span>}

            <h2>Connexion</h2>
            <form onSubmit={handelSubmit}>
                <div className="" >
                    <label htmlFor="email" >Login</label>
                    <input onChange={e => setemail(e.target.value)} value={email} type="text" autoComplete="off" required />
                </div>

                <div className="" >
                    <label htmlFor="password" >Password</label>
                    <input onChange={e => setpassword(e.target.value)} value={password} type="password" autoComplete="off" required />
                </div>

                <div>
                    <Link to='/password'>I forget my password // my first connexion</Link>
                </div>

                {btn ? <button>Connexion</button> : <button disabled >Connexion</button>}
            </form>

        </div>
    )
}

export default Login

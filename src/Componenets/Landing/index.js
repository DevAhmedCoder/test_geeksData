import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Logout from '../Logout';
import { FirebaseContext } from '../Firebase';
import './index.css';
import logo from './logo192.png';



const Landing = (props) => {

    // call db Firebase
    const firebase = useContext(FirebaseContext)

    // state user
    const [userSession, setuserSession] = useState(null);

    // Security page
    useEffect(() => {
        let listener = firebase.auth.onAuthStateChanged(user => {
            user ? setuserSession(user) : props.history.push('/');
        })
        return () => {
            listener();
        }
    }, [])

    return userSession === null ? (
        <p>Please whait...</p>
    ) :
        (
            <div>
                <nav id="navbar" className=" fixed-top navbar navbar-dark bg-dark d-flex justify-content-around">
                    <Link className="text-white text-decoration-none" to="/landing/description">Description</Link>
                    <Logout />
                </nav>
                <div className="container-fluid border about">
                    <div className="row ">
                        <div className="col justify-content-md-center ">
                            <img src={logo} alt="Logo" />
                            <h1>React JS</h1>
                            <br/>
                            <p className="w-50 col-md-auto m-auto" >React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.<br/>
Declarative views make your code more predictable and easier to debug.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
}
export default Landing;
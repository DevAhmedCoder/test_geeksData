import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Logout from '../Logout';
import { FirebaseContext } from '../Firebase';
import About from './about';
import Description from './description';

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
                    <Link className="text-white text-decoration-none" to="/landing/about">About</Link>
                    <Link className="text-white text-decoration-none" to="/landing/description">Description</Link>
                    <Logout />
                </nav>

                <div className="mt-5">
                    <About />
                    <Description />
                </div>



            </div >
        );
}
export default Landing;

import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Logout from '../Logout';
import { FirebaseContext } from '../Firebase';
import './index.css';



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
                    <Link className="text-white text-decoration-none" to="/landing">About</Link>
                    <Logout />
                </nav>
                <div className="container description">
                    <div className="row justify-content-md-cente text-center ">
                        <div className="col col-lg-4">
                            <h3>Declarative</h3>
                            <p>
                                Component-Based
                                Build encapsulated components that manage their own state, then compose them to make complex UIs.

                                Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.

                                Learn Once, Write Anywhere
                            </p>
                        </div>
                        <div className="col col-lg-4">
                            <h3>Component-Based</h3>
                            <p>
                                Build encapsulated components that manage their own state, then compose them to make complex UIs.

                                Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
                            </p>  </div>
                        <div className="col col-lg-4"> <h3>Learn Once, Write Anywhere</h3>
                            <p>
                                We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.

                                React can also render on the server using Node and power mobile apps using React Native.
                            </p>  </div>
                    </div>
                </div>
            </div>
        );
}
export default Landing;
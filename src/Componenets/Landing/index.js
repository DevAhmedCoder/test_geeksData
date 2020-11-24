import React, { useState, useContext, useEffect } from 'react'
import Logout from '../Logout';
import { FirebaseContext } from '../Firebase';

const Landing = (props) => {

    // call db Firebase
    const firebase = useContext(FirebaseContext)

    // state user
    const [userSession, setuserSession] = useState(null);

    // Security page
    useEffect(() => {
        let listener= firebase.auth.onAuthStateChanged(user=>{
            user?setuserSession(user):props.history.push('/');
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
                <header>header</header>
                <Logout />
                <main>Main</main>
                <footer>Footer</footer>
            </div>
        );
}
export default Landing;

import React, { useState, useEffect,useContext } from 'react';
import {FirebaseContext} from '../Firebase';

const Logout = () => {

    // Call Firebase
    const firebase = useContext(FirebaseContext);

    // check button Logout
    const [checked, setchecked] = useState(false);

    // Link with db
    useEffect(() => {
        (checked)&&firebase.signoutUser(); 
    }, [checked, firebase])

    return (
        <div>
            <label>Logout</label>
            <input onChange={(e)=>{setchecked(e.target.checked)}} type="checkbox" checked={checked} />
        </div>
    )
}

export default Logout

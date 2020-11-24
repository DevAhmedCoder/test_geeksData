import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../Firebase';

const Logout = () => {

    // Call Firebase
    const firebase = useContext(FirebaseContext);

    // check button Logout
    const [checked, setchecked] = useState(false);

    // Link with db
    useEffect(() => {
        (checked) && firebase.signoutUser();
    }, [checked, firebase])

    return (
        <div  className="btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-danger active">
                <input onChange={(e) => { setchecked(e.target.checked) }} type="checkbox" checked={checked} />
                Logout</label>

        </div>
    )
}

export default Logout

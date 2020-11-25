import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="text-center mt-5">
            <h1>404!</h1>
            <Link to='/'><h3>Sign in please</h3></Link>
        </div>
    )
}

export default ErrorPage

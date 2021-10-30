import React from 'react';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import './Login.css'

const Login = (props) => {
    const{loginWithGoogle}=useAuth();
    return (
        <div className="login-bg">
            <button onClick={loginWithGoogle} className="login-button">Login With Google</button>
        </div>
    );
};

export default Login;
import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { refreshTokenSetup } from '../utils/refreshToken';


function Login() {

    const [showloginButton, setShowloginButton] = useState(true);
    const [showlogoutButton, setShowlogoutButton] = useState(false);
    

    
    const [name,setName] = useState("");
    
    const onLoginSuccess = (res) => { 
        console.log('Login Success:', res.profileObj);
        setName("Welcome, "+res.profileObj.givenName);
       
        setShowloginButton(false);
        setShowlogoutButton(true);
        
        refreshTokenSetup(res);     
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        console.clear();
        setName("")
        setShowloginButton(true);
        setShowlogoutButton(false);
    };

    return (
        <div className = "App"> 
            <p>{name}</p>
            { showloginButton ?
                <GoogleLogin
                    clientId={process.env.REACT_APP_CLIENT_ID}
                    buttonText="Sign In with Google"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={process.env.REACT_APP_CLIENT_ID}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
        
    );
}
export default Login;

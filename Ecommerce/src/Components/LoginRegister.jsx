import React, { useContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../config/firebase';
import { useNavigate } from 'react-router-dom';
import { commonContext } from '../ContextAPI/Context';

export default function LoginRegister() {


    const provider = new GoogleAuthProvider();

    const [registerLoading, setRegisterLoading] = useState('Register');

    const [loginLoading, setLoginLoading] = useState('Login');

    const [googleLoading, setGoogleLoading] = useState('Login With Google');

    const navigate = useNavigate();

    const { isLogin, setIsLogin } = useContext(commonContext);

    useEffect(() => {
        if (isLogin) {
            navigate('/');
        }
    }, [])



    const register = (event) => {
        event.preventDefault();
        setRegisterLoading('Loading...');

        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, event.target.email.value, event.target.password.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                setRegisterLoading('Register');
                localStorage.setItem('user_uid', user.uid);
                navigate('/');
                setIsLogin(user.uid);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setRegisterLoading('Register');
                // ..
            });
    }

    const login = (event) => {
        event.preventDefault();
        setLoginLoading('Loading...');

        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, event.target.email.value, event.target.password.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                setLoginLoading('Login');
                localStorage.setItem('user_uid', user.uid);
                navigate('/');
                setIsLogin(user.uid);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setLoginLoading('Login');
                // ..
            });
    }


    const googleLogin = () => {
        setGoogleLoading('Loading...');
        const auth = getAuth(app);
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                setGoogleLoading('Login With Google');
                localStorage.setItem('user_uid', user.uid);
                navigate('/');
                setIsLogin(user.uid);
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                setGoogleLoading('Login With Google');
                // ...
            });
    }
    return (
        <>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6 p-5'>
                            <div>
                                <h1>Login</h1>
                            </div>
                            <div className='border p-5 rounded-3 bg-white'>
                                <form onSubmit={login}>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" name="password" />
                                    </div>
                                    <button type="submit" class="btn btn-primary">{loginLoading}</button>
                                </form>
                            </div>
                        </div>
                        <div className='col-md-6 p-5'>
                            <div>
                                <h1>Register</h1>
                            </div>
                            <div className='border p-5 rounded-3 bg-white'>
                                <form onSubmit={register}>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" name="password" />
                                    </div>
                                    <button type="submit" class="btn btn-primary">{registerLoading}</button>
                                    <button type='button' class="btn btn-primary ms-3" onClick={googleLogin}>{googleLoading}</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

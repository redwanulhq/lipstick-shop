import React, { useState } from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const [error, setError] = useState("");
    const { signInUsingGoogle, setUser, setIsLoading, auth } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const redirectURI = location.state?.from || "/";

    const handleGoogleLogin = () => {
        setIsLoading(true);
        signInUsingGoogle()
            .then((result) => {
                setUser(result.user);
                navigate(redirectURI);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);
    return (
        <div className="login">
            <div className="container">
                <div className="login-grid">
                    <div className="login-form-container">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                type="text"
                                placeholder="email"
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            />
                            <input
                                type="password"
                                placeholder="password"
                                {...register("password", { required: true })}
                            />

                            <input type="submit" />
                            <h2 className="login-form-devider">OR</h2>
                            <button onClick={handleGoogleLogin}>
                                <FcGoogle /> <span>Sign in with google</span>
                            </button>
                            <p className="form-footer-text">
                                Don't have account?<Link to="/register">register</Link>
                            </p>
                        </form>
                    </div>
                    <div className="login-thumb">
                        <img src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

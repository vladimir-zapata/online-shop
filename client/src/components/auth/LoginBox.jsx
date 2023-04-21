import { useRef } from "react";
import { PeopleFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { useDispatch } from 'react-redux';
import { login } from '../../redux/authSlice';

const LoginBox = ({ handler, styles }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const emailRef = useRef();
    const passwordRef = useRef();

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await fetch(`${import.meta.env.VITE_BASE_API}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: emailRef.current.value,
                password: passwordRef.current.value,
            }),
        });

        if (res.status === 200) {
            const result = await res.json();
            dispatch(login(result.token));
            navigate("/");
            return;
        }

        if (res.status === 400) {
            return Swal.fire("Oops!", "Wrong email or password", "error");
        } else {
            return Swal.fire("Oops!", "Something went wrong.", "error");
        }
    };

    return (
        <div className={`${styles.login_box} p-5`}>
            <PeopleFill color="black" size={42} />
            <h3>Log In</h3>
            <form onSubmit={handleLogin} className="mt-2 w-100">
                <div className="w-100">
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                        ref={emailRef}
                        id="email"
                        className="my-1 w-100"
                        type="email"
                    />
                </div>
                <div className="w-100">
                    <label htmlFor="password">Password</label>
                    <br />
                    <input
                        ref={passwordRef}
                        autoComplete="true"
                        id="password"
                        className="my-2 w-100"
                        type="password"
                    />
                </div>
                <br />
                <button className="btn btn-danger w-100">Log In</button>
            </form>
            <p className="m-0 pt-3 text-center fw-bold">
                Don't have an account?
            </p>
            <button onClick={handler} className="btn d-block mx-auto">
                Register
            </button>
        </div>
    );
};

export default LoginBox;

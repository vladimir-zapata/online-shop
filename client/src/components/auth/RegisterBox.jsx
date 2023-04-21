import { useRef } from "react";

import Swal from "sweetalert2";

const RegisterBox = ({ handler, styles }) => {
    const fullName = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleRegister = async (e) => {
        e.preventDefault();

        const res = await fetch(
            `${import.meta.env.VITE_BASE_API}/auth/register`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fullName: fullName.current.value,
                    email: emailRef.current.value,
                    password: passwordRef.current.value,
                }),
            }
        );

        if (res.ok) {
            return Swal.fire("Welcome", "You can know log in", "success").then(
                () => {
                    window.location.href="/login"
                }
            );
        }

        if (res.status === 400) {
            return Swal.fire("Oops!", "User already registered", "error");
        } else {
            return Swal.fire("Oops!", "Something went wrong.", "error");
        }
    };

    return (
        <div className={`${styles.login_box} p-5`}>
            <h3>Register</h3>
            <form onSubmit={handleRegister} className="mt-2 w-100">
                <div className="w-100">
                    <label htmlFor="email">Full Name</label>
                    <br />
                    <input
                        ref={fullName}
                        id="email"
                        className="my-1 w-100"
                        type="text"
                    />
                </div>
                <div className="w-100">
                    <label htmlFor="registerEmail">Email</label>
                    <br />
                    <input
                        ref={emailRef}
                        id="registerEmail"
                        className="my-2 w-100"
                        type="email"
                    />
                </div>
                <div className="w-100">
                    <label htmlFor="password">Password</label>
                    <br />
                    <input
                        autoComplete="true"
                        ref={passwordRef}
                        id="password"
                        className="my-2 w-100"
                        type="password"
                    />
                </div>
                <br />
                <button className="btn btn-danger w-100">Register</button>
            </form>
            <p className="m-0 pt-3 text-center fw-bold">Have an account?</p>
            <button onClick={handler} className="btn d-block mx-auto">
                Log In
            </button>
        </div>
    );
};

export default RegisterBox;

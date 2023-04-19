import { PeopleFill } from "react-bootstrap-icons";

const RegisterBox = ({ handler, styles }) => {
  return (
    <div className={`${styles.login_box} p-5`}>
      <h3>Register</h3>
      <form className="mt-2 w-100">
        <div className="w-100">
          <label htmlFor="email">Full Name</label>
          <br />
          <input id="email" className="my-1 w-100" type="text" />
        </div>
        <div className="w-100">
          <label htmlFor="email">Email</label>
          <br />
          <input id="email" className="my-2 w-100" type="email" />
        </div>
        <div className="w-100">
          <label htmlFor="password">Password</label>
          <br />
          <input id="password" className="my-2 w-100" type="password" />
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

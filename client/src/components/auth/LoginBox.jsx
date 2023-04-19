import { Link } from "react-router-dom";

import { PeopleFill } from "react-bootstrap-icons";

const LoginBox = ({ handler, styles }) => {
  return (
    <div className={`${styles.login_box} p-5`}>
      <PeopleFill color="black" size={42} />
      <h3>Log In</h3>
      <form className="mt-2 w-100">
        <div className="w-100">
          <label htmlFor="email">Email</label>
          <br />
          <input id="email" className="my-1 w-100" type="email" />
        </div>
        <div className="w-100">
          <label htmlFor="password">Password</label>
          <br />
          <input id="password" className="my-2 w-100" type="password" />
        </div>
        <br />
        <button className="btn btn-danger w-100">Log In</button>
      </form>
      <p className="m-0 pt-3 text-center fw-bold">Don't have an account?</p>
      <button onClick={handler} className="btn d-block mx-auto">
        Register
      </button>
    </div>
  );
};

export default LoginBox;

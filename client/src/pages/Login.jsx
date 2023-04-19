import { PeopleFill } from "react-bootstrap-icons";

import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div
      className={`d-flex justify-content-center align-items-center container py-5 ${styles.login_container}`}
    >
      <div className={`${styles.login_box} p-5`}>
        <PeopleFill className="my-2" color="black" size={42} />
        <h3>Log In</h3>
        <br />
        <div className="w-100">
          <label htmlFor="email">Email</label>
          <br />
          <input id="email" className="my-2 w-100" type="text" />
        </div>
        <div className="w-100">
          <label htmlFor="password">Password</label>
          <br />
          <input id="password" className="my-2 w-100" type="password" />
        </div>
        <br />
        <button className="btn btn-danger w-100">Log In</button>
      </div>
      <div className={styles.shape} />
    </div>
  );
};

export default Login;

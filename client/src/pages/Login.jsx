import { useState } from "react";

import LoginBox from "../components/auth/LoginBox";
import RegisterBox from "../components/auth/RegisterBox";

import styles from "./Login.module.scss";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div
      className={`d-flex justify-content-center align-items-center container py-5 ${styles.login_container}`}
    >
      {isLogin ? (
        <LoginBox handler={handleLogin} styles={styles} />
      ) : (
        <RegisterBox handler={handleLogin} styles={styles} />
      )}

      <div className={styles.shape} />
    </div>
  );
};

export default Login;

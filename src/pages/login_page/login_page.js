import React from "react";
import { useHistory } from "react-router-dom";
import Login from "../../components/login/login";
const Login_page = () => {
  const history = useHistory();
  const loginValues = values => {
    console.log(values);
    history.push("/");
  };
  return (
    <div>
      <Login loginValuesToLoginPage={loginValues} />
    </div>
  );
};
export default Login_page;

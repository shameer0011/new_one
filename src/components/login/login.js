import React from "react";
import LoginForm from "../login_forms/login_forms";
const login = ({ loginValuesToLoginPage }) => {
  const datas = values => {
    loginValuesToLoginPage(values);
  };
  return (
    <div>
      <LoginForm onSubmits={datas} />
    </div>
  );
};
export default login;

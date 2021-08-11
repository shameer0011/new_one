import React from "react";
import Form from "../form/form";

const Register = ({ name, formValuesToTabs }) => {
  const datas = values => {
    formValuesToTabs(values);
  };
  return (
    <div>
      <Form onSubmits={datas} name={name} />
    </div>
  );
};
export default Register;

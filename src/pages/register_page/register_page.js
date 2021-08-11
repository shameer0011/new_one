import React from "react";
import { useHistory } from "react-router-dom";

const Register_page = () => {
  const history = useHistory();
  const formDatas = values => {
    console.log(values, "values");
    history.push("/login");
  };

  return (
    <div>
      {/* <Register name="Create your fan account" />
      // formDatasToRegisterPage={formDatas} */}
    </div>
  );
};
export default Register_page;

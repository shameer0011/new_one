import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Completed from "../pages/completed/completed";
import Dashbord from "../pages/dashbord/dashbord";
import LoginPage from "../pages/login_page/login_page";
import RegisterPage from "../pages/register_page/register_page";
import Tabses from "../pages/tabs/tabs";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" component={Tabses} exact={true} />
          <Route path="/register" component={RegisterPage} exact={true} />
          <Route path="/login" component={LoginPage} exact={true} />
          {/* <Route path="/home" component={Home} exact={true} /> */}
          <Route path="/" component={Dashbord} exact={true} />
          <Route path="/completed" component={Completed} exact={true} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};
export default AppRouter;

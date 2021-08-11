import React, { useEffect,useState } from "react";
import { BrowserRouter, Route, Switch, useHistory,Redirect } from "react-router-dom";
import Header from "../../components/header/header";
import Home from "../home/home";
import Completed from "../completed/completed";
import Logout from "../logout/logout";
const Dashbord = () => {
  const history = useHistory();
  const [redirect ,setRedirect]=useState(false);

  const gotoDashbord =()=>{
    console.log("in dashbord logout button")
    sessionStorage.clear();
    history.push('/login', document.title, window.location);
    window.addEventListener('popstate', function (event)
    {
      history.push('/login', document.title, window.location);
    });
  }
  let routes = (
    <BrowserRouter>
      <div>
        <Header
        gotoDashbord={gotoDashbord}
         />
      </div>
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/completed" component={Completed} exact={true} />
        <Route path="/logout" component={Logout} exact={true} />
      </Switch>
    </BrowserRouter>
  );

  return (
    <>
      <div>
        {routes}
      </div>
    </>
  );
};
export default Dashbord;

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={process.env.PUBLIC_URL +"/"} component={StorePicker} />
{/*Pass store ID as a query parameter, accessible within props.match*/}
      <Route path={process.env.PUBLIC_URL+"/store/:storeId"} component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;

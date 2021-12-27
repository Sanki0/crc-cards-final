import React, { Suspense } from 'react';
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import { NotFound } from './404';
import { CRC } from './scripts/CRC'
import { Feedback } from './Feedback'
import { Projects } from './scripts/Projects';

//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route exact path="/register" component={Auth(RegisterPage, false)} />
            <Route exact path="/projects" component={Auth(Projects, true)} />
            <Route exact path="/crc" component={Auth(CRC, true)} />
            <Route exact path="/feedback" component={Auth(Feedback, true)} />
            <Route path="/404" component={Auth(NotFound, null)} />
          </Switch>
        </BrowserRouter>

      </div>
      <Footer />
    </Suspense>
  );
}

export default App;

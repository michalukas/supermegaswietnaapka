// @flow

import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import ForgotPassword from '../pages/ForgotPassword'
import GamersBrowser from '../pages/GamersBrowser'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import MyGames from '../pages/MyGames'
import ResetPassword from '../pages/ResetPassword'
import Header from '../components/Header'

class RouterLinks extends React.Component<propType, void> {
  render() {
    return (
      <div className="layout">
        <Router>
          <React.Fragment>
            <Header />
            <main>
              <Route exact path="/" component={Home} />
              <Route path="/rejestracja" component={SignUp} />
              <Route path="/logowanie" component={SignIn} />
              <Route path="/przypomnienie_hasla" component={ForgotPassword} />
              <Route path="/resetowanie_hasla" component={ResetPassword} />
              <Route path="/wyszukiwarka_graczy" component={GamersBrowser} />
              <Route path="/moje_gry" component={MyGames} />
            </main>
            <footer className="footer">
            </footer>
          </React.Fragment>
        </Router>
        <style jsx>{`
          .layout {
            width: 100%;
          }
          main {
            height: 100%;
          }
          .footer {
            background: #0e1021;
            width: 100%;
            height: 5em;
            bottom: 0;
            position: absolute;
          }
        `}</style>
      </div>
    )
  }
}
export default RouterLinks
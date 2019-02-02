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
import Footer from '../components/Footer'

class RouterLinks extends React.Component<propType, void> {
  render() {
    return (
      <Router>
          <React.Fragment>
            <div className="layout">
            <Header />
            <main>
              <Route exact path="/" component={Home} />
              <Route path="/rejestracja" component={SignUp} />
              <Route path="/strona_domowa" component={Home} />
              <Route path="/logowanie" component={SignIn} />
              <Route path="/przypomnienie_hasla" component={ForgotPassword} />
              <Route path="/resetowanie_hasla" component={ResetPassword} />
              <Route path="/wyszukiwarka_graczy" component={GamersBrowser} />
              <Route path="/moje_gry" component={MyGames} />
            </main>
            <Footer />
            <style jsx>{`
            main{
              overflow:auto;
            }
          .layout {
            width: 100%;
            height:100%;
            overflow:hidden;
            display:grid;
            grid-template-rows: 76px auto 4em;
          }
          `}</style>
      </div>
          </React.Fragment>
        </Router>
    )
  }
}
export default RouterLinks
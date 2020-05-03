'use strict';

import React from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import Link from 'next/link';
import Router from 'next/router'

import { Button } from 'reactstrap';


class Index extends React.Component {
  // This method gets called when the Facebook login gets resolved.
  facebookAuthCallback(resp) {
    if ("accessToken" in resp) { // Then the user must have successfully logged in.
      alert("Successfully logged in. Welcome, " + resp.name + ".");

      // TODO: Write some cookies so the user page can GET the appropriate info.
      const {pathname} = Router;
      if (pathname == '/' ){
        Router.push('/user');
      }
    } else { // The user failed to log in.
      alert("Login unsuccessful. Please try again.");
    }

    console.log(resp);
  }

  render() {
    return (
      <div>
        <div class="container">

          <br/><br/><br/><br/>

          <div class="row">
            <img src="/img/logo.png" className="mx-auto d-block" width="100px" alt="Assassins Logo" />
          </div>

          <div class="row">
            <p className="mx-auto d-block" >Welcome, assassin.</p>
          </div>

          <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-2">
              <Link href="/leaderboard">
                <Button color="primary">
                  <a>Leaderboard Page</a>
                </Button>
              </Link>
            </div>

            <div class="col-sm-2">
              <FacebookLogin
                appId="559046621373474"
                fields="name,email,picture"
                callback={this.facebookAuthCallback}
                render={renderProps => (
                  <Button color="primary" onClick={renderProps.onClick}>Login with Facebook</Button>
                )}
              />
            </div>

            <div class="col-sm-4"></div>
          </div>
        </div>

      </div>
    );
  }
}

export default Index;

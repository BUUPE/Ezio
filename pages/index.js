'use strict';

import React from 'react';
import FacebookLogin from 'react-facebook-login';
import Link from 'next/link';

class Index extends React.Component {
  // This method gets called when the Facebook login gets resolved.
  facebookAuthCallback(resp) {
    if ("accessToken" in resp) { // Then the user must have successfully logged in.
      alert("Successfully logged in. Welcome, " + resp.name + ".");
    } else { // The user failed to log in.
      alert("Login unsuccessful. Please try again.");
    }

    console.log(resp);
  }

  render() {
    return (
      <div>
        <p>Welcome, assassin.</p>
        <Link href="/leaderboard">
          <a>Leaderboard Page</a>
        </Link>

        <FacebookLogin
          appId="559046621373474"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.facebookAuthCallback}
        />
      </div>
    );
  }
}

export default Index;

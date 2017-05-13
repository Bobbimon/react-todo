import React from 'react';
import * as Redux from 'react-redux';

import * as Actions from 'Actions';

export var Login = React.createClass({
  onLogin() {
    var {dispatch} = this.props;

    dispatch(Actions.startLogin());
  },
  render () {
    return (
      <div>
        <h1 className="page-title">Todo App</h1>

        <div className="row">
          <div className="columns small-centered s,all-10 medium-6 large-4">
            <div className="callout callout-auth">
              <h3>Login</h3>
              <p>
                Login with GitHUb account below.
              </p>
              <button className="button" onClick={this.onLogin}>Login With GitHub</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(Login);

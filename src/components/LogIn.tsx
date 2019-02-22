import * as React from 'react';
import Form from './Form';
import HTTP from '../services/HTTP';
import { connect } from 'react-redux';

class LogIn extends React.PureComponent {

  public handleSubmit = async (user: any) => {
    const body = {
      auth: {
        email: user.email,
        password: user.password
      }
    };

    return await HTTP.post('/user_token', body);
  }

  public render() {
    return (
      <Form title="Authorization" submit="Log In" onHandleSubmit={this.handleSubmit} />
    )
  }
}

export default connect()(LogIn);
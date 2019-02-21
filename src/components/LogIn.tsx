import * as React from 'react';
import Form from './Form';
import HTTP from '../services/HTTP';

class LogIn extends React.Component {

  public handleSubmit = async (target: any) => {
    const body = {
      auth: {
        [target.email.name]: target.email.value,
        [target.password.name]: target.password.value
      }
    };

    return await HTTP.post('/user_token', body);
  }

  public render() {
    return (
      <Form title="Authorization" submit="Log In" handleSubmit={this.handleSubmit} />
    )
  }
}

export default LogIn;
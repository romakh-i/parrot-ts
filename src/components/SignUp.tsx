import * as React from 'react';
import Form from './Form';
import HTTP from '../services/HTTP';

class SignUp extends React.PureComponent {
  public handleSubmit = async (user: any) => {
    const body = {
      user: {
        email: user.email,
        password: user.password
      }
    };

    return await HTTP.post('/sign_up', body);
  }

  public render() {
    return (
      <Form title="Registration" submit="Sign Up" onHandleSubmit={this.handleSubmit} />
    )
  }
}

export default SignUp
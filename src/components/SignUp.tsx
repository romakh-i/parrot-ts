import * as React from 'react';
import Form from './Form';
import HTTP from '../services/HTTP';

class SignUp extends React.Component {
  public handleSubmit = async (target: any) => {
    const body = {
      user: {
        [target.email.name]: target.email.value,
        [target.password.name]: target.password.value
      }
    };

    return await HTTP.post('/sign_up', body);
  }

  public render() {
    return (
      <Form title="Registration" submit="Sign Up" handleSubmit={this.handleSubmit} />
    )
  }
}

export default SignUp
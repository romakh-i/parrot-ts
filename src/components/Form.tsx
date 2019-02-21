import * as React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Wrapper from './Wrapper';
import { authorize } from '../store/index';


interface IProps {
  handleSubmit: (target: any) => any;
  isLoggedIn: boolean;
  title: string;
  submit: string;
  actions: any;
}

class Form extends React.Component<IProps> {
  public notify = (text: string) => toast(text + "!", { position: toast.POSITION.TOP_CENTER, className: 'toast-notif' });

  public handleSubmit = async (e: any) => {
    e.preventDefault();

    const response = await this.props.handleSubmit(e.target);

    if (response.errors) {
      for (const key in response.errors) {
        if (key !== 'password_digest') {
          response.errors[key].forEach((el: string) => this.notify(key.charAt(0).toUpperCase() + key.slice(1) + ' ' + el))
        }
      }
    } else if (response instanceof Error) {
      this.notify('Entered wrong data!');
    }
    else {
      this.props.actions({ jwt: response.jwt })
    }
  }

  public successRedirect = () => {
    if (this.props.isLoggedIn) {
      return <Redirect to='/' />
    }
    return false;
  }

  public render() {
    return (
      <Wrapper>
        {this.successRedirect()}
        <div className="container">
          <div className="row">
            <form className="signup-form" onSubmit={this.handleSubmit}>
              <label className="text-center form-title">{this.props.title}</label>
              <input type="text" className="form-control" name="email" placeholder="Email" />
              <input type="password" className="form-control" name="password" placeholder="Password" />
              <input type="submit" className="form-control" value={this.props.submit} />
            </form>
          </div>
        </div>
        <ToastContainer />
      </Wrapper>
    )
  }
}

const mapStateToProps = (state: any) => ({
  isLoggedIn: state.isLoggedIn
});

// const mapDispatchToProps = (dispatch: any) => {
//   return bindActionCreators({ authorize }, dispatch)
// };

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(authorize, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
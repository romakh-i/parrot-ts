import * as React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Wrapper from './Wrapper';
import { authorize } from '../store/index';
import { Field, reduxForm, InjectedFormProps } from 'redux-form'

interface IOwnProps {
  title?: string;
  submit?: string;
  onHandleSubmit: (e: any) => any;
}
interface IProps extends InjectedFormProps, IOwnProps {
  formm: any;
  isLoggedIn: boolean;
  authorize: any;
}

class User extends React.PureComponent<IProps> {

  public notify = (text: string) => toast(text + "!", { position: toast.POSITION.TOP_CENTER, className: 'toast-notif' });

  public handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await this.props.onHandleSubmit(this.props.formm.user.values);

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
      this.props.authorize({ jwt: response.jwt })

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
              <Field type="text" className="form-control" name="email" component="input" placeholder="Email" />
              <Field type="password" className="form-control" name="password" component="input" placeholder="Password" />
              <input type="submit" className="form-control" />
            </form>
          </div>
        </div>
        <ToastContainer />
      </Wrapper>
    )
  }
}
const UserForm = reduxForm({
  form: 'user'
})(User)

const mapStateToProps = ({ user: { isLoggedIn }, form: formm }: any, { title, submit, onHandleSubmit }: IOwnProps) => ({
  formm,
  isLoggedIn,
  title,
  submit,
  onHandleSubmit
});

function mapDispatchToProps(dispatch: any) {
  return {
    authorize: bindActionCreators(authorize, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
import * as React from 'react';
import Header from './Header';


class Wrapper extends React.Component {
  public render() {
    return (
      <div className="content">
        <Header />
        {this.props.children}
      </div>
    )
  }
}

export default Wrapper
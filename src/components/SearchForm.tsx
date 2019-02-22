import * as React from 'react';
import Select from './Select';

class SearchForm extends React.Component {
  public render() {
    return (
      <div className="top-section">
        <div className="title text-center">
          <p>Quick Search for Your </p>
          <p>Perfect Product </p>
        </div>
        <div className="sub-title text-center">
          <p>INNOVATE &#183; LIST &#183; CONNECT </p>
        </div>
        <form className="form-row search-form">
          <div className="col-auto">
            <Select />
          </div>
          <div className="col-6 col-sm-5 search-field">
            <input type="text" className="form-control" />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn submit-btn">START SEARCHING</button>
          </div>
        </form>
      </div >
    )
  }
}

export default SearchForm
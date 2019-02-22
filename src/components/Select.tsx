import * as React from 'react'

class Select extends React.Component {
  public render() {
    return (
      <div className="select">
        <select required={true}>
          <option>sdfsd</option>
          <option>qwer</option>
          <option>s q q</option>
        </select>
        {/* <button className="select-btn bg-white dropdown-toggle" type="button" id="dropdownCategory">Category</button> */}

        <div className="select-menu" style={{ display: 'none' }}>
          <button className="select-item" type="button">Action</button>
          <button className="select-item" type="button">Another action</button>
          <button className="select-item" type="button">Something else here</button>
        </div>
      </div>
    )
  }
}

export default Select
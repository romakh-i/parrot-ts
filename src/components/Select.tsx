import * as React from 'react'


class Select extends React.Component<{}, { display: string }> {
  constructor(props: any) {
    super(props);

    this.state = { display: 'none' }
  }

  public dropdownClick = (e: any) => {
    e.preventDefault();
    this.setState({ display: 'block' });
  }
  public render() {
    const selectStyle = {
      display: this.state.display
    }

    return (
      <div>
        <div className="select" onClick={this.dropdownClick}>Category</div>
        {/* <button className="select-btn bg-white dropdown-toggle" type="button" id="dropdownCategory">Category</button> */}

        <div className="select-menu" style={selectStyle}>
          <button className="select-item" type="button">Action</button>
          <button className="select-item" type="button">Another action</button>
          <button className="select-item" type="button">Something else here</button>
        </div>
      </div>
    )
  }
}

export default Select
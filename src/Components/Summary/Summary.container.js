import React from 'react';
import Summary from './Summary.component';

class ConSummery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '0' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <Summary
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default ConSummery;

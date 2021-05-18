import React from 'react';
import Heading from './Heading.component';

class ConHeading extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

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
        <Heading
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          value={this.state.value}
         />
      </div>
    );
  }
}

export default ConHeading;

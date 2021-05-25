import React from 'react';
import Argument2 from './Argument2.component';

class ConArgument2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      weight: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  handleSubmit(event) {
    this.props.addArgument(this.state.name, this.state.weight);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Argument2
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default ConArgument2;

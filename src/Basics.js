import { Component } from 'react';

export class Basics extends Component {
  state = {
    clicks: 0,
  };
  handleClick = () => {
    this.setState(prevState => {
      return {
        clicks: prevState.clicks + 1,
      };
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Count: {this.state.clicks}</button>
      </div>
    );
  }
}

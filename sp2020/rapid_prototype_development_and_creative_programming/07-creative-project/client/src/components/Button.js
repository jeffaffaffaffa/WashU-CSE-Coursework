import React from 'react';

class Button extends React.Component {
    constructor(props) {
      super(props);
      this.state = {buttonName: ""};
    }
  
    render() {
      return (
        <button onClick={this.props.someFunction}>{this.props.buttonName}</button>
      );
    }
  }

  export default Button;
import React from 'react';

class DM extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }
  
    render() {
      return (
        <div>
            <h4>Message from {this.props.from}:</h4>
            <p>{this.props.message}</p>
            <p>{this.props.postTimeStamp}</p>
            <hr></hr>
        </div>
        );
    }
  }

  export default DM;
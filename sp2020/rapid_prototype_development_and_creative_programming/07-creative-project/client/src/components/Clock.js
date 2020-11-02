import React from 'react';

//help for creating clock:
//https://openclassrooms.com/en/courses/4286486-build-web-apps-with-reactjs/4286711-build-a-ticking-clock-component

class Clock extends React.Component {
    constructor(props) {
      super(props); //inheriting from parent
      this.state = {
        time: new Date().toLocaleString()
      };
    }

    //update every second when mounted
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }

    //clear it when unmounted so doesn't hog memory
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }

    //tick function to update the state w updated time every second it is called from did mount
    tick() {
      this.setState({
        time: new Date().toLocaleString()
      });
    }

    render() {
      return (
        <p className="App-clock">
          The date and time is: {this.state.time}.
        </p>
      );
    }
  }

  export default Clock;
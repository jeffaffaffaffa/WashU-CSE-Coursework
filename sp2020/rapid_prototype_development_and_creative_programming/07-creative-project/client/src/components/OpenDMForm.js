import React from 'react';
import Post from './Post';
import Button from './Button';
import DMForm from './DMForm';

class OpenDMForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {showDM: false};
    }

    openDM = () => {
        console.log("open messaging invoked");
        this.setState({showDM: true});
    }

    closeDM = () => {
        console.log("close messaging invoked");
        this.setState({showDM: false});
    }
  
    render() {
      return (
            <div>
                <hr className="molines"></hr>
                {/* <Button someFunction={this.openDM} buttonName="Click to Send Messages"/> */}
                { !this.state.showDM ? <div><Button someFunction={this.openDM} buttonName="Click to Send Messages"/></div>: null }
                { this.state.showDM ? <div><DMForm /> <Button someFunction={this.closeDM} buttonName="Collapse Send Message View"/></div>: null }
            </div>
      );
    }
  }

  export default OpenDMForm;
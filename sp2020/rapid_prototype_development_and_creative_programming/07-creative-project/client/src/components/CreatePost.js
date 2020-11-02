import React from 'react';
import Post from './Post';
import Button from './Button';
import Form from './Form';

class CreatePost extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showForm: false
      };
    }

    createPost = () => {
        console.log("create post invoked");
        this.setState({showForm: true});
    }

    closeForm = () => {
        console.log("close form invoked");
        this.setState({showForm: false});
    }
  
    render() {
      return (
            <div>
                { !this.state.showForm ? <div><Button someFunction={this.createPost} buttonName="Click to Create a Post"/></div>: null}
                { this.state.showForm ? <div><Form action={this.props.action}/> <Button someFunction={this.closeForm} buttonName="Collapse Create Post View"/></div>: null }
            </div>
      );
    }
  }

  export default CreatePost;
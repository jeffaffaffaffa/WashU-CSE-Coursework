import React from 'react';
import Button from './Button';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: this.props.action,
      title: '',
      content: '',
      success: false
    };
  }

  submitPost = () => {
    let inputTitle = document.getElementById("title").value;
    let inputContent = document.getElementById("content").value;

    //forgot to check for null and empty; was breaking the server
    if (inputTitle == null || inputTitle == "" || inputContent == null || inputContent == "") {
      document.getElementById("title").value = "";
      document.getElementById("content").value = "";
      alert("please enter input in both fields")
    } else {
      loadingAnimation();
      document.getElementById("title").value = "";
      document.getElementById("content").value = "";

      console.log("title:", inputTitle);
      console.log("content:", inputContent);

      this.setState({
        title: inputTitle,
        content: inputContent
      }, () => {
        console.log("submit post")
        fetch("/addPost", {
          method: "POST",
          body: JSON.stringify(this.state),
          headers: { 'content-type': 'application/json' }
        })
          .then(res => res.json())
          .then(response => {
            console.log(response)

            this.setState({
              connectionMessage: response.message,
              success: response.success
            })

            fetch('/hello')
              .then(res => res.json())
              .then(response => {
                // console.log("response", response)
                this.state.action(response.feed);

                console.log(response)
              })
          })
      });
    }
  }

  render() {
    return (
      <div class="form-popup" id="popupForm">
        <h2>Create a Post</h2>
        <h5>Title</h5>
        <input type="text" id="title" placeholder="post title" name="title" required />
        <h5>Content</h5>
        <textarea id="content" name="content" placeholder="Today was the worst, I went outside for a walk and got arrested bc I broke quarantine..." rows="4" cols="50"></textarea>
        <h6>Done?</h6>
        <div id="loading_div">
            <div id="loading_bar"></div>
        </div>  
        <Button someFunction={this.submitPost} buttonName="Submit Post" />
      </div>
    );
  }
}

// A loading animation fills a div when the action is called
function loadingAnimation() {
  let i = 0;
  if (i == 0) {
      i = 1;
      let bar = document.getElementById("loading_bar");
      let width = 1;
      let id = setInterval(frame, 5);
      function frame() {
        if (width >= 100) {
            clearInterval(id);
            i = 0;
        } else {
            width++;
            bar.style.width = width + "%";
        }
      }
    }   
  }

export default Form;
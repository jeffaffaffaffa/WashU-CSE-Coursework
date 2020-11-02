import React from 'react';
import Button from './Button';

class EditPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            success: false
        };
        // console.log(this.state)
    }

    editPost = () => {
        let setTitle = document.getElementById("edit-title").value;
        let setContent = document.getElementById("edit-content").value;

        if (setTitle == null || setTitle == "" || setContent == null || setContent == "") {
            alert("must enter stuff for both fields");
        } else {
            document.getElementById("edit-title").value = "";
            document.getElementById("edit-content").value = "";

            console.log("title", setTitle);
            console.log("content", setContent)

            // this.setState({
            //     title: title,
            //     content: content,
            // }, () => {
                console.log("editing post")
                fetch("/modifyPost", {
                    method: "POST",
                    body: JSON.stringify({
                        postId: this.props.postId,
                        title: setTitle,
                        content: setContent
                    }),
                    // body: JSON.stringify(this.state),
                    headers: { 'content-type': 'application/json' }
                })
                    .then(res => res.json())
                    .then(response => {
                        console.log(response)
                        this.setState({
                            connectionMessage: response.message,
                            success: response.success
                        })
                        if (response.success === true) {
                            fetch('/hello')
                                .then(res => res.json())
                                .then(response => {
                                    // console.log("response", response)
                                    this.props.action(response.feed);
                                    
                                    console.log(response)
                                })
                        }
                    })
            // });

            alert("submitted");
        }
    }

    render() {
        return (
            <div id="edit-form">
                <h2>Edit Your Post</h2>
                <h5>New Title:</h5>
                <input type="text" id="edit-title" placeholder="title" name="title" required />
                <h5>New Content:</h5>
                <textarea id="edit-content" name="edit-content" placeholder="Today was the worst, I went outside for a walk and got arrested bc I broke quarantine..." rows="4" cols="50"></textarea>
                <h6>Done?</h6>
                <Button someFunction={this.editPost} buttonName="Submit Changes" />
            </div>
        );
    }
}

export default EditPostForm;
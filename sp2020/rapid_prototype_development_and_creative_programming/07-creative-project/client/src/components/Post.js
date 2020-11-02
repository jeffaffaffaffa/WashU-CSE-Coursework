import React from 'react';
import Button from './Button';
import EditPostForm from './EditPostForm';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        };
    }

    editPost = () => {
        this.setState({ edit: true });
    }

    submitAndCloseEdit = () => {
        this.setState({ edit: false });
    }

    deletePost = () => {
        // this.setState({
        //     option: 'delete' // tells addModifyPost to modify the data
        // }, () => {
            console.log("deleting post")
            fetch("/deletePost", {
                method: "POST",
                // body: JSON.stringify(this.state),
                body: JSON.stringify({
                    postId: this.props.postId,
                }),
                headers: { 'content-type': 'application/json' }
            })
                .then(res => res.json())
                .then(response => {
                    // this.setState({
                    //     connectionMessage: response.message,
                    //     success: response.success
                    // })

                    console.log("before response == true")

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
    }

    like = () => {
        console.log("liking post")
        fetch("/like", {
            method: "POST",
            // body: JSON.stringify(this.state),
            body: JSON.stringify({
                postId: this.props.postId,
            }),
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(response => {
                // this.setState({
                //     connectionMessage: response.message,
                //     success: response.success
                // })

                console.log("before response == true")

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
    }

    dislike = () => {
        console.log("disliking  post")
        fetch("/dislike", {
            method: "POST",
            body: JSON.stringify({
                postId: this.props.postId,
            }),
            headers: { 'content-type': 'application/json' }
        })
            .then(res => res.json())
            .then(response => {

                console.log("before response == true")

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
    }

    render() {
        let timeFormat = new Date(this.props.postTimeStamp)
        console.log('time', timeFormat.toLocaleDateString())
        return (
            <div id={this.props.postId}>
                <h4>{this.props.title}</h4>
                <p>{this.props.creator}'s post</p>
                {/* {this.state.myOwn} */}
                {!this.state.edit && this.props.myOwn ? <Button someFunction={this.editPost} buttonName="edit post" /> : null}
                {this.props.myOwn ? <Button someFunction={this.deletePost} buttonName="delete post" /> : null }
                {this.state.edit ? <div><EditPostForm action={this.props.action} postId={this.props.postId} /> <Button someFunction={this.submitAndCloseEdit} buttonName="Close Edit Box" /></div> : null}

                {!this.state.edit ?
                    <div>
                        <p>{this.props.content}</p>
                        <p><span>{timeFormat.toLocaleDateString()}</span> <span>{timeFormat.toLocaleTimeString()}</span></p>
                        <span><Button someFunction={this.like} buttonName="&uarr;"/>{this.props.likes}</span> <span><Button someFunction={this.dislike} buttonName="&darr;"/>{this.props.dislikes}</span>
                        <hr></hr>
                    </div>
                    : null}

            </div>
        );
    }
}

export default Post;
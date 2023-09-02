import React, { Component } from "react";
import PostData from "../services/post.service";

export default class AddPost extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.savePost = this.savePost.bind(this);
    this.newPost = this.newPost.bind(this);

    this.state = {
      id: null,
      title: "",
      content: "", 
      published: false,

      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeContent(e) {
    this.setState({
      content: e.target.value
    });
  }

  savePost() {
    var data = {
      title: this.state.title,
      content: this.state.content
    };

    PostData.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          title: response.data.title,
          content: response.data.content,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newPost() {
    this.setState({
      id: null,
      title: "",
      content: "",
      published: false,

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newPost}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div className="form-group">
              <label htmlFor="content">Content</label>
              <input
                type="text"
                className="form-control"
                id="content"
                required
                value={this.state.content}
                onChange={this.onChangeContent}
                name="content"
              />
            </div>

            <button onClick={this.savePost} className="btn btn-success">
              Post
            </button>
          </div>
        )}
      </div>
    );
  }
}
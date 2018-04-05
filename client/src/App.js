import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
var ReactS3Uploader = require('react-s3-uploader');

class App extends Component {
  constructor() {
    super();
    this.state = {
      imgURL: "",
      users: ""
    }
  }
  
  componentDidMount() {
    console.log('hi')
    fetch('/users')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          users: data.data
        })
      })
  }
  
  onUploadFinish = (img) => {
    console.log(img)
    this.setState({
      imgURL: 'http://s3.amazonaws.com/sample-c4q/' + img.filename
    })
  }
  
  render() {
    console.log(this.state.users)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Upload an Image</h1>
        </header>
        <div className="image-holder">
          <ReactS3Uploader
            signingUrl="/s3/sign"
            signingUrlMethod="GET"
            accept="image/*"
            uploadRequestHeaders={{
              'x-amz-acl': 'public-read'
            }}
            onFinish={this.onUploadFinish}
          />
          
          {this.state.imgURL ? <img src={this.state.imgURL}></img> : ""}
        </div>
      </div>
    );
  }
}

export default App;

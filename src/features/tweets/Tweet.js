import React, { Component } from "react";

export default class Tweet extends Component {
 
  render() {
    return (
      <div className="card tweet-element">
        <div className="card-body">
          <div className="card-text"> { this.props.tweet.message } </div>
          <button
            className="btn btn-success mt-2 float-right"
            onClick={(e) => this.props.editTweet(this.props.tweet._id, e) }
          >
            update
          </button>
          <button
            className="btn btn-danger mt-2 float-right"
            onClick={(e) => this.props.deleteTweet(this.props.tweet._id, e) }
          >
            delete
          </button>
        </div>
      </div>
    );
  }
}
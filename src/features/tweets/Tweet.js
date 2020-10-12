import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Tweet extends Component {
 
  render() {
    return (
      <div className="card tweet-element">
        <div className="card-body">
          <div className="card-text"> { this.props.tweet.message } </div>
          <NavLink
            className="btn btn-success mt-2 float-right"
            //onClick={(e) => this.props.editTweet(this.props.tweet._id, e) }
            to={'/tweets/new/' + this.props.tweet._id}
          >
            update
          </NavLink>
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
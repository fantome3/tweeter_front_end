import React, { Component } from "react";
import * as axios from "axios";
import { Profile, Tweet } from './../../features';

export default class TweetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      tweet: null
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/tweets/`).then((res) => {
      const tweets = res.data;
      this.setState({ tweets });
    });
  }

  deleteOneTweet = (tweetId, e) => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/tweets/` + tweetId)
         .then((res) => {
            const tweets = res.data;
            this.setState({ tweets });
        })
         .catch(err => console.log(err));
  };

  tweetToEdit = (tweetId, e) => {
    e.preventDefault();
    window.location = '/tweets/new/'+tweetId;
  }

  render() {
    return(
        <div className="d-flex flex-row content mx-auto">
            <div className="profile-container">
                <Profile />
            </div>

            <div className="flex-fill d-flex flex-column">
              { 
                this.state.tweets.map( (tweet) => <Tweet key={ tweet._id }  tweet = { tweet }
                    editTweet = { this.tweetToEdit }
                    deleteTweet = { this.deleteOneTweet } 
                  />)
              }
            </div>
        </div>
    );
  }
}
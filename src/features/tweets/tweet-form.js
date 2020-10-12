import React from 'react';
import * as axios from 'axios';

export default class TweetForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            messageId: null,
            message : "",
            errorMessage : null
        }
    }

    componentDidMount() {
        if(this.props.match.params.id){
            this.getSpecificTweet(this.props.match.params.id);
        }
    }

    getSpecificTweet = (tweetId) => {
        axios.get(`http://localhost:5000/tweets/new/${tweetId}`)
             .then((res) => {
                const tweet = res.data;
                this.setState({ message: tweet.message, messageId: tweetId });
            })
             .catch(err => console.log(err));
    }

    handleChange = (e) => {
        this.setState({
            message : e.target.value
        })
    }

    /**
     * normalement la redirection du update est déjà traiter, juste qu'il manque la prise en compte de la 
     * route loraqu'il y a un paramètre. J'avoue que xa m'a depassé.
     * @param {*} e 
     */
    handleSubmit = (e) => {
        e.preventDefault();

        const myTweet = {
            message: this.state.message
        }

        let linkAxios;

        if (this.state.messageId) {
            linkAxios = `http://localhost:5000/tweets/new/${this.state.messageId}`
        }else{
            linkAxios = `http://localhost:5000/tweets/new/`
        }

        axios.post(linkAxios, myTweet)
             .then(response => console.log(response.data));

        //window.location = '/tweets';
    }

    render(){
        return(
            <div className = "d-flex flex-row content mx-auto">
                <div className = "profile-container">
                    <h1>profile</h1>
                </div>

                <div className = "flex-fill">
                    <form className = "card" onSubmit = { this.handleSubmit }>
                        <div className = "card-header"> 
                            Écrire un tweet
                        </div>
                        <div className = "card-body">
                            <div className = "form-group">
                                <textarea 
                                    className = "form-control" 
                                    name = "content"
                                    onChange = { this.handleChange }
                                    value = { this.state.message }
                                    placeholder = "write there!!!"
                                />
                            </div>
                            <div className = "w-100">
                                <input 
                                    type = "submit" 
                                    value = "Send" 
                                    className = "btn btn-primary ml-auto d-block"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
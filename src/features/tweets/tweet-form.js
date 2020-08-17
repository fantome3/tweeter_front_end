import React from 'react';

export default class TweetForm extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            message = null,
            errorMessage = null
        }
    }

    handleChange = (e) => {
        const msg = e.target.value
        this.setState({
            message : msg
        })
    }

    handleSubmit = (e) => {
        console.log("Bonjour jires");
        e.preventDefault();
        console.log(this.message);
    }

    render(){
        return(
            <div className = "d-flex flex-row content mx-auto">
                <div className = "profile-container">
                    <h1>profile</h1>
                </div>

                <div className = "flex-fill">
                    <form className = "card" onSubmit = { handleSubmit }>
                        <div className = "card-header"> 
                            Écrire un tweet
                        </div>
                        <div className = "card-body">
                            <div className = "form-group">
                                <textarea 
                                    className = "form-control" 
                                    name = "content"
                                    onChange = { handleChange } 
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
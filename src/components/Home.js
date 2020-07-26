import React, { Component } from "react";
import API from '../utils/API'

class Home extends React.Component {

    state = {
        tweets: [],
    };

    getTweets = () => {
        API.getTweets()
            .then(res =>
                this.setState({
                    tweets: res.data
                }, () => console.log(this.state.tweets))
            )
            .catch((e) =>
                console.log(e)
            );
    };

    componentDidMount() {
        this.getTweets();
    }

    render() {
        return (
            <React.Fragment>
                <div>Hello Home</div>
            </React.Fragment>
        )
    }
}

export default Home;
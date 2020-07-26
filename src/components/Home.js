import React, { Component } from "react";
import API from '../utils/API'
import CardComponent from './CardComponent';
import { CSSTransitionGroup } from 'react-transition-group';
import tweets from "../server/routes/tweets";

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

    componentWillMount() {
        this.getTweets();
    }

    render() {
        return (
            <React.Fragment>
                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this.state.tweets.map((x, i) =>
                        <CardComponent key={i} data={x} />
                    )}
                </CSSTransitionGroup>
            </React.Fragment>
        )
    }
}

export default Home;
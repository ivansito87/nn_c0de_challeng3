import React from "react";
import API from '../utils/API'
import CardComponent from './CardComponent';
import { Row } from 'react-bootstrap';
import NewsNotification from "./NewsNotification";
import WelcomeHeading from "./Welcome.js";

class Home extends React.Component {

    state = {
        tweets: [],
    };

    getTweets = () => {
        API.getTweets()
            .then(res =>
                this.setState({
                    tweets: res.data
                })
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
                <WelcomeHeading />
                <NewsNotification />
                <Row style={{ padding: '16px' }}>
                    {this.state.tweets.map((x, i) =>
                        <CardComponent key={i} data={x} />
                    )}
                </Row>

            </React.Fragment>
        )
    }
}

export default Home;
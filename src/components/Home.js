import React from "react";
import API from '../utils/API'
import CardComponent from './CardComponent';
import { Row } from 'react-bootstrap';
import NewsNotification from "./NewsNotification";
import WelcomeHeading from "./Welcome.js";
import LoadingBar from "./LoadingBar";

class Home extends React.Component {

	state = {
		tweets: [],
		loadingState: false
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

	componentDidMount() {
		this.refs.iScroll.addEventListener("scroll", () => {
			if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >= this.refs.iScroll.scrollHeight - 20) {
				this.loadMoreTweets();
			}
		});
	}

	loadMoreTweets() {
		if (this.state.loadingState) {
			return;
		}
		this.setState({ loadingState: true });
		setTimeout(() => {
			API.getTweets().then(res => {
				this.setState({ tweets: [...this.state.tweets, ...res.data], loadingState: false });
			})
		}, 1000);
	}

	displayTweets() {
		var items = this.state.tweets.map((x, i) =>
			<CardComponent key={i} data={x} />
		);
		return items;
	}


	componentWillMount() {
		this.getTweets();
	}

	render() {
		return (
			<React.Fragment>
				<WelcomeHeading />
				<NewsNotification />
				<Row ref="iScroll" style={{ height: "600px", overflow: "auto", padding: '16px' }}>
					{this.displayTweets()}
				</Row>
				<div style={{ height: '40px', paddingTop: '12px' }}>
					{this.state.loadingState ? <LoadingBar /> : ""}
				</div>
			</React.Fragment>
		)
	}
}

export default Home;
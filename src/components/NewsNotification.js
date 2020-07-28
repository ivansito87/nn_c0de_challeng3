import React from "react";
import API from "../utils/API";

class NewsNotification extends React.Component {
	state = {
		show: false,
		breaking_news: "",
	};

	getBreakingNewsTweet = () => {
		API.getBreakingNewsTweet()
			.then((res) => {
				this.setState({
					breaking_news: res.data[0].user.description,
				});
			})
			.catch((e) => console.log(e));
	};

	componentWillMount() {
		this.getBreakingNewsTweet();
	}

	render() {
		return (
			<React.Fragment>
				{!this.state.show && <div className='notification'>
					{this.state.breaking_news}
					<i className="fa fa-times fa-1x" aria-hidden="true" onClick={() => this.setState({ show: true })}></i>
				</div>}
			</React.Fragment>
		)
	}
}
export default NewsNotification;

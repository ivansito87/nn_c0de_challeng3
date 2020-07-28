import React from "react";
import { Alert, Button } from "react-bootstrap";
import API from "../utils/API";

class NewsNotification extends React.Component {
  state = {
    show: false,
    breaking_news: "",
  };

  getBreakingNewsTweet = () => {
    API.getBreakingNewsTweet()
      .then((res) => {
        console.log(res.data);
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
        <Alert show={!this.state.show} variant="danger" style={{ marginBottom: 0 }}>
          <Alert.Heading>BREAKING NEWS</Alert.Heading>
          <p>{this.state.breaking_news}</p>
          <div className="d-flex justify-content-end">
            <Button onClick={() => this.setState({ show: true })} variant="outline-danger">
              close
            </Button>
          </div>
        </Alert>
      </React.Fragment>
    );
  }
}
export default NewsNotification;

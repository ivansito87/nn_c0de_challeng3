import React from 'react';
import socketIOClient from "socket.io-client";
import CardComponent from './CardComponent';
import FormSearchController from './SearchTermForm';
import LoadingBar from './LoadingBar';
import { Row, Col, Button } from "react-bootstrap";

class TweetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], searchTerm: "CNN" };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleResume = this.handleResume.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  handleLoadingBar() {
    let interval = 0;
    setInterval(() => {
      interval += 1;
    }, 50);
    return interval;
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleResume();
    }
  }

  handleResume() {
    // TODO: check what the search term should do in the server
    let term = this.state.searchTerm;
    fetch("/setSearchTerm",
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ term })
      })
  }

  handlePause() {
    fetch("/pause",
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      })
  }

  componentDidMount() {
    const socket = socketIOClient('http://localhost:3000/');

    socket.on('connect', () => {
      // console.log("Socket Connected");
      socket.on("tweets", data => {
        console.info(data);
        let newList = [data].concat(this.state.items.slice(0, 15));
        this.setState({ items: newList });
      });
    });
    socket.on('disconnect', () => {
      socket.off("tweets")
      socket.removeAllListeners("tweets");
      console.log("Socket Disconnected");
    });
  }


  render() {
    let { items } = this.state;

    let itemsCards = items.map((x, i) =>
      <CardComponent key={i} data={x} />
    );


    let filterControls = <div>

      <Button variant="outline-dark" onClick={this.handleResume} className="mr-2">Stream</Button>
      <Button variant="outline-secondary" onClick={this.handlePause}>Pause</Button>
    </div>

    let controls = <div>
      {
        items.length > 0 ? filterControls : null
      }
    </div>


    return (
      <React.Fragment>
        <Row>
          <Col className='search-controls'>
            {items.length > 0 ? controls : null}
          </Col>
          <Col md={{ span: 4, offset: 4 }} className='search-controls'>
            <FormSearchController handleChange={this.handleChange} handleResume={this.handleResume} />
          </Col>
        </Row>
        <Row>
          {items.length == 0 && <LoadingBar />}
        </Row>
        <Row style={{ padding: '16px', width: '100%' }}>
          {itemsCards}
        </Row>
      </React.Fragment>
    );
  }
}

export default TweetList;
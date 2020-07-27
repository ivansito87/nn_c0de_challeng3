import React from 'react';
import socketIOClient from "socket.io-client";
import CardComponent from './CardComponent';
import FormSearchController from './SearchTermForm';
import LoadingBar from './LoadingBar';
import { Row, Col } from "react-bootstrap";
import FilterControls from "./FilterControls";
import API from '../utils/API';

class TweetList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], searchTerm: "CNN" };
    this.handleChange = this.handleChange.bind(this);
    this.handleResume = this.handleResume.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  handleResume() {
    API.setSearchTerm(this.state.searchTerm)
      .then(res => console.log(res))
      .catch(err => { throw new Error(err) })
  }

  handlePause() {
    API.pauseStream
  }

  componentDidMount() {
    const socket = socketIOClient('http://localhost:3000/');

    socket.on('connect', () => {
      socket.on("tweets", data => {
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

    return (
      <React.Fragment>
        <Row>
          <Col className='search-controls'>
            {items.length > 0 ? <FilterControls handleResume={this.handleResume} handlePause={this.handlePause} /> : null}
          </Col>
          <Col md={{ span: 4, offset: 4 }} className='search-controls'>
            <FormSearchController handleChange={this.handleChange} handleResume={this.handleResume} />
          </Col>
        </Row>
        <Row>
          {items.length === 0 && <LoadingBar />}
        </Row>
        <Row style={{ padding: '16px', width: '100%' }}>
          {items.map((x, i) =>
            <CardComponent key={i} data={x} />
          )}
        </Row>
      </React.Fragment>
    );
  }
}

export default TweetList;
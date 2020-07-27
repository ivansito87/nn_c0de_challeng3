import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

class CardComponent extends React.Component {
    render() {
        let data = this.props.data;
        return (
            <Card border="secondary" style={{ width: '48%', margin: '10px' }}>
                <Card.Header>{data.user.name}</Card.Header>
                <Card.Body>
                    <Row>
                        <Col><img src={data.user.profile_image_url} alt={data.user.name} className="circle responsive-img" /></Col>
                        <Col> Created at {new Date(data.created_at).toLocaleTimeString()}</Col>
                    </Row>
                    <Card.Text>
                        <span className="black-text">{data.text}</span>
                    </Card.Text>
                    <Row>
                        <Col>
                            <a href={`https://twitter.com/${data.user.screen_name}`} target="_blank">{`@${data.user.screen_name}`}</a>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}

export default CardComponent;
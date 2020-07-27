import React from 'react';
import { Alert, Button } from 'react-bootstrap';

class NewsNotification extends React.Component {

	state = {
		show: false,
	};

	render() {
		return (
			<React.Fragment>
				<Alert show={!this.state.show} variant="danger" style={{ marginBottom: 0 }}>
					<Alert.Heading>BREAKING NEWS</Alert.Heading>
					<p>
						Millennials are fleeing cities and waging bidding
						wars for suburban and even rural homes. It's a
						big bet that the work-from-home lifestyle is here to stay
          </p>
					<div className="d-flex justify-content-end">
						<Button onClick={() => this.setState({ show: true })} variant="outline-danger">
							close
            </Button>
					</div>
				</Alert>
			</React.Fragment>
		)
	}
}
export default NewsNotification;
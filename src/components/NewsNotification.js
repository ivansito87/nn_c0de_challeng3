import React from 'react';
import { Alert, Button } from 'react-bootstrap';

class NewsNotification extends React.Component {

    state = {
        show: false,
    };

    render() {
        let data = this.props.data;

        return (
            <React.Fragment>
                <Alert show={!this.state.show} variant="danger">
                    <Alert.Heading>BREAKING NEWS</Alert.Heading>
                    <p>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                        lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                        fermentum.
                    </p>
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => this.setState({ show: false })} variant="outline-danger">
                            close
                        </Button>
                    </div>
                </Alert>
                {this.state.show && <Button onClick={() => this.setState({ show: true })}>Show Alert</Button>}
            </React.Fragment>
        )
    }
}
export default NewsNotification;
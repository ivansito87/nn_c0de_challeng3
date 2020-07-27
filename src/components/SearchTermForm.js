import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
class FormSearchController extends React.Component {
    render() {
        return (
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.props.handleChange} />
                <Button variant="outline-success" onClick={this.props.handleResume}>Search</Button>
            </Form>
        )
    }
}
export default FormSearchController;
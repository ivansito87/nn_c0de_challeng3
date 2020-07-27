import React from 'react';
import {Button} from "react-bootstrap";

class FilterControls extends React.Component {
    render() {
        return (
             <div>
                <Button variant="outline-dark" onClick={this.props.handleResume} className="mr-2">Stream</Button>
                <Button variant="outline-secondary" onClick={this.props.handlePause}>Pause</Button>
            </div>
        );
    }
}

export default FilterControls;
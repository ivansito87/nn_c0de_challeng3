import React from 'react';

class CardComponent extends React.Component {
    render() {
        let data = this.props.data;

        return (
            <h1 className="welcome-heading">Welcome to the twitter feed</h1>
        );
    }
}

export default CardComponent;
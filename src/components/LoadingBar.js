import React from 'react';

class LoadingBar extends React.Component {
    render() {
        return (
            <div style={{ width: "100%" }}>
                <p>Loading...</p>
                <div className="progress">
                    <span className="progress-bar" style={{ width: '100%' }}></span>
                </div>
            </div>
        );
    }
}
export default LoadingBar;
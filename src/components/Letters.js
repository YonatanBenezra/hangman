import React, { Component } from 'react';

class Letters extends Component {
    render() {
        let letters = []
        return (
        <div>
            {letters.map(l => <div>{l.letter}</div>)}
        </div>
        )
    }
}
export default Letters
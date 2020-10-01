import React, { Component } from 'react';
import Letters, { Component} from './Letters'
class Letter extends Component {
    render() {
        for ( let i = 0 ; i < Letters.letters.length ; i++){
            return (
            <div>
                {'_'}
            </div>
            )

        }
    }
}
export default Letter
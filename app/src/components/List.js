import React, { Component } from 'react';

class List extends Component {
    render(){
        return(
            <div class="list" style={{padding: 20}}>
                <h2>Available Projects</h2>
                <ul>
                    <li>Test Item</li>
                    <li>Test Item</li>
                    <li>Test Item</li>
                </ul>
            </div>
        )
    }
}

export default List
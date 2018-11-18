import React, { Component } from 'react';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/List.css';
class List extends Component {
    render(){
        return(
            <div class="list" className="col-sm-7">
                <h2>Available Projects</h2>
                <ul>
                    <li>
                        <div>
                            <h3>Item Name</h3>
                            <lead className="difficulty">Intermediate</lead>
                            <p>This is a short description of the issue listed above. Here is another space filling sentence to convey a longer message an issue owner may leave.</p>
                            <button className="btn btn-success btn-small">Take Project</button>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Item Name</h3>
                            <lead className="difficulty">Intermediate</lead>
                            <p>This is a short description of the issue listed above. Here is another space filling sentence to convey a longer message an issue owner may leave.</p>
                            <button className="btn btn-success btn-small">Take Project</button>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Item Name</h3>
                            <lead className="difficulty">Intermediate</lead>
                            <p>This is a short description of the issue listed above. Here is another space filling sentence to convey a longer message an issue owner may leave.</p>
                            <button className="btn btn-success btn-small">Take Project</button>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Item Name</h3>
                            <lead className="difficulty">Intermediate</lead>
                            <p>This is a short description of the issue listed above. Here is another space filling sentence to convey a longer message an issue owner may leave.</p>
                            <button className="btn btn-success btn-small">Take Project</button>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default List
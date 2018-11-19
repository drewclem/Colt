import React, { Component } from 'react';
import '../css/bootstrap/css/bootstrap.min.css';
import '../css/List.css';


class List extends Component {
    render(){
        return(
            <div className=" list col-sm-7">
                <h2>Available Projects</h2>
                <ul>
                    <li>
                        <div>
                            <h3>Item Name</h3>
                            <p className="difficulty">Intermediate</p>
                            <p>This is a short description of the issue listed above. Here is another space filling sentence to convey a longer message an issue owner may leave.</p>
                            <p className="btn btn-success btn-small">Take Project</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Item Name</h3>
                            <p className="difficulty">Intermediate</p>
                            <p>This is a short description of the issue listed above. Here is another space filling sentence to convey a longer message an issue owner may leave.</p>
                            <p className="btn btn-success btn-small">Take Project</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Item Name</h3>
                            <p className="difficulty">Intermediate</p>
                            <p>This is a short description of the issue listed above. Here is another space filling sentence to convey a longer message an issue owner may leave.</p>
                            <p className="btn btn-success btn-small">Take Project</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>Item Name</h3>
                            <p className="difficulty">Intermediate</p>
                            <p>This is a short description of the issue listed above. Here is another space filling sentence to convey a longer message an issue owner may leave.</p>
                            <p className="btn btn-success btn-small">Take Project</p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default List
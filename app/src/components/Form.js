import React, { Component } from 'react';
import'../css/Form.css';

class Form extends Component {
    render(){
        return(
            <form>
                <div className="form-control">
                    <label>Project Title:</label>
                    <input type="text"/>
                </div>
                
                <div className="form-control">
                    <label>Difficulty Level:</label>
                    <input type="text"/>
                </div>

                <div className="form-control">
                    <label>Github Link:</label>
                    <input type="text"/>
                </div>

                <div className="form-control">
                    <label>Email:</label>
                    <input type="text"/>
                </div>

                <div className="form-control">
                    <label>Issue Description:</label>
                    <textarea placeholder="Please provide a short description of the project issue."></textarea>
                </div>

                <button type="submit">Add Item</button>
            </form>
        )
    }
}

export default Form
import React, { Component } from 'react';
import'../css/Form.css';
import '../css/bootstrap/css/bootstrap.min.css';

class Form extends Component {
    render(){
        return(
            <div className="form col-md-5">
                <form>
                    <div className="row">
                        <div className="form-group col-xs-9">
                            <label>Project Title:</label>
                            <input type="text" className="form-control" placeholder="Please enter a name for the project"/>
                        </div>
                        
                        <div className="form-group col-xs-4">
                            <label>Difficulty Level:</label>
                            <select className="form-control">
                                <option>Easy</option>
                                <option>Intermediate</option>
                                <option>Hard</option>
                            </select>
                        </div>

                        <div className="form-group col-xs-8">
                            <label>Github Link:</label>
                            <input type="text" className="form-control" placeholder="Link to github repo"/>
                        </div>

                        <div className="form-group col-xs-6">
                            <label>Email:</label>
                            <input type="email" className="form-control" placeholder="Please enter a vaild email"/>
                        </div>

                        <div className="form-group col-xs-12">
                            <label>Issue Description:</label>
                            <textarea className="form-control" placeholder="Please provide a short description of the project issue."></textarea>
                        </div>

                        <div className="form-group col-xs-3">
                            <button type="submit" className="btn btn-danger form-control">Submit</button>
                        </div>
                        </div>
                </form>
            </div>
        )
    }
}

export default Form
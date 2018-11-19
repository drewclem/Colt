import React, { Component } from 'react';
import'../css/Form.css';
import '../css/bootstrap/css/bootstrap.min.css';

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            title: '',
            difficulty: '',
            link: '',
            email: '',
            description: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitChange = this.submitChange.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const name = target.name;
        let value = target.value;

        this.setState({
            [name]: value
        });
    }

    submitChange(event){
        alert([this.state.title,
               this.state.difficulty,
               this.state.link,
               this.state.email,
               this.state.description     
        ]);
    }

    render(){
        return(
            <div className="form col-md-5">
                <form onSubmit={this.submitChange}>
                    <div className="row">
                        <div className="form-group col-xs-9">
                            <label>Project Title:</label>
                            <input
                                name="title"
                                className="form-control"
                                placeholder="Please enter a name for the project"
                                type="text"
                                value={this.state.title}
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        
                       <div className="form-group col-xs-4">
                            <label>Difficulty Level:</label>
                            <select
                                name="difficulty"
                                className="form-control"
                                value={this.state.value}
                                onChange={this.handleChange}
                            >
                                    <option value="Easy">Easy</option>
                                    <option value="Intermediate">Intermediate</option>
                                    <option value="Hard">Hard</option>
                            </select>
                        </div>

                        <div className="form-group col-xs-8">
                            <label>Github Link:</label>
                            <input
                                name="link"
                                type="text"
                                className="form-control"
                                value={this.state.link}
                                onChange={this.handleChange}
                                placeholder="Link to github repo"
                                required
                            />
                                
                        </div>

                        <div className="form-group col-xs-6">
                            <label>Email:</label>
                            <input
                                name="email"
                                type="email"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder="Please enter a vaild email"
                                required
                            />
                        </div>

                        <div className="form-group col-xs-12">
                            <label>Issue Description:</label>
                            <textarea
                                name="description"
                                className="form-control"
                                value={this.state.description}
                                onChange={this.handleChange}
                                placeholder="Please provide a short description of the project issue." 
                                required
                            />
                        </div>

                        <div className="form-group col-xs-3">
                            <button
                                type="submit"
                                value="Submit"
                                className="btn btn-danger form-control"
                            >Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
import React, { Component } from "react";
import axios from "axios";
import Navbar from "./Navbar";

class NewBeer extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", description: ""};
  }

  handleFormSubmit = async event =>  {
    event.preventDefault();
    const name = this.state.name;
    const description = this.state.description;

    try{
        console.log()
        await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", { name, description })
       
        this.setState({ name: "", description: ""});
    } catch (error) {
        console.log(error)
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
        <div>
        <Navbar />
      <div className="beer-form">
          <h4>Add a New Beer</h4>
        <form onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <label>Name of the Beer</label>
          <input
            type="text"
            for="disabledTextInput"
            name="name"
            value={this.state.name}
            onChange={e => this.handleChange(e)}
            className="form-control"
          /></div>
          <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            for="disabledTextInput"
            value={this.state.description}
            onChange={e => this.handleChange(e)}
            className="form-control"
          /></div>
  

          <input className="btn btn-dark" type="submit" value="Add Beer" />
        </form>
      </div>
      </div>
    );
  }
}

export default NewBeer;


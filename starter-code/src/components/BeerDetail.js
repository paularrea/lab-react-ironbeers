import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

class BeerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getSingleBeer();
  }

  getSingleBeer = () => {
    const { params } = this.props.match;
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${params.id}`)
      .then(responseFromApi => {
        const theBeer = responseFromApi.data;
        this.setState(theBeer);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
        <div>
        <Navbar />
      <div className="details">
        <p className="btn btn-dark"><Link to={"/beers"} style={{ textDecoration: "none", color:"white" }}>Back to Beers</Link></p>
        <div className="beer-det row">
          <div className="col det-col">
            <img src={this.state.image_url} alt="" />
          </div>
          <div className="col det-col text-det text-left">
            <h1>{this.state.name}</h1>
            <p>{this.state.description}</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default BeerDetail;

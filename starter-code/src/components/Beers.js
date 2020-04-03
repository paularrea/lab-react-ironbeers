
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


class Beers extends Component {
  constructor() {
    super();
    this.state = { listOfBeers: [] };
  }

  getAllBeers = () => {
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`).then(responseFromApi => {
        console.log(responseFromApi)
      this.setState({
        listOfBeers: responseFromApi.data

      });
    });
  };

  componentDidMount() {
    this.getAllBeers();
}

render() {
    //console.log(this.state.listOfBeers)
    return (
        <div>
        <Navbar />
        <div>
         <div className="row ">
          {this.state.listOfBeers.map(beer => {
        
            return (
              <div className="col-lg-3 col-sm-12 col-md-6 beerCard" key={beer._id}>
                <Link to={`/beers/${beer._id}`}>
                    <img src={beer.image_url} alt=""/>
                    <h5>{beer.name}</h5>
                </Link>
                {/* <p style={{maxWidth: '400px'}} >{beer.description} </p> */}
              </div>
            );
          })}
        </div>
        {/* <div>
          <AddBeer getData={() => this.getAllBeers()} /> 
        </div> */}
      </div>
      </div>
    );
  }
}

export default Beers;
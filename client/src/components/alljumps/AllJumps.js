import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./alljumps.css";

class AllJumps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jumps: []
    };
  }

  componentDidMount() {
    axios
      .get(`${process.env.REACT_APP_BASE}/jump/allJumps`)
      .then(res => {  
        this.setState({
          jumps: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="allCards">
        {this.state.jumps.map(jump => {
          return (
            <div className="card allUserJumpsCard large">
              <img src={jump.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  {jump.start}{" "}
                  <i id="plane" className="material-icons prefix">
                    airplanemode_active
                  </i>{" "}
                  {jump.end}
                </h5>
                <p>{jump.duration} Days</p>
                <p className="card-text">{jump.description}</p>
              </div>
              <div className="card-action">
                <Link
                  key={jump._id}
                  to={`/viewJump/${jump._id}`}
                  className="homelink"
                >
                  View this Jump
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
export default AllJumps;

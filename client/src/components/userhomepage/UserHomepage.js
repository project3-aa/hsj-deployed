import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import("./userhomepage.css");

class UserHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userJumps: []
    };
  }

  getAllUserJumps(id) {
    // console.log(`${process.env.REACT_APP_BASE}/jump/userJumps/${id}`);
    axios
      .get(`${process.env.REACT_APP_BASE}/jump/userJumps/${id}`)
      .then(allTheJumps => {
        this.setState({ userJumps: allTheJumps.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    setTimeout(() => {
      this.getAllUserJumps(this.props.theUser._id);
    }, 200);
  }

  showAllUserJumps = () => {
    return this.state.userJumps.map(eachJump => {
      // let skipLength = Object.keys(eachJump.skip).length
      // if(skipLength > 1){
      // return <h1>Jump Title: {eachJump.skip[0].city} ===>>> {eachJump.skip[eachJump.skip.length -1].city}</h1>
      // }

      return (
        <div key={eachJump._id} className="card eachUserCard large">
          <img src={eachJump.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">
              {eachJump.start}{" "}
              <i id="plane" className="material-icons prefix cardPlane">
                airplanemode_active
              </i>{" "}
              {eachJump.end}
            </h5>
            <p>{eachJump.duration} Days</p>
            <p className="card-text">{eachJump.description}</p>
          </div>
          <div className="card-action">
            <Link to={`/viewJump/${eachJump._id}`} className="homelink">
              View this Jump
            </Link>
          </div>
        </div>
      );
    });
  };

  // <div key={eachJump._id} className='each-jump'>
  //         <div className='jump-desc'>
  //           <Link to={`/viewJump/${eachJump._id}`} className='homelink'>
  //             <h5>{eachJump.start} <i  id="plane" className="material-icons prefix">airplanemode_active</i> {eachJump.end}</h5>
  //           </Link>
  //           <h4>{eachJump.tagline}</h4>
  //           <p>this trip took {eachJump.duration} days</p>
  //           <p>{eachJump.description}</p>
  //         </div>
  //       </div>
  // =-=-=-=-=-=-=-=-=-=-=-

  getTotalUserSkips() {
    let totalUserSkips = 0;
    let theJumps = this.state.userJumps;
    theJumps.forEach(eachJump => {
      return (totalUserSkips += eachJump.skip.length);
    });
    return totalUserSkips;
  }

  getTotalUserJumps() {
    return this.state.userJumps.length;
  }

  render() {
    return (
      <div className="userHome">
        <div className="userLinks">
          <Link to="/createJump">CREATE A NEW JUMP</Link>
          <Link to="/allJumps">ALL JUMPS</Link>
        </div>
        <hr />

        <p>Travler {this.props.theUser.username}</p>
        <div className="lifeTime">
          <p> {this.getTotalUserJumps()} lifetime Jumps</p>
          <hr />
          <p> {this.getTotalUserSkips()} lifetime skips</p>
        </div>
        <div className="allUserCards">{this.showAllUserJumps()}</div>
      </div>
    );
  }
}

export default UserHomepage;

import React, { Component } from "react";
import DisplayHop from "../displayhop/DisplayHop.js";
import CreateHop from "../createhop/CreateHop.js";
import {Link} from 'react-router-dom';
import axios from "axios";
import "./displayskip.css";

class DisplaySkip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theSkip: this.props.theSkipInfo,
      editable: false
    };
  }

  renderHops() {
    if (this.props.theSkipInfo.hop) {
      return this.props.theSkipInfo.hop.map(hop => {
        return (
          <DisplayHop
            key={hop._id}
            theHopInfo={hop}
            theUser={this.props.theUser}
            hopOwner={this.props.theSkipInfo._id}
            jumpOwner={this.props.jumpId}
            showJumpAgain={this.props.showJumpAgain}
          />
        );
      });
    } else {
      return null;
    }
  }

  renderHopAdd() {
    if (
      this.props.theSkipInfo &&
      this.props.theUser._id === this.props.jumpOwner
    ) {
      return <CreateHop showJumpAgain={this.props.showJumpAgain} hopOwner={this.props.theSkipInfo._id} />;
    }
  }

  deleteSkip(id) {
    axios
      .post(
        `${process.env.REACT_APP_BASE}/skip/deleteSkip/` +
          this.props.jumpId +
          "/" +
          id
      )
      .then(() => {
        // console.log('test======', this.props.jumpId);
        this.props.showJumpAgain()
      })
      .catch(err => {
        console.log(err);
      });
  }

  renderDeleteButton = () =>{

    if(this.props.theUser && this.props.jumpOwner === this.props.theUser._id){
      return <button
      onClick={() => {
        this.deleteSkip(this.props.theSkipInfo._id);
      }}
    >
      Delete Skip
    </button>
    }
  }



  renderEditButton = () =>{

    if(this.props.theUser && this.props.jumpOwner === this.props.theUser._id){
      return  <button><Link to={{
        pathname: `/editSkip/${this.props.theSkipInfo.jumpOwner}`, 
        state: {
          skipId: this.props.theSkipInfo._id,
          city: this.props.theSkipInfo.city,
          arrivedBy: this.props.theSkipInfo.arrivedBy,
          duration: this.props.theSkipInfo.duration, 
          description: this.props.theSkipInfo.description
        }}
      }>Edit This Skip</Link></button>
    }
  }

  render() {
    // console.log('this is the skip info----',this.props) //<<<<this returns info!!!!!!
    // console.log('the state-----',this.state);
    return (
      <div className="eachskip">
        <h5>{this.props.theSkipInfo.city}</h5>
        <h5>Arrived by: {this.props.theSkipInfo.arrivedBy}</h5>
        <h5>Days Spent: {this.props.theSkipInfo.duration}</h5>
        <h5>How it went: {this.props.theSkipInfo.description}</h5>
        {this.renderEditButton()}
        {this.renderHops()}
        {this.renderHopAdd()}
        {this.renderDeleteButton()}
      </div>
    );
  }
}

export default DisplaySkip;

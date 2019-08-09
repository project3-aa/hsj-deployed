import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import './displayhop.css'


class DisplayHop extends Component{

  constructor(props){
    super(props)
    this.state = {
      theHop: []
    }
  }


  deleteHop(id) {
    axios.post(`${process.env.REACT_APP_BASE}/hop/deleteHop/` + this.props.hopOwner + "/" + id)
      .then(theHopToDelete => {
        this.props.showJumpAgain()
      })
      .catch(err => {
        console.log(err);
      });
  }


  render(){
    return(

      <div className="eachSkipsHop">
          <div className="eachhop">
            <h4>A Hop:</h4>
              <p>Point Of Intrest: {this.props.theHopInfo.poi}</p>
              <p>Arrived by: {this.props.theHopInfo.arrivedBy}</p>
              <p>What happened: {this.props.theHopInfo.description}</p>
       <Link to={{
         pathname: `/editHop/${this.props.jumpOwner}`,
         state:{
           hopId: this.props.theHopInfo._id,
           POI: this.props.theHopInfo.poi,
           arrivedBy: this.props.theHopInfo.arrivedBy,
           description: this.props.theHopInfo.description,
         }
       }}>Edit This Hop</Link>
      <button
          onClick={() => {
            this.deleteHop(this.props.theHopInfo._id);
          }}>
          Delete Hop
        </button>
          </div>
    
      </div>
    )
  }
}

export default DisplayHop;
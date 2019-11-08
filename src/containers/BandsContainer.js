import React, { Component } from "react";
import { connect } from "react-redux";
import BandInput from "../components/BandInput.js";
class BandsContainer extends Component {
  makeBands = bands => {
    return bands.map(band => {
      return <li>{band.name}</li>;
    });
  };

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        {this.makeBands(this.props.bands)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({ type: "ADD_BAND", payload: formData })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BandsContainer);

import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { connect } from "react-redux";

class Info extends Component {
  render() {
    return (
      <div>
        <h1>List</h1>
        <ListGroup>{this.props.items.map(item=> (
          <ListGroupItem>{item}</ListGroupItem>
         ))}</ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.itemReducer,
  };
}

export default connect(mapStateToProps)(Info);

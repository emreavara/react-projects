import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { bindActionCreators } from "redux";
import * as itemActions from "../../redux/actions/itemActions";

class Info extends Component {


  randomNumberInRange(min=0, max=100000000000) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  removeItemFromItems(removedItem) {
    this.props.actions.removeItemSuccess(removedItem);
  }
  render() {
    return (
      <div>
        <h1>TODO List</h1>
        <ListGroup>
          {this.props.items.map((item) => (
            <ListGroupItem key={this.randomNumberInRange()}>
              <Button color="danger" onClick={this.removeItemFromItems(item)}>Delete Item</Button> {item}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.itemReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      removeItemSuccess: bindActionCreators(itemActions.removeItemSuccess, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);

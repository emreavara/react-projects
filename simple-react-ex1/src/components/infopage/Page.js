import React, { Component } from "react";
import { connect } from "react-redux";
import { FormGroup, Label } from "reactstrap";
import { Row, Col, Button } from "reactstrap";
import { bindActionCreators } from "redux";

import * as itemActions from "../../redux/actions/itemActions";

class Page extends Component {
  state = {
    itemName:"",
  };

  handleInputText = (event) => {
    this.setState({ itemName: event.target.value });
  };

  saveItem = () => {
    this.props.actions.addNewItemSuccess(this.state.itemName);
  };

  render() {
    return (
      <div>
        <FormGroup>
          <h3>Add New TODO Item</h3>
          <Row>
            <Col xs="2">
              <Label>Add an item : </Label>
            </Col>
            <Col xs="3">
              <input
                onChange={this.handleInputText}
                placeholder="Enter an item name"
                id="title"
                type="text"
              ></input>
            </Col>
          </Row>
          <Button color="warning" onClick={this.saveItem}>
            Add Item
          </Button>
        </FormGroup>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      addNewItemSuccess: bindActionCreators(
        itemActions.addNewItemSuccess,
        dispatch
      ),
    },
  };
}

export default connect(null, mapDispatchToProps)(Page);

import React, { Component } from 'react';
import {Row, Col} from "reactstrap";
import Navi from "../navi/Navi"
import Info from "../infopage/Info"
import Page from "../infopage/Page"
export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navi/>
        <Row>
          <Col xs="1"></Col>
        <Col xs="5"><Info/></Col>
        <Col xs="6"><Page/></Col>
        </Row>
      </div>
    )
  }
}

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
        <Col xs="3"><Info/></Col>
        <Col xs="3"><Page/></Col>
            

        </Row>
      </div>
    )
  }
}

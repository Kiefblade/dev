import React from 'react';
import Thumb from './Thumb';
import {Grid, Row, Col} from 'react-bootstrap';

function Body(){
  return(
    <Grid>
      <Row>
        <Col xs={4}>
          <Thumb description="Whatever1" />
        </Col>
        <Col xs={4}>
          <Thumb description="Whatever2" />
        </Col>
        <Col xs={4}>
          <Thumb description="Whatever3" />
        </Col>
        <Col xs={4}>
          <Thumb description="Whatever4" />
        </Col>
        <Col xs={4}>
          <Thumb description="Whatever5" />
        </Col>
        <Col xs={4}>
          <Thumb description="Whatever6" />
        </Col>
        <Col xs={4}>
          <Thumb description="Whatever7" />
        </Col>
        <Col xs={4}>
          <Thumb description="Whatever8" />
        </Col>
        <Col xs={4}>
          <Thumb description="Whatever9" />
        </Col>
        <Col xs={4}>
          <Thumb description="Whatever10" />
        </Col>
      </Row>
    </Grid>
  )
}

export default Body;

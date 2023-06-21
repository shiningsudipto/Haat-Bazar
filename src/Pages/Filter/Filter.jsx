import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FilterLeftside from './FilterLeftside';
import './Filter.css'
import FilteRightSide from './FilteRightSide';
import PlaceNameSideNav from '../../Components/DrawerSideNav';
import Button from 'react-bootstrap/Button';
import Slider from '../Shared/Slider';



const Filter = () => {

  return (
    <section>
      <Slider />
      {/* Its  for  small  device  */}
      <div className='mt-5'>
        <PlaceNameSideNav />
      </div>
      <Container>
        <Row>
          {/* Filter section Left side  */}
          <Col lg={3} xl={3} xxl={3} className='d-lg-block d-xxl-block d-xl-block d-none' >
            <FilterLeftside />
          </Col>
          {/* Data show right side  */}
          <Col lg={9}>
            <FilteRightSide />
          </Col>
        </Row>
      </Container>
    </section>

  );
};

export default Filter;
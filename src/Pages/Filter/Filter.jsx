import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FilterLeftside from './FilterLeftside';
import './Filter.css'
import FilteRightSide from './FilteRightSide';
import PlaceNameSideNav from '../../Components/PlaceNameSideNav';
import Button from 'react-bootstrap/Button';



const Filter = () => {
  
    return (
        <section>

        {/* Its  for  small  device  */}
        <div>
         <PlaceNameSideNav   />
        </div>

       <Container>
          <Row>
            {/* Filter section Left side  */}
             <Col lg={3} >
                <FilterLeftside/>
             </Col>
             {/* Data show right side  */}
             <Col lg={9}>
              <FilteRightSide/>
             </Col>
          </Row>
        </Container>
        </section>
       
    );
};

export default Filter;
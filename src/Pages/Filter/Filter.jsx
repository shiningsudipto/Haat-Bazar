import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FilterLeftside from './FilterLeftside';
import './Filter.css'
import FilteRightSide from './FilteRightSide';


const Filter = () => {
    return (
        <section>
        
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
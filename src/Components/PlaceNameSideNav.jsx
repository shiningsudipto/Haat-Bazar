import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Places from  '../../public/location.json';
import Categories from '../../public/category.json';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const PlaceNameSideNav = () => {
//   Place Name offcanvas controller  
  const [PlaceShow , setPlaceShow] = useState(false);
  const PlaceClose = () => setPlaceShow(false);
  const handlePlaceName = () =>  setPlaceShow(true) ;

//   Category Offcanvas controller 
  const [CategoryShow,setCategoryShow] = useState(false)
  const CategoryClose = () =>  setCategoryShow(false)
  const handleCategory = () =>  setCategoryShow(true); 

//  Filter offcanvas coontroller  
  const [FilterShow,setFilterShow] = useState(false)
  const FilterClose = () => setFilterShow(false)
  const handleFilter = () => setFilterShow(true) ;

    return (
        <Container className='d-flex justify-content-between'>
        {/* Place name side nav start here  */}
       <div>
      <Button variant="primary" className="d-lg-none" onClick={handlePlaceName}>
        Location <FaMapMarkerAlt/>
      </Button>
      <Offcanvas show={PlaceShow} onHide={PlaceClose} responsive="lg" className='d-lg-none d-xxl-none d-xl-none d-block'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="mb-0">
            {
                Places.map((p,i) => (<p key={i}> {p.placeName} </p>))
            }
          </p>
         </Offcanvas.Body>
        </Offcanvas>
       </div>
        {/* Place name side nav end here  */}
      

        {/* Category name side nav start here  */}
        <div>
      <Button variant="primary" className="d-lg-none" onClick={handleCategory}>
       Category 
      </Button>
      <Offcanvas show={CategoryShow} onHide={CategoryClose} responsive="lg" className='d-lg-none d-xxl-none d-xl-none d-block'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="mb-0">
            {
                Categories.map((p,i) => (<p key={i}> {p.category} </p>))
            }
          </p>
         </Offcanvas.Body>
        </Offcanvas>
       </div>
        {/* Category name side nav end here  */}
       

       
        {/* Filter  side nav start here  */}
        <div>
      <Button variant="primary" className="d-lg-none" onClick={handleFilter}>
       Filter
      </Button>
      <Offcanvas show={FilterShow} onHide={FilterClose} responsive="lg" className='d-lg-none d-xxl-none d-xl-none d-block'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Responsive offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="mb-0">
            {
            }
          </p>
         </Offcanvas.Body>
        </Offcanvas>
       </div>
        {/* Filter name side nav end here  */}
      

     </Container>
    );
};

export default PlaceNameSideNav;
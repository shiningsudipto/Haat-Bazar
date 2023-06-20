import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaList, FaMapMarkerAlt, FaSlidersH } from 'react-icons/fa';
import Places from  '../../public/location.json';
import Categories from '../../public/category.json';
import { Link } from 'react-router-dom';
import { Accordion, Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


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
      <Button variant="" className="d-lg-none fw-bold " onClick={handlePlaceName}>
        Location <FaMapMarkerAlt className='text-primary'/>
      </Button>
      <Offcanvas show={PlaceShow} onHide={PlaceClose} responsive="lg" className='d-lg-none d-xxl-none d-xl-none d-block'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> Filter  by Location </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="mb-0">
            {
                Places.map((p,i) => (<p key={i} > <Link to={'/'} className='text-decoration-none'> {p.placeName} </Link> </p>))
            }
          </p>
         </Offcanvas.Body>
        </Offcanvas>
       </div>
        {/* Place name side nav end here  */}
      


        {/* Category name side nav start here  */}
        <div className='border-start'>
      <Button variant="" className="d-lg-none fw-bold" onClick={handleCategory}>
       Category <FaList classNameName='text-primary'/>
      </Button>
      <Offcanvas show={CategoryShow} onHide={CategoryClose} responsive="lg" className='d-lg-none d-xxl-none d-xl-none d-block'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> Filter by category  </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="mb-0">
            {
                Categories.map((p,i) => (<p key={i}> <Link className='text-decoration-none'  to={'/'} > {p.category} </Link> </p>))
            }
          </p>
         </Offcanvas.Body>
        </Offcanvas>
       </div>
        {/* Category name side nav end here  */}
       

       
        {/* Filter  side nav start here  */}
        <div className='border-start'>
      <Button variant=" " className="d-lg-none fw-bold" onClick={handleFilter}>
       Filter <FaSlidersH className='text-primary'/>
      </Button>
      <Offcanvas show={FilterShow} onHide={FilterClose} responsive="lg" className='d-lg-none d-xxl-none d-xl-none d-block'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title> Filter </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

         {/* filter form   */}
        <form>
        <Form.Select aria-label="Default select example">
      <option value={''}> Date: Newest On Top</option>
      <option value="1"> Date: Oldest  On Top </option>
      <option value="2"> Price High to  Low  </option>
      <option value="3"> Price Low to High </option>
       </Form.Select>
        
        <Accordion className='mt-3'  >
        <Accordion.Item eventKey="0">
        <Accordion.Header > Type of Add  </Accordion.Header>
        <Accordion.Body>
        <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" >
          For Sale  
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
        <label className="form-check-label" >
          For Wanted
        </label>
        </div>
        </Accordion.Body>
       </Accordion.Item>
        </Accordion>

        <div className='mt-2'>
        <label className="form-label fw-semibold">Price Tk   </label>
        <div className='d-flex gap-4 ' >
        <div className="mb-3">
        <label className="form-label fw-semibold text-secondary"> Min    </label>
          <input type="number" className="form-control" id="minprice" placeholder='min'/>
        </div>
        <div className="mb-3">
        <label className="form-label fw-semibold text-secondary"> Max    </label>
          <input type="number" className="form-control" id="maxprice" placeholder="max" />
        </div>
        </div>
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" >Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
         </Offcanvas.Body>
        </Offcanvas>
       </div>
        {/* Filter name side nav end here  */}
      

     </Container>
    );
};

export default PlaceNameSideNav;
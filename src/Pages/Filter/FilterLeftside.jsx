import React, { useEffect, useState } from 'react';
import { BiSearch,BiChevronDown } from "react-icons/bi";
import './Filter.css'
import { Link } from 'react-router-dom';
import {  Form} from 'react-bootstrap';
import VolumeSlider from '../../Components/RangeSlider';




const FilterLeftside = () => {
    const [places,setPlaces] = useState([])
    const [categories,setCategories]  = useState([])

    // places name 
    useEffect(()=>  {
        fetch('/location.json')
        .then(res =>  res.json())
        .then(data => setPlaces(data))
    },[])

    useEffect(()=>  {
        fetch('/category.json')
        .then(res => res.json())
        .then(category => setCategories(category))
    },[])
    
    

    return (
        <section className='filter-leftside'>
            {/* Title and serach field  */}
            <div className='pt-3'>
                <h6> Location </h6>
                <div className="form-group has-search">
                <span className=" form-control-feedback"> <BiSearch className='text-black'/> </span>
                <input type="text" className="form-control text-black" placeholder="Search" />
                </div>
            </div>

             {/* Location   */}
            <div className='mt-2'>
             <h6> In Bangladesh:  </h6>
             {places.map((place,i)  =>  (<p  key={i} style={{display:"flex"  , justifyContent:'space-between'}}> {place.placeName} <span className='text-secondary'> ( {place.animalNumber} ) </span> </p>))}
             <Link className='text-primary text-decoration-none'>  View more <BiChevronDown/> </Link>
            </div>

            {/* All Categories  */}
            <div className='mt-2'>
             <h6> All Categories </h6>
             {categories.map((cat,i)=> (<p key={i}  style={{display:"flex"  , justifyContent:'space-between'}}> {cat.category} <span>  ({cat.animalNumber}) </span> </p>))}
            </div>

             {/* Weight Range  */}
            <div>
             <h6> Weight  Range </h6>
             <VolumeSlider/>
              <h6> Weight: <span className='text-secondary'>100kg - 120kg  </span></h6>
            </div>

             {/* Gender   */}
            <div>
             <h6> Gender  </h6>
             <div  className="form-check p-0" >
             <div>
             <input className=" " type="checkbox" value="" id="male"/>
             <label className="form-check-label ms-1" >
                Male 
             </label>
             </div>
            <div>
            <input className="" type="checkbox" value="" id="female"/>
             <label className="form-check-label ms-1" >
                Female 
             </label>
            </div>
            </div>
            </div>
            
            {/* Clear filter button  */}
            <div className='clear-filter mt-3 mb-5'>
              <button className='btn-style' type='reset'> Clear  Filter   </button>
            </div>
        </section>
    );
};

export default FilterLeftside;
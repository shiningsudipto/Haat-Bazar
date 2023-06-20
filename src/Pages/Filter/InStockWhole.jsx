import React, { useEffect, useState } from 'react';
import CardSection from './CardSection';

const InStockWhole = () => {
    const [products,setProducts] = useState([])
    useEffect(()=>  {
        fetch('/product.json')
        .then(res =>res.json())
        .then(data =>  setProducts(data))
    },[])
    return (
        <div>
            <CardSection data={products}/>
        </div>
    );
};

export default InStockWhole;
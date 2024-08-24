import React from 'react';
import './index.css';

const Business = ({business}) =>{
    return (
        <div className='business'>
            <div className='img-container'>
                <img src={business.imageSrc} alt={business.name} className='business-img'/>
            </div>
            <h2 className='business-name'>{business.name}</h2>
            <div className='info-container'>
                <p>{business.address}</p>
                <h2 className='category'>{business.category}</h2>
                <p>{business.city}, {business.state}</p>
                <h4 className='rating'>{business.rating} stars</h4>
                <p>{business.zip}</p>
                <p>{business.reviewCount} reviews</p>
            </div>
        </div>
    );
}

export default Business;
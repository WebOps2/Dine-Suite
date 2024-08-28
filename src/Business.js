import React from 'react';
import './index.css';

const Business = (props) =>{
    return (
        <div className='business'>
            <div className='img-container'>
                <img src={props.business.imageSrc} alt={props.business.name} className='business-img'/>
            </div>
            <h2 className='business-name'>{props.business.name}</h2>
            <div className='info-container'>
                <div className='sub-container'>
                    <p>{props.business.address}</p>
                    <h2 className='category'>{props.business.category}</h2>
                </div>
                <div className='sub-container'>
                    <p>{props.city}, {props.business.state}</p>
                    <h4 className='rating'>{props.business.rating} stars</h4>
                </div>
                <div className='sub-container'>
                    <p>{props.business.zip}</p>
                    <p>{props.business.reviewCount} reviews</p>
                </div>
            </div>
        </div>
    );
}

export default Business;
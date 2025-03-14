import React from "react";
import Business from './Business';

const BusinessList = ({ businesses })=>{
    return (
        <div className="container">
            <div className="BusinessList">
                {businesses.length > 0 ? (
                    businesses.map((business) => (
                    <Business key={business.id} business={business} />
                    ))
                ) : (
                    <p>No results found. Try a different search.</p>
                )}
            </div>
        </div>
        
    )
}
// bussiness-list
export  default BusinessList; 
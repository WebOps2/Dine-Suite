import React from "react";
import { businessList } from "./App";
import Business from './Business';

const BusinessList = ()=>{
    return (
        <div className="container">
            <div className="bussiness-list">
                {businessList.map((business, index) => <Business  business={business} key={index} />)}
            </div>
        </div>
        
    )
}

export  default BusinessList; 
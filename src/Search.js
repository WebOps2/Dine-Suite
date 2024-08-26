import React from "react";
import "./index.css";



const searchOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most reviewed':'review_count'
}
const Search = () =>{

    const SearchOption = ()=>{
        const arrOptions = Object.keys(searchOptions)
        return arrOptions.map(option =>{
            const optionVal = searchOptions[option]
            return (
                <li key={optionVal}>{option}</li>
            )
        })
    }

    return (
        <div className="search-container">
            <div className="search-option-container">
                <ul>{SearchOption()}</ul>
                <hr></hr>
            </div>
            <div className="auto">
                <div className="box"></div>
                <div className="box"></div>

            </div>
        </div>
        
    )
    
}

export default Search;
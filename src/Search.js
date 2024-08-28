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
            return <li key={optionVal}>{option}</li>
        })
    }

    return (
        <div>
            <h1>Dine Suite</h1>
            <div className="search-container">
                <div className="search-option-container">
                    <ul>{SearchOption()}</ul>
                    <hr></hr>
                </div>
                <div className="auto">
                    <input type="text" placeholder="Search Business" id="search-business"></input>
                    <input type="text" placeholder="Where ?"></input>
                </div>
                <div className="btn">
                    <button>Let's Go</button>
                </div>
            </div>
        </div>
       
        
    )
    
}

export default Search;
import React, { useState } from "react";



const searchOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most reviewed':'review_count'
}


const Search = () =>{

    const [searchInput, setSearchInput] = useState('')
    const [locationInput, setLocationInput] = useState('')
    const [searchValues, setSearchValues] = useState('best_match')

    const handleSortByChange = (sortByOption) => {
        setSearchValues(sortByOption);
      };

    const handleSearchByChange = (e) =>{
        setSearchInput(e.target.value)
    }
    const handleLocationByChange = (e) =>{
        setLocationInput(e.target.value)
    }

    const handleButtonByChange = (event) =>{
        event.preventDefault()
        setSearchInput('')
        setLocationInput('')
        console.log(`Searching Yelp with ${searchInput}, ${locationInput}, ${searchValues} `)
    }

    const SearchOption = ()=>{
        const arrOptions = Object.keys(searchOptions)
        return arrOptions.map(option =>{
            const optionVal = searchOptions[option]
            return <li key={optionVal}
            onClick={()=>{
                handleSortByChange(optionVal)
            }}>{option}</li>
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
                <form className="auto" onSubmit={handleButtonByChange}>
                    <div className="auto-wrapper">
                        <input type="text" placeholder="Search Business" id="search-business" onChange={handleSearchByChange} value={searchInput}></input>
                        <input type="text" placeholder="Where ?" onChange={handleLocationByChange} value={locationInput}></input>
                    </div>
                    <div className="btn">
                        <button>Let's Go</button>
                    </div>
                </form>
                
            </div>
        </div>
       
        
    )
    
}

export default Search;
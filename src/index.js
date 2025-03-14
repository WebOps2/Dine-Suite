import React from 'react';
import BusinessList from './businessList.js';
import './index.css';
import Search from './Search.js';
import Yelp from './Utility.js';

function App() {
  const [businesses, setBusinesses] = useState([]);
  const [searchParams, setSearchParams] = useState({
    term: 'Pizza', // Default search term
    location: 'New York',
    sortBy: 'best_match',
  });

  useEffect(() => {
    Yelp.search(searchParams.term, searchParams.location, searchParams.sortBy)
      .then(setBusinesses)
      .catch((error) => console.error('Error fetching businesses:', error));
  }, [searchParams]);

  const searchYelp = (term, location, sortBy) => {
    setSearchParams({ term, location, sortBy });
  };

  return (
    <div className="app">
      <h1>Ravenous</h1>
      <Search onSearch={searchYelp} />
      <BusinessList businesses={businesses} />
    </div>
  );
}

export default App;




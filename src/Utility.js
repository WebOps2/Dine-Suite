// src/utils/Yelp.js
const Yelp = {
    search(term, location, sortBy) {
      const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'; // If needed
      const url = `${corsAnywhere}https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
  
      return fetch(url)
        .then((response) => response.json())
        .then((jsonResponse) => {
          if (jsonResponse.businesses) {
            return jsonResponse.businesses.map((business) => ({
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0]?.title,
              rating: business.rating,
              reviewCount: business.review_count,
              url: business.url,
            }));
          } else {
            return [];
          }
        })
        .catch((error) => console.error('Error fetching data:', error));
    },
  };
  
  export default Yelp;
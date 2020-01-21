// ClientID = JA675BvcF7K1B_B3bZTRfA
// APIKey = t8lWxUr-hSDiJyk_1culi2_R6me7MRluOG437WsZF2BNJW-AJVTdXWqG1gP_3qZUatCI9Wgt5eFWxttWl0NvvhTYYbNXy3rjdGgk9oyPThgUS-FoyWQR3QZT2BwnXnYx


const apiKey = "t8lWxUr-hSDiJyk_1culi2_R6me7MRluOG437WsZF2BNJW-AJVTdXWqG1gP_3qZUatCI9Wgt5eFWxttWl0NvvhTYYbNXy3rjdGgk9oyPThgUS-FoyWQR3QZT2BwnXnYx";

let Yelp = {
    async search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                        latitude: business.coordinates.latitude,
                        longitude: business.coordinates.longitude,
                        url: business.url
                    };
                });
            }

        });
    }
}

export default Yelp;
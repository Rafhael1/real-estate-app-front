import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: 'Bearer 3ejQiP8-1yCrySA8oi7MuFK_KQah4IbopVWkPjJVZRhrBj8ZRIBobQMkXEXV-VOhaHkl9w0FQ2O1nkM7UJkbKAM3ML1zL2P6-V5C6eHjVG9wsOcLLR6D-ZkDee_YX3Yx',
    }
});
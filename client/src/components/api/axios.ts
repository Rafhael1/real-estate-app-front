import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer iPaYayv71Te89ugamP23FD5HfSIWqWQVb510IBgPbANQgy4YE2TlPI_XVIuABR9R2dsvAX2tn1WSLBkox9cEejOOjA4gw1XcRO4Y3bYLZaiVK7WwcHya62veBOG3YHYx',
    }
});
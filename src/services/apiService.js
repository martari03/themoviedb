import axios from "axios";

import {baseURL} from "../configs";

const apiService = axios.create({baseURL});

const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZmZkZjU5MmRmZWVkYzMyNGZhZjAzZGNmYmUxNzQyOCIsInN1YiI6IjYzZWZjYjQ0MTUzNzZjMDA4MzM1M2FlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-dt0dMRUu51bZH8CiV9O0Mrj9ni9gU7bjxO7JdWLRHU';

apiService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
});

export {apiService};
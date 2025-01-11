// src/api/github.js
import axios from 'axios';

export const searchRepositories = async (query) => {
  try {
    const response = await axios.get(`https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc`);
    return response.data.items;  // Ensure you're accessing the correct response property
  } catch (error) {
    console.error('Error fetching repositories:', error);
    throw error;
  }
};

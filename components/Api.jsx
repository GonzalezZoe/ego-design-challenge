"use client";
import axios from "axios";

export const fetchData = async () => {
  const url = 'https://challenge.egodesign.dev/api/models/';
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log('Error: ', error);
    return [];
  }
};

import axios from 'axios';

const API_KEY = 'wAmtSpOLvKe5W-hiv5mJ4QEDklU-j-EW13Zaxs8zhgk';

export const fetchRandomPhoto = async () => {
  try {
    const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=${API_KEY}`);
    return response.data.urls.regular;
  } catch (error) {
    console.error(error);
    return null;
  }
};

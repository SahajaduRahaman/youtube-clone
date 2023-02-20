import axios from 'axios';

const Base_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'cdc82904bemshc31ed5f4d7b6fcep1f5b09jsn2a01e08080f5',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const rapidAPI = async (url) => {
  const { data } = await axios.get(`${Base_URL}/${url}`, options);

  return data;
}
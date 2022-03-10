/** @format */
import { useState, useEffect } from 'react';

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: '' });
  const [data, setData] = useState(null);
  const AUTH_API_ENDPOINT = `https://id.twitch.tv/oauth2/token?client_id=${process.env.REACT_APP_TWITCH_ID}&client_secret=${process.env.REACT_APP_TWITCH_SECRET}&grant_type=client_credentials`;

  const fetchTwitchData = (urlApiData) => {
    const { endpoint, body } = urlApiData;
    setIsLoading(true);
    fetch(AUTH_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        return res.access_token;
      })
      .then((token) => {
        const headers = { 'Client-ID': process.env.REACT_APP_TWITCH_ID, 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json', 'Accept': 'application/json' };
        const requestOptions = {
          method: 'POST',
          headers,
          body,
        };
        fetch(`/v4/${endpoint}`, requestOptions)
          .then((response) => {
            if (!response.ok) {
              setError({ show: true, msg: 'Something went wrong' });
            }
            return response.json();
          })
          .then((result) => {
            setIsLoading(false);
            setData(result);
          });
      })
      .catch((error) => {
        setIsLoading(false);
        setError({ show: true, msg: error.message });
      });
  };

  useEffect(() => {
    fetchTwitchData(urlParams);
  }, []);
  return { isLoading, error, data };
};

export default useFetch;

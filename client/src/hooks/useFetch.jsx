


import axios from "axios"
import { useEffect, useState } from "react"

const baseURL = import.meta.env.VITE_REACT_API_URI;
const useFetch = (endpoint, includeCredentials = false) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Skip the fetch if endpoint is null/undefined/empty
    if (!endpoint) {
      setLoading(false);
      setData(null);
      setError(null);
      return;
    }

    setLoading(true);
    const url = `${baseURL}/${endpoint}`;
    const axiosConfig = includeCredentials ? { withCredentials: true } : {};
    
    axios
      .get(url, axiosConfig)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err.response ? err.response.data : err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [endpoint, includeCredentials]);

  function refetch() {
    // Skip the refetch if endpoint is null/undefined/empty
    if (!endpoint) {
      return;
    }

    setLoading(true);
    const url = `${baseURL}/${endpoint}`;
    const axiosConfig = includeCredentials ? { withCredentials: true } : {};
    
    axios
      .get(url, axiosConfig)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        setError(err.response ? err.response.data : err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  
  return { data, loading, error, refetch };
};
export default useFetch







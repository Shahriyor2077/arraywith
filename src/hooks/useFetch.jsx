import { useEffect, useState } from "react";
import { api } from "../api";

export const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!endpoint) {
      setLoading(false);
      return;
    }
    
    setLoading(true);
    setError(null);
    setData(null);
    
    api
      .get(endpoint)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error('API Error:', err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [endpoint]);

  return {data, loading, error}
};

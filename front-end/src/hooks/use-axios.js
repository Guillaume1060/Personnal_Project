import { useState, useEffect } from "react";
import axios from "axios";

function useAxios(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(url, {
          withCredentials: true,
        });
        setData(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  async function postData(newData) {
    try {
      const response = await axios.post(url, newData);
      setData((prevData) => [...prevData, response.data]);
    } catch (error) {
      setError(error);
    }
  }
  async function resetData() {
    setData([]);
  }

  return { data, loading, error, postData, resetData };
}

export default useAxios;

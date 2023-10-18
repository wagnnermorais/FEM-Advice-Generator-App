import { useEffect, useState } from "react";
import axios from "axios";

const useGenerateAdvice = () => {
  const [id, setId] = useState(null);
  const [data, setData] = useState(null);

  const url = "https://api.adviceslip.com/advice";

  const getAdvice = async () => {
    try {
      const response = await axios.get(url);
      setId(response.data.slip.id);
      setData(response.data.slip.advice);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return { id, data, getAdvice };
};

export default useGenerateAdvice;

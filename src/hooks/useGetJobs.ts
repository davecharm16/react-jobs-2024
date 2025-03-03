import { useState, useEffect } from "react";
import constants from "../core/constants";
import { Jobs } from "../models/models";

type Props = {
  endpoint: string;
  params: RequestInit;
};

const useGetJobs = ({ endpoint, params }: Props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [data, setData] = useState<any | Jobs>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);   
      setError(null);     

      try {
        const response = await fetch(`${constants.baseUrl}${endpoint}`, params);
        if (!response.ok) {
          throw new Error("Something went wrong on API server!");
        }
        const result = await response.json();
        setData(result);
      } catch (error: any) {
        console.error(error);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, params]); 

  return { loading, error, data };
};

export default useGetJobs;

import { useEffect, useState } from "react";
import yelp from "../api/yelp";

const useRestaurant = () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const searchHandler = async (term) => {
    try {
      const { data } = await yelp.get("/search", {
        params: { limit: 50, term, location: "new york" },
      });
      setResults(data.businesses);
      setErrorMessage(null);
    } catch (error) {
      console.log(error);
      setErrorMessage("Something went wrong.");
    }
  };

  useEffect(() => {
    searchHandler("pizza");
  }, []);

  return [searchHandler, results, errorMessage];
};

export default useRestaurant;

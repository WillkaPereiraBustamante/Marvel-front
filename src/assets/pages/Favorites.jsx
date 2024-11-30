import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Favorites = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://site--willka-marvel-backend--79d24psydslc.code.run/characters?page=14"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <>
      <div className="home">
        {data.results.map((result) => {
          return (
            <div className="card" key={result._id}>
              <div className="card-character-name">
                <span>{result.name}</span>
              </div>
              <div>
                <img
                  src={result.thumbnail.path + "." + result.thumbnail.extension}
                  alt="character picture"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Favorites;

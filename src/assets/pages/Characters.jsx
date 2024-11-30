import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [limit, setLimit] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://site--willka-marvel-backend--79d24psydslc.code.run/characters?page=${page}&name=${name}&limit=${limit}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page, name, limit]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <main>
      <div className="pagination">page : {page}</div>
      <nav className="nav-search container">
        <button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          previous page
        </button>
        <input
          type="text"
          placeholder="Rechercher"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          next page
        </button>
      </nav>

      <div className="items-container container">
        {data.results.map((result) => {
          return (
            <Link to={`/comics/${result._id}`} key={result._id}>
              <div className="characters-card">
                <img
                  src={result.thumbnail.path + "." + result.thumbnail.extension}
                  alt="character picture"
                />
                <div className="characters-description">
                  <span>{result.name}</span>
                  <span>{result.description}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="pagination">page : {page}</div>
    </main>
  );
};

export default Characters;

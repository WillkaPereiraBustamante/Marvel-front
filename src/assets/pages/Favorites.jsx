import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [limit, setLimit] = useState(52);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--willka-marvel-backend--79d24psydslc.code.run/characters?page=${page}&name=${name}&limit=${limit}`
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
      <nav className="nav-search container">
        <button
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          previous
        </button>
        <input
          type="text"
          placeholder="Search"
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
          next
        </button>
      </nav>

      <div className="items-container container">
        {data.results.map((result) => {
          return (
            <Link to={`/comics/${result._id}`} key={result._id}>
              <div className="items-card">
                <img
                  src={result.thumbnail.path + "." + result.thumbnail.extension}
                  alt="character picture"
                />
                <div className="items-description">
                  <h3>{result.name}</h3>
                  <p>{result.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="nav-search nav-search-bottom container">
        <button
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          previous
        </button>
        <span>{page}</span>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          next
        </button>
      </div>
    </main>
  );
};

export default Characters;

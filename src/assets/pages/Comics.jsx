import axios from "axios";
import { useEffect, useState } from "react";

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");
  const [limit, setLimit] = useState(52);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://site--willka-marvel-backend--79d24psydslc.code.run/comics?page=${page}&title=${title}&limit=${limit}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [page, title, limit]);

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
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
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
        {data.results.map((item) => {
          return (
            <div className="items-card" key={item._id}>
              <img
                src={item.thumbnail.path + "." + item.thumbnail.extension}
                alt="comics picture"
              />
              <div className="items-description">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
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

export default Comics;

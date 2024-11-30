import axios from "axios";
import { useEffect, useState } from "react";

const Comics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");
  const [limit, setLimit] = useState(12);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://site--willka-marvel-backend--79d24psydslc.code.run/comics?page=${page}&title=${title}&limit=${limit}`
        );
        console.log(response.data);
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
            setPage(page - 1);
          }}
        >
          previous page
        </button>
        <input
          type="text"
          placeholder="  🔍  Recherche des articles"
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
          next page
        </button>
      </nav>
      <div className="items-container container">
        {data.results.map((item) => {
          return (
            <div className="comics-card" key={item._id}>
              <img
                src={item.thumbnail.path + "." + item.thumbnail.extension}
                alt="comics picture"
              />
              <span>{item.title}</span>
              <span>{item.description}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Comics;

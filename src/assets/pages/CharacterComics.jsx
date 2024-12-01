import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CharacterComics = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [limit, setLimit] = useState(100);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://site--willka-marvel-backend--79d24psydslc.code.run/comics/${id}?page=${page}&name=${name}&limit=${limit}`
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id, page, name, limit]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <main>
      <div className="items-container container">
        {data.comics.map((item) => {
          return (
            <div className="items-card" key={item._id}>
              <img
                src={item.thumbnail.path + "." + item.thumbnail.extension}
                alt="character picture"
              />
              <div className="items-description">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default CharacterComics;

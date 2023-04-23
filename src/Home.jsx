import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";

export const NewLink = styled(Link)`
  display: block;
  color: white;
  &:hover {
    text-decoration: underline;
  }
`;

function Home() {
  const [items, setItems] = useState([]);
  const { data, isLoading } = useQuery(["products"], () =>
    axios.get("https://dummyjson.com/posts").then((res) => {
      setItems(res.data.posts);
      return res.data;
    })
  );



  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="App">
      <div>
        {items.map((posts) => (
              <NewLink to={`/${posts.id}`} key={posts.id}>
                {posts.title}
              </NewLink>
            ))}
      </div>
    </div>
  );
}

export default Home;

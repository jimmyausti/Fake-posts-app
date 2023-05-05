import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://free-nba.p.rapidapi.com/players',
  params: {
    page: '0',
    per_page: '25'
  },
  headers: {
    'X-RapidAPI-Key': '47f2abceadmshfb3eb4f0eeffb62p17edb9jsn9ec9fe9ae6b8',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}


export const NewLink = styled(Link)`
  display: block;
  color: white;
  &:hover {
    text-decoration: underline;
  }
  `;

function Home() {
  const [data, setData] = useState(null)



  return (
    <div className="App">
      <div>
      {data?.map((data) => {
        return (
          <div>
            <h2>{data?.title}</h2>
          </div>
        )
      })} 
      </div>
    </div>
  );
}

export default Home;

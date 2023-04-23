import React from 'react'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { NewLink } from './Home';

const TagWrapper = styled.div`
    border: 0.1rem solid white;
    width: 5rem;
    margin: 0 auto 0.2rem auto;
`

const Post = () => {
  const {id} = useParams();

  const {data, isLoading} = useQuery(["products", id], () => 
  axios.get(`https://dummyjson.com/posts/${id}`).then((res) => res.data));

  isLoading && <h1>Loading...</h1>
    
  console.log(data?.tags);
  return (
    <div>
        <h3>{data?.title}</h3>
    <p>{data?.body}</p>
    <p>Reactions: <b>{data?.reactions}</b></p>
    <div>Tags: {data?.tags?.map((tag) => (<TagWrapper key={tag}>{tag} </TagWrapper>))}</div>
    <NewLink to='/'>Back</NewLink>
    </div>
  )
}

export default Post
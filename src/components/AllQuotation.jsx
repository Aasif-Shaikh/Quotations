import { Card, Image, Text, ActionIcon } from '@mantine/core';
import axios from 'axios'
import React, {useState, useEffect} from 'react';
import LoadingState from './LoadingState';
import {IconCircleArrowRightFilled, IconBookmarks, IconCornerDownRightDouble} from '@tabler/icons'
function AllQuotation() {
  const [articles, setArticles] = useState([])

  useEffect(()=>{fetchArticles()}, [])

  const fetchArticles = async() =>{
    try {
      return await axios.get('https://api.realworld.io/api/articles').then(
    (response)=>{
      
     setArticles(response.data.articles)
    }
   )
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '10px', marginTop:'50px'}}>
      { articles.map((article, i)=>{
     return(
      <div class="chat-notification" key={i}>
      <div class="chat-notification-logo-wrapper">
        <img class="chat-notification-logo" src={article.author.image} alt="ChitChat Logo"/>
      </div>
      <div class="chat-notification-content">
        <h4 class="chat-notification-title">{article.title}</h4>
        <p class="chat-notification-message">{article.description}</p>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <ActionIcon>
           <IconBookmarks size={18} />
         </ActionIcon>
         <ActionIcon>
          <IconCornerDownRightDouble size={18}/>
         </ActionIcon>
        </div>
      </div>
    </div>
     )}
      )}
    </div>
  );
}

export default AllQuotation
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import anakin_skywalker from './img/anakin_skywalker.jpg';
import ray_skywalker from './img/ray_skywalker.jpg';
import like from './img/like.svg';
import comment from './img/comment.svg';
import download from './img/download.svg';
import retweet from './img/retweet.svg';

const user = {
  name: "Anakin Skywalker",
  avatar: anakin_skywalker,
  nickname: "dart_vader",
  date: "26.02.2019",
  content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
  media: ray_skywalker
}

function Post ( ) {
  return (
    <div className='post flex-column'>
      <div className='post-head flex-row'>
        <img className='post-head__avatar' src={user.avatar} alt="avatar" />
        <h1 className='post-head__name'>{user.name}</h1>
        <p className='post-head__nickname'>{user.nickname}</p>
        <p className='post-head__date'>{user.date}</p>
      </div>
      <div className='post-content flex-column'>
        <p className='post-content__text'>{user.content}</p>
        <img className='post-content__media' src={user.media} alt='post media' />
        <div className='post-content__reaction flex-row'>
          <img src={comment} alt="comment pic" />
          <img src={retweet} alt="retweet pic" />
          <img src={like} alt="like pic" />
          <img src={download} alt="download pic" />
        </div>
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Post />
);
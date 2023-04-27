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
  posts: {
    date: "26.02.2019",
    content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
    media: ray_skywalker
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <h1>Init title</h1>
);
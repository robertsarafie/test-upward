import React from 'react';

export default function Article(props) {
  return (
    <div className="card">
      <picture>
        <img src={props.url} alt="article image" />
      </picture>
      <div className="card-content">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <a href="/" target="_blank" rel="noopener noreferrer">
          {props.button} <i className="fa-solid fa-angles-right"></i>
        </a>
      </div>
    </div>
  );
}

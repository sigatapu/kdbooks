import React from "react";
import "./index.css";

const Card = ({ image, name, author, read }) => {
  return (
    <div className="card">
      <div>
        {" "}
        <img className="image" src={image} alt="book-image" />
      </div>
      <p className="bookname">{name}</p>
      <p className="authorname">{author}</p>
      <a href={read} target="_blank">
        <button className="card-button">Read</button>
      </a>
    </div>
  );
};

export default Card;

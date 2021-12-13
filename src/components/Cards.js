import React from "react";
import Card from "./Card";

const Cards = ({ posts = [] }) => {
  if (posts.length === 0) {
    return null;
  }
  const cards = posts.map((post, i) => (
    <Card
      key={i + 1}
      author={post.author}
      title={post.title}
      url={post.url}
      created={post.created}
      id={post.id}
    />
  ));
  return cards;
};

export default Cards;

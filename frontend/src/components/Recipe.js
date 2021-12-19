import React from 'react';

const Recipe = ({ title, body, image }) => {
  return (
    <div className="recipe">
      <div
        className="recipe__image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="recipe__info">
        <h2 className="recipe__title">{title}</h2>
        <p className="recipe__body">{body}</p>
      </div>
    </div>
  );
};

export default Recipe;
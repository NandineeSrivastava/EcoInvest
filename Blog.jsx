
import React from 'react';

const Blog = ({ title, content }) => {
  return (
    <div className="blog">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Blog;

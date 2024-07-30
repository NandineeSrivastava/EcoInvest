import React from 'react';
import Blog from './Blog';

const HomePage = () => {
  return (
    <div className="home-page">
      <h2>Why Invest?</h2>
      <Blog title="Blog 1" content="Content of blog 1..." />
      <Blog title="Blog 2" content="Content of blog 2..." />
      <Blog title="Blog 3" content="Content of blog 3..." />
    </div>
  );
};

export default HomePage;

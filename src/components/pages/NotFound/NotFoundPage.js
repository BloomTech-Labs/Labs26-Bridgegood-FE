import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.less';

const NotFoundPage = () => {
  return (
    <div className="NotFound">
      <h1>404 Page Not Found</h1>
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;

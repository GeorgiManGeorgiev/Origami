/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './Post.css';

function Post({
  content,
  author
}) {
  return (

    <div className="post">
      <img src="/blue-origami-bird.png" alt="pigeon" />
      <p className="post-description">
        {content}
      </p>
      <div>
        <span>
          <small>
            Author:
            {author}
          </small>
        </span>
      </div>

    </div>

  );
}

export default Post;

import React from 'react';

import Post from '../Post/Post';
import './Main.css';

function Main({ posts }) {
  console.log(posts);
  return (
    <main className="main-container">
      <h1>Sooooooome Heading</h1>
      <div className="posts">
        {posts.map((x) => (
          <Post
            key={x.id}
            content={x.content}
            author={x.author}
          />
        ))}
      </div>

    </main>
  );
}

export default Main;

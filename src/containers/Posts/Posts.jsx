/* eslint-disable array-callback-return */
import React from 'react';

import Post from '../../components/Post';

const Posts = ({ posts, getUserHandler }) => {
  return (
    <div className="container" data-testid="posts">
      <section className="feed">
        { posts.map(post => (
          <Post 
            postInfo={post}
            userInfo={getUserHandler(post.userId)}
            key={post.id}
          />
        ))
        }
      </section>
    </div>
  );
}

export default Posts;

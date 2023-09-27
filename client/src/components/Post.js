import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {/* Add more post details and actions */}
    </div>
  );
};

export default Post;

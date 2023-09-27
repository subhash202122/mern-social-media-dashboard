import React, { useEffect, useState } from 'react';
import Post from '../components/Post';
import postService from '../services/postService';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts and set them in the state
    postService.getAllPosts().then((data) => setPosts(data));
  }, []);

  return (
    <div className="home">
      <h1>Welcome to the Dashboard</h1>
      <div className="post-list">
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;

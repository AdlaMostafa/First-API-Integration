import React, { useState } from 'react';
import axios from 'axios';
import Container from '../../components/Container';
import PostForm from '../../components/PostForm';
import { Navigate, useNavigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';

const CreatePostPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isGoToListPage, setIsGoToListPage] = useState(false);
  const navigate = useNavigate();
  const handleCreatePost = async (body) => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        'https://some-data.onrender.com/stores',
        body
      );
      setIsLoading(false);
      setIsGoToListPage(true);
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Container>
        <h1>Create Post</h1>
        <PostForm handleSubmit={handleCreatePost} isLoading={isLoading} />
      </Container>
      {isGoToListPage && navigate(PATHS.POSTS.ROOT)}
    </div>
  );
}

export default CreatePostPage;

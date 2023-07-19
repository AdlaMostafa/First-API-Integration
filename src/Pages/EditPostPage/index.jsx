import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WithParams from '../../components/WithParams';
import Container from '../../components/Container';
import PostForm from '../../components/PostForm';
import { PATHS } from '../../router/paths';
import { Navigate } from 'react-router-dom';

const EditPostPage = ({ params }) => {
  const id = params?.id;
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isGotToListPage, setIsGotToListPage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`https://some-data.onrender.com/stores/${id}`);
        setPost(data);
        console.log(data);
      } catch (error) {
        console.log({ error: error.message });
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleEditPost = async (body) => {
    setIsLoading(true);
    try {
      const res = await axios.put(`https://some-data.onrender.com/stores/${id}`, body);
      console.log(res.data);
      setPost(res.data);
      setIsLoading(false);
      setIsGotToListPage(true);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Container>
        <h1>Edit Post {id}</h1>

        <PostForm post={post} handleSubmit={handleEditPost} isLoading={isLoading} />
      </Container>

      {isGotToListPage && <Navigate to={PATHS.POSTS.ROOT} replace />}
    </div>
  );
};

export default WithParams(EditPostPage);

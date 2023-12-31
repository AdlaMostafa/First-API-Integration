import React, { useState, useEffect } from "react";
import WithParams from "../../components/WithParams";
import Container from "../../components/Container";
import { Navigate, useNavigate } from "react-router-dom";
import { PATHS } from "../../router/paths";
import axios from "axios";

const PostPage = ({ params }) => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const id = params?.id;
  const navigate = useNavigate();

  const handleEdit = () => navigate(PATHS.POSTS.EDIT.replace(":id", id));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://some-data.onrender.com/stores/${id}`
        );
        console.log(data);
        setPost(data);
      } catch (error) {
        console.log({ error: error.message });
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [id]);

  return (
    <Container>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Post {post?.id}</h1>
          <h2>{post?.title}</h2>
          <p>{post?.body}</p>
        </>
      )}
      <button onClick={handleEdit}>Edit</button>
    </Container>
  );
};

export default WithParams(PostPage);

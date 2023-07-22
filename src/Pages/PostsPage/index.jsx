import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '../../components/Table';
import { Navigate, useNavigate } from 'react-router-dom';
import { POSTS_COLUMNS } from '../../constants/posts';
import { PATHS } from '../../router/paths';

const PostsPage = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    posts: [],
    isLoading: true,
    isCreating: false,
    rowId: null,
    editId: null,
    error: null,
  });

  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://some-data.onrender.com/stores");
      setState(prevState => ({ ...prevState, posts: data }));
      console.log(data);
    } catch (error) {
      setState(prevState => ({ ...prevState, error: error.message }));
    } finally {
      setState(prevState => ({ ...prevState, isLoading: false }));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    console.log(id, 'is deleted');
    try {
      await axios.delete(`https://some-data.onrender.com/stores/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (id) => {
    console.log(id, 'is edited');
    setState(prevState => ({ ...prevState, editId: id }));
    navigate(PATHS.POSTS.EDIT.replace(':id',id))
  };

  const handleView = (row) => {
    console.log(row.id, 'is viewed');
    setState(prevState => ({ ...prevState, rowId: row.id }));
    navigate(PATHS.POSTS.VIEW.replace(':id',row.id))
  };

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => setState(prevState => ({ ...prevState, isCreating: true }))}>
        Create Post
      </button>

      <Table
        columns={POSTS_COLUMNS(handleDelete, handleEdit)}
        data={state.posts}
        onRowClick={handleView}
        isLoading={state.isLoading}
      />
       {state.rowId && navigate(`${state.rowId}`, { replace: true })}
       {state.editId && navigate(PATHS.POSTS.EDIT.replace(':id', state.editId), { replace: true })}
       {state.isCreating && navigate(PATHS.POSTS.CREATE, { replace: true })}    </div>
  );
};

export default PostsPage;

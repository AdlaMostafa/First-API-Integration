import React, { Component, useState , useEffect } from 'react';
import axios from 'axios';
import Table from '../../components/Table';
import { Navigate } from 'react-router-dom';
import { POSTS_COLUMNS } from '../../constants/posts';
import { PATHS } from '../../router/paths';

const PostsPage = () => {
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
    // setState(prevState => ({ ...prevState, editId: id }));
  };

  const handleView = (row) => {
    console.log(row.id, 'is viewed');
    // setState(prevState => ({ ...prevState, rowId: row.id }));
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

      {state.rowId && <Navigate to={`${state.rowId}`} replace />}
      {state.editId && (
        <Navigate
          to={PATHS.POSTS.EDIT.replace(':id', state?.editId)}
          replace
        />
      )}
      {state.isCreating && <Navigate to={PATHS.POSTS.CREATE} replace />}
    </div>
  );
};

export default PostsPage;



/**Class Component */
// class PostsPage extends Component {
  // state = {
  //   posts: [],
  //   isLoading: true,
  // };

  // async componentDidMount() {
    // fetch('https://some-data.onrender.com/stores')
    //   .then((response) => response.json())
    // //   .then((data) => this.setState({ posts: data, isLoading: false }));
    // try{
    //   const {data}= await  axios.get("https://some-data.onrender.com/stores");
    //   this.setState({posts:data});
    //   console.log(data);
    // }
    // catch (error){
    //   this.setState({error:error.message});
    // }
    // finally{
    //   this.setState({isLoading:false})
    // }
  // }

  // handleDelete = async (id) => {
  //   console.log(id, 'is deleted');
  //   try {
  //     axios.delete(`https://some-data.onrender.com/stores/${id}`);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // handleEdit = (id) => {
  //   console.log(id, 'is edited');
  //   this.setState({ editId: id });
  // };

  // handleView = (row) => {
  //   console.log(row.id, 'is viewed');
  //   this.setState({ rowId: row.id });
  // };

  // render() {
    // return (
    //   <div>
    //     <h1>Posts</h1>

    //     <button onClick={() => this.setState({ isCreating: true })}>
    //       Create Post
    //     </button>

    //     <Table
    //       columns={POSTS_COLUMNS(this.handleDelete, this.handleEdit)}
    //       data={this.state.posts}
    //       onRowClick={this.handleView}
    //       isLoading={this.state.isLoading}
    //     />

    //     {this.state.rowId && <Navigate to={`${this.state.rowId}`} replace />}
    //     {this.state.editId && (
    //       <Navigate
    //         to={PATHS.POSTS.EDIT.replace(':id', this.state?.editId)}
    //         replace
    //       />
    //     )}
    //     {this.state?.isCreating && <Navigate to={PATHS.POSTS.CREATE} replace />}
    //   </div>
    // );
  // }

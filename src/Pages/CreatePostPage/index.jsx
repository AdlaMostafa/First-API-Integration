import React, { Component } from 'react';
import axios from 'axios';
import Container from '../../components/Container';
import PostForm from '../../components/PostForm';
import { Navigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';

class CreatePostPage extends Component {
  state = {
    isLoading: false,
    isGoToListPage: false,
  };

  handleCreatePost = async (body) => {
    
    this.setState({ isLoading: true });
    try {
      const res = await axios.post(
        'https://some-data.onrender.com/stores',
        body
      );
      this.setState({ isLoading: false, isGoToListPage: true });

      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Container>
          <h1>Create Post</h1>

          <PostForm
            handleSubmit={this.handleCreatePost}
            isLoading={this.state.isLoading}
          />
        </Container>
        {this.state.isGoToListPage && <Navigate to={PATHS.POSTS.ROOT} />}
      </div>
    );
  }
}

export default CreatePostPage;
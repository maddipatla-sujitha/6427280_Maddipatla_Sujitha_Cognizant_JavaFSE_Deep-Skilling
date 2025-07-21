import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Lifecycle Method: componentDidMount
  componentDidMount() {
    this.loadPosts();
  }

  // Load posts from JSONPlaceholder
  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ posts: data });
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
        this.setState({ hasError: true });
      });
  };

  // Lifecycle Method: componentDidCatch
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    alert("Something went wrong while loading posts.");
    console.error("Error caught in componentDidCatch:", error, info);
  }

  // Lifecycle Method: render
  render() {
    if (this.state.hasError) {
      return <h1>Error loading posts.</h1>;
    }

    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.slice(0, 10).map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;


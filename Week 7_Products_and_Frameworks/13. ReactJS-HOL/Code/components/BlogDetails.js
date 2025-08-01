import React from 'react';

const BlogDetails = () => {
  const blogs = [
    { id: 1, title: 'React Conditional Rendering', date: '2021-05-04' },
    { id: 2, title: 'Using Hooks Effectively', date: '2021-06-10' }
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>{blog.title} - {blog.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;

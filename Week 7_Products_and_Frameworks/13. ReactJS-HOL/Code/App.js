import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(false);
  const [showCourses, setShowCourses] = useState(false);

  const toggleContent = (content) => {
    setShowBooks(content === 'books');
    setShowBlogs(content === 'blogs');
    setShowCourses(content === 'courses');
  };

  let content;
  // Way 1: if-else
  if (showBooks) {
    content = <BookDetails />;
  } else if (showBlogs) {
    content = <BlogDetails />;
  } else if (showCourses) {
    content = <CourseDetails />;
  }

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Blogger App</h1>
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => toggleContent('books')}>Show Books</button>
        <button onClick={() => toggleContent('blogs')}>Show Blogs</button>
        <button onClick={() => toggleContent('courses')}>Show Courses</button>
      </div>

      {/* Way 1: if-else handled above */}
      {content}

      {/* Way 2: Ternary operator */}
      <hr />
      <h3>Conditional Rendering using Ternary</h3>
      {showBooks ? <BookDetails /> : showBlogs ? <BlogDetails /> : <CourseDetails />}

      {/* Way 3: Logical AND operator */}
      <hr />
      <h3>Conditional Rendering using Logical &&</h3>
      {showBooks && <BookDetails />}
      {showBlogs && <BlogDetails />}
      {showCourses && <CourseDetails />}
    </div>
  );
}

export default App;

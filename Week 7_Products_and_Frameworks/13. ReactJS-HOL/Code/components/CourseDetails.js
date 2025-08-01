import React from 'react';

const CourseDetails = () => {
  const courses = [
    { id: 1, name: 'Angular', date: '4/5/2021' },
    { id: 2, name: 'React', date: '6/3/2021' }
  ];

  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name} - {course.date}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;

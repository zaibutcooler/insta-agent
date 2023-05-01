import React, { useEffect, useState } from "react";
import Card from "./Card";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <h1 className="title is-2">This is blog</h1>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Card title={blog.title} body={blog.body} />
        </div>
      ))}
    </div>
  );
};

export default Blog;

import React from "react";
import "./BlogPage.css";

const blogs = [
  {
    title: "How to integrate MongoDB into your Next.js apps",
    author: "Haris Ali Khan",
    date: "November 3, 2024",
    description:
      "Learn how to seamlessly integrate MongoDB into your Next.js applications with best practices for efficient connection handling, resource management, and improved performance.",
    readMoreLink: "#",
    originalLink: "#",
  },
  {
    title: "How to host a Next.js app in Production on an Ubuntu VPS",
    author: "Haris Ali Khan",
    date: "March 23, 2024",
    description:
      "Learn how to deploy a Next.js application in a production environment on an Ubuntu VPS with this comprehensive guide. Follow step-by-step instructions to set up NGINX, PM2, and configure your Next.js app for seamless hosting.",
    readMoreLink: "#",
    originalLink: "#",
  },
];

const BlogPage = () => {
  return (
    <div className="blog-page">
      <h1 className="blog-page-header">Coding Articles</h1>
      <div className="blog-page-list">
        {blogs.map((blog, index) => (
          <div className="blog-page-card" key={index}>
            <h2 className="blog-page-title">{blog.title}</h2>
              <div className="blog-page-author">
              <img
              src="./pic.png"
              alt="Author"
              className="author-image"
              />
            <span>{blog.author} • {blog.date}</span>
            </div>
            <p className="blog-page-description">{blog.description}</p>
            <div className="blog-page-buttons">
              <a href={blog.readMoreLink} className="blog-page-btn btn-primary">
                Read More
              </a>
              <a href={blog.originalLink} className="blog-page-btn btn-secondary">
                Original Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

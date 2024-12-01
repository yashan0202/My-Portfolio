import React from "react";

const BlogPage = ({ blogs }) => {
  return (
    <div className="blog-page" style={{ padding: "20px", background: "#0d1117", color: "white" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px", textAlign: "center" }}>Coding Articles</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {blogs.map((blog, index) => (
          <div key={index} style={{ background: "#161b22", padding: "20px", borderRadius: "10px" }}>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "10px" }}>{blog.title}</h2>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <img
                src={blog.authorImage}
                alt={blog.author}
                style={{ width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px" }}
              />
              <p>
                {blog.author} • <span>{blog.date}</span>
              </p>
            </div>
            <p style={{ marginBottom: "10px" }}>{blog.description}</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href={blog.readMoreLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "10px 20px",
                  background: "#6c63ff",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "5px",
                }}
              >
                Read More
              </a>
              <a
                href={blog.originalLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "10px 20px",
                  background: "#ff6b6b",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "5px",
                }}
              >
                Original Blog
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;

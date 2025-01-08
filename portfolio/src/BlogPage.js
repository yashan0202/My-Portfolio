import React from "react";
import avatar from "./assets/pic.png";
import "./BlogPage.css";

const blogs = [
    {
        title: "The Infinite Threads",
        author: "Yash Anand",
        date: "October 7 , 2024",
        description:
          "A journey through the interconnected fabric of time, reality, and parallel worlds. The Creation of the Universe , The Existence of God: The Eternal Dance of Time, Truth, and Magic Explore the mysteries of existence, time loops, and the deeper philosophical questions that shape our understanding of life.",
        readMoreLink: "https://theinfinitethreads.wordpress.com/",
        originalLink: "https://theinfinitethreads.wordpress.com/",
      },
    {
        title: "Enhancing Financial Commentary on Variance Reports: Leveraging Pivot Tables and Tableau for Business Insights",
        author: "Yash Anand",
        date: "October 4, 2024",
        description:
          "Among the many components of financial management, variance analysis stands as a critical tool for understanding deviations between expected and actual performance. Whether you are in a corporate finance role, global finance, or business management, providing clear and actionable commentary on variance reports is key to communicating the 'why' behind the numbers. To deliver more insightful reports, it’s not just about understanding financial data—it’s about how you analyze it. Enter tools like Pivot Tables in Excel and Tableau, which can revolutionize the way you interpret financial performance and trends. In this blog, we’ll explore how these tools can be used to elevate your financial commentary and provide clearer insights to support business management at a global level.",
        readMoreLink: "https://www.linkedin.com/pulse/enhancing-financial-commentary-variance-reports-leveraging-yash-anand-yd6wc/?trackingId=N3LcSh6STyi2NEjeMDi2rA%3D%3D",
        originalLink: "https://www.linkedin.com/pulse/enhancing-financial-commentary-variance-reports-leveraging-yash-anand-yd6wc/?trackingId=N3LcSh6STyi2NEjeMDi2rA%3D%3D",
      },
    {
        title: "Mastering Git and GitHub: Your Essential Guide to Version Control",
        author: "Yash Anand",
        date: "May 2, 2024",
        description:
          "In the realm of software development, version control is the cornerstone of collaboration, efficiency, and code management. Git, a distributed version control system, and GitHub, a web-based platform for hosting Git repositories, have become indispensable tools for developers worldwide. In this comprehensive guide, we will explore the significance of Git, GitHub, and version control methods in the coming future, why everyone should learn them, their pivotal role in development workflows, how version control is used in various companies, effective learning strategies, essential tools and resources, and a step-by-step roadmap for beginners to embark on their journey towards mastering Git and GitHub.",
        readMoreLink: "https://www.linkedin.com/pulse/mastering-git-github-your-essential-guide-version-control-yash-anand-t8ewc/?trackingId=N3LcSh6STyi2NEjeMDi2rA%3D%3D",
        originalLink: "https://www.linkedin.com/pulse/mastering-git-github-your-essential-guide-version-control-yash-anand-t8ewc/?trackingId=N3LcSh6STyi2NEjeMDi2rA%3D%3D",
      },
  {
    title: "Unveiling the Power of React JS: Your Path to Mastering Front-End Web Development",
    author: "Yash Anand",
    date: "September 15, 2023",
    description:
      "In the ever-evolving realm of front-end web development, React JS stands as a formidable force, promising a bright and dynamic future. As the digital landscape continues to expand, the need for responsive and interactive web applications has become more pronounced than ever. React JS, an open-source JavaScript library maintained by Facebook, has emerged as a game-changer, enabling developers to craft user interfaces that are not only visually appealing but also highly efficient and scalable. In this comprehensive guide, we will explore the significance of React JS in the coming future, why everyone should consider learning it, its profound impact on app development, effective learning strategies, essential tools and resources, and a step-by-step roadmap for beginners to embark on their journey towards mastering front-end web development.",
    readMoreLink: "https://www.linkedin.com/pulse/unveiling-power-react-js-your-path-mastering-front-end-yash-anand/?trackingId=N3LcSh6STyi2NEjeMDi2rA%3D%3D",
    originalLink: "https://www.linkedin.com/pulse/unveiling-power-react-js-your-path-mastering-front-end-yash-anand/?trackingId=N3LcSh6STyi2NEjeMDi2rA%3D%3D",
  },
  {
    title: "Unleashing the Power of AI in Front-End Web Development: A Comprehensive Guide for Success",
    author: "Yash Anand",
    date: "June 12, 2023",
    description:
      "In the ever-evolving digital era, front-end web development is at the forefront of technological advancements. The integration of Artificial Intelligence (AI) in this field has the potential to revolutionize the way we design, develop, and interact with web applications. In this comprehensive blog post, we will explore the profound impact of AI in front-end web development, highlighting the need for learning AI, its transformative effects on businesses and development, effective learning strategies, essential tools and frameworks, and how AI can enhance the learning process. Whether you're a beginner or an experienced developer, this professional guide will equip you with the knowledge and skills necessary to thrive in the dynamic world of front-end web development with AI.",
    readMoreLink: "https://www.linkedin.com/pulse/unleashing-power-ai-front-end-web-development-guide-success-anand/?trackingId=N3LcSh6STyi2NEjeMDi2rA%3D%3D",
    originalLink: "https://www.linkedin.com/pulse/unleashing-power-ai-front-end-web-development-guide-success-anand/?trackingId=N3LcSh6STyi2NEjeMDi2rA%3D%3D",
  },
  {
    title: "The Key to Successful Software Development: Effective Project Management",
    author: "Yash Anand",
    authorImage: "https://via.placeholder.com/40",
    date: "May 28, 2023",
    description:
      "In today's rapidly evolving tech market, effective project management plays a crucial role in the success of software development endeavors. From understanding user requirements and market needs to planning and mitigating risks, project management encompasses a wide range of practices that ensure smooth execution and delivery of software projects. In this blog post, we will explore the various aspects of software development project management and its significance in the competitive tech industry.",
    readMoreLink: "https://www.linkedin.com/pulse/key-successful-software-development-effective-project-yash-anand/?trackingId=N3LcSh6STyi2NEjeMDi2rA%3D%3D",
    originalLink: "https://www.linkedin.com/pulse/key-successful-software-development-effective-project-yash-anand/?trackingId=N3LcSh6STyi2NEjeMDi2rA%3D%3D",
  },
];

const BlogPage = () => {
  return (
    <div className="blog-page">
      
      <h1 className="blog-page-header">Tech & Beyond</h1>
      <div className="blog-page-list">
        {blogs.map((blog, index) => (
          <div className="blog-page-card" key={index}>
            <h2 className="blog-page-title">{blog.title}</h2>
            <div className="blog-page-author">
              <img
                src={avatar} 
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

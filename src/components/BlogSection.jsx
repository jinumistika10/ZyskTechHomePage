import React from "react";
import "../styles/BlogSection.css";
import BlogImg1 from '../images/blogimage1.png';
import BlogImg2 from '../images/blogimage2.png';
import BlogImg3 from '../images/blogimage3.png';

const BlogSection = () => {
  const blogs = [
    {
      title: "UX review presentations",
      category: "Design",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      author: "Olivia Rhye",
      date: "20 Jan 2024",
      image: BlogImg1, // Replace with actual image paths
    },
    {
      title: "Migrating to Linear 101",
      category: "Product",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here's how to get started.",
      author: "Phoenix Baker",
      date: "19 Jan 2024",
      image: BlogImg2, // Replace with actual image paths
    },
    {
      title: "Building your API stack",
      category: "Software Engineering",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
      author: "Lana Steiner",
      date: "18 Jan 2024",
      image: BlogImg3, // Replace with actual image paths
    },
  ];

  return (
    <div className="blog-section">
      <div className="blog-header">
        <div>
          <h4>Our blog</h4>
          <h2>Latest blog posts</h2>
          <p>Tools and strategies modern teams need to help their companies grow.</p>
        </div>
        <button className="view-all-btn">View all posts</button>
      </div>
      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <span className="blog-category">{blog.category}</span>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <div className="blog-footer">
                <span className="blog-author">{blog.author}</span>
                <span className="blog-date">{blog.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;

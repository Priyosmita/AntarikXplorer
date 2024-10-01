"use client";

import { useEffect, useState } from "react";
import { Client, Databases } from "appwrite";
import BlogCard from "./BlogCard";
import { useRouter } from "next/navigation";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // Use next/router to handle routing
  
  useEffect(() => {
    const client = new Client()
      .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite Endpoint
      .setProject("66fa5a740004419aed12"); // Your project ID

    const databases = new Databases(client);

    const fetchBlogs = async () => {
      try {
        const response = await databases.listDocuments(
          "66fa5b7f002eb395a138", // Database ID
          "66fa5b93001687e95345" // Collection ID
        );
        setBlogs(response.documents);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [router.asPath]); // Trigger the fetch when the route changes

  return (
    <div className="container mx-auto mt-8">
      {loading && <p>Loading...</p>}
      {!loading && blogs.length === 0 && <p>No blogs available</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;

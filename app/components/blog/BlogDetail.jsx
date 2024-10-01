"use client";

import React, { useEffect, useState } from 'react';
import { Client, Databases, Query } from 'appwrite';  // Import Query from appwrite
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { slug } = useParams();  // Retrieve slug from URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const client = new Client()
      .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
      .setProject('66fa5a740004419aed12'); // Your project ID

    const databases = new Databases(client);

    // Fetch the blog based on the slug
    const fetchBlog = async () => {
      try {
        const response = await databases.listDocuments(
          '66fa5b7f002eb395a138',  // Database ID
          '66fa5b93001687e95345',  // Collection ID
          [Query.equal('slug', slug)]  // Proper way to query by slug
        );
        if (response.documents.length > 0) {
          setBlog(response.documents[0]);
        } else {
          console.error('Blog not found');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog:', error);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      {blog.image && <img src={blog.image} alt={blog.title} className="w-full h-60 object-cover mb-4" />}
      <p className="text-lg">{blog.body}</p>
    </div>
  );
};

export default BlogDetail;

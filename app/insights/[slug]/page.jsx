"use client";

import { useEffect, useState } from "react";
import { Client, Databases, Query } from "appwrite";
import Header from "@/app/components/global/header";
import { MdOutlineAccountCircle } from "react-icons/md";
import Image from "next/image";

const BlogDetail = ({ params: { slug } }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const options = [
    { label: "Home", link: "/" },
    { label: "Simulation", link: "/simulation" },
    { label: "Quizzes", link: "/quizzes" },
    { label: "Insights", link: "/insights" },
  ];

  useEffect(() => {
    const client = new Client()
      .setEndpoint("https://fra.cloud.appwrite.io/v1") // Your Appwrite Endpoint
      .setProject("6851551f0037d6ae5a24"); // Your project ID

    const databases = new Databases(client);

    const fetchBlog = async () => {
      try {
        const response = await databases.listDocuments(
          "685155b70033251a9e02", // Database ID
          "685162f5003969a2ed9b", // Collection ID
          [Query.equal("slug", slug)] // Query by slug
        );
        if (response.documents.length > 0) {
          setBlog(response.documents[0]);
        } else {
          console.error("Blog not found");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return <p className="text-center mt-20 text-gray-500">Loading...</p>;
  }

  if (!blog) {
    return <p className="text-center mt-20 text-gray-500">Blog not found</p>;
  }

  return (
    <>
      {/* Header Component */}
      <Header
        logo={
          <Image
            src="/global-assets/logo.png"
            alt="Logo"
            className="h-10 object-contain"
            width={200}
            height={100}
          />
        }
        options={options}
        name="AntarikXplorer"
        catchPhrase="Beyond the stars"
        accountIcon={
          <MdOutlineAccountCircle className="text-white text-4xl hover:text-indigo-300 transition-colors duration-300" />
        }
      />
      <div
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat pt-10"
        style={{
          backgroundImage:
            "url('https://w0.peakpx.com/wallpaper/164/343/HD-wallpaper-sci-fi-black-hole-kurzgesagt-minimalist.jpg')",
        }}
      >
        {/* Add a semi-transparent overlay to improve text readability */}
        <div className="bg-black bg-opacity-60 w-full h-full">
          <div className="container mx-auto py-12 px-40">
            {/* Blog Title */}
            <h1 className="text-5xl font-bold leading-tight text-white mb-4 text-center">
              {blog.title}
            </h1>

            {/* Author and Views
            <div className="flex justify-center items-center mb-8 text-gray-300 text-sm">
              <span className="mr-4">By {blog.author}</span>
              <span>{blog.views} views</span>
            </div> */}

            {/* Blog Hero Image */}
            {blog.image && (
              <div className="w-full h-96 mb-8">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                  width={800}
                  height={500}
                />
              </div>
            )}

            {/* Blog Body */}
            <div className="prose lg:prose-xl mx-auto text-gray-200 leading-relaxed">
              <p>{blog.body}</p>
              {/* <p>{blog.body1}</p>
              <p>{blog.body2}</p>
              <p>{blog.body3}</p> */}
            </div>

            {/* Footer (Author and Additional Info)
            <div className="border-t border-gray-500 mt-12 pt-6 flex justify-between items-center">
              <div className="text-gray-300">
                <span className="block">
                  Written by <strong>{blog.author}</strong>
                </span>
              </div>
              <div className="text-gray-300">
                <span>{blog.views} views</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;

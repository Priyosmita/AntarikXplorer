// BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ image, title, MetaDescription, slug }) => {
  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{MetaDescription}</p>
        <Link
          to={`/insights/${slug}`}
          className="text-indigo-600 hover:text-indigo-400 font-semibold"
        >
          Know More →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

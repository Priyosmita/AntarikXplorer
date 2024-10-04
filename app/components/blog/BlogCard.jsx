// BlogCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import "../global"

const BlogCard = ({ image, title, MetaDescription, slug }) => {
  return (
    <div className="max-w-sm bg-gray-800 bg-opacity-30  rounded-lg shadow">
      <Link to={`/insights/${slug}`}>
        <img className="rounded-t-lg w-full h-40 object-cover" src={image} alt={title} />
      </Link>
      <div className="p-5">
        <Link to={`/insights/${slug}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{title}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-200">{MetaDescription}</p>
        <Link
          to={`/insights/${slug}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

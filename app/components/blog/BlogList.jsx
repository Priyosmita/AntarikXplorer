import { useEffect, useState } from "react";
import { Client, Databases } from "appwrite";
import BlogCard from "./BlogCard";
import { useRouter } from "next/navigation";
import { MdOutlineAccountCircle } from "react-icons/md";
import Header from "../global/header";
import Image from "next/image";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]); // State for filtered blogs
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(""); // State for the search input
  const router = useRouter();

  const options = [
    { label: "Home", link: "/" },
    { label: "Simulation", link: "/simulation" },
    { label: "Quizzes", link: "/quizzes" },
    { label: "About", link: "/about" },
    { label: "Insights", link: "/insights" },
  ];

  useEffect(() => {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_API_ENDPOINT) // Appwrite API Endpoint from .env
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID); // Project ID from .env

    const databases = new Databases(client);

    const fetchBlogs = async () => {
      try {
        const response = await databases.listDocuments(
          process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID, // Database ID from .env
          process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID // Collection ID from .env
        );
        setBlogs(response.documents);
        setFilteredBlogs(response.documents); // Initialize filtered blogs with all blogs
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);


  const handleClick = (slug) => {
    // Navigate to the blog details page
    router.push(`/insights/${slug}`);
  };

  // Function to handle search input changes
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter blogs by title or meta description based on the search query
    const filtered = blogs.filter((blog) => {
      const titleMatches =
        blog.title && blog.title.toLowerCase().includes(query);
      const descriptionMatches =
        blog.metaDescription &&
        blog.metaDescription.toLowerCase().includes(query);
      return titleMatches || descriptionMatches;
    });

    setFilteredBlogs(filtered);
  };

  return (
    <>
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
        name="Antariksxplorer"
        catchPhrase="Beyond the stars"
        accountIcon={
          <MdOutlineAccountCircle className="text-white text-4xl hover:text-indigo-300 transition-colors duration-300" />
        }
      />

      {/* Make the search bar fixed */}

      {/* Add margin to account for the fixed search bar */}
      <div className="container mx-auto mt-20 ">
        {loading && <p>Loading...</p>}
        {!loading && filteredBlogs.length === 0 && <p>No blogs available</p>}
        <div className=" w-full top-20 py-4 z-50 flex justify-center bg-transparent shadow">
          <input
            type="text"
            placeholder="Search by title or description..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-1/2 p-2 border border-gray-300 rounded text-black"
          />
        </div>
        {/* Blog list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog, index) => (
            <BlogCard
              key={index}
              {...blog}
              onClick={() => handleClick(blog.slug)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogList;

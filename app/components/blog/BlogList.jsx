import { useEffect, useState } from "react";
import { Client, Databases } from "appwrite";
import BlogCard from "./BlogCard";
import { useRouter } from "next/navigation";
import { MdOutlineAccountCircle } from "react-icons/md";
import Header from "../global/header";
import Image from "next/image";
import "./blogs.css";

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
    <div
      className="min-h-screen bg-cover bg-center "
      style={{
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/015/277/452/non_2x/space-background-with-stardust-and-shining-stars-realistic-colorful-cosmos-with-nebula-and-milky-way-blue-galaxy-background-beautiful-outer-space-infinite-universe-illustration-free-vector.jpg')`,
      }}
    >
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

      {/* Search Bar Section */}
<section className="w-full pt-20 fixed bg-transparent flex justify-center">
  <div className="w-1/2 px-4">
    <div className="relative flex items-center">
      <span className="absolute left-3 text-gray-400">
        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-4.35-4.35M18 10.5a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>
      </span>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search blogs..."
        className="w-full pl-10 px-4 py-1 text-black border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  </div>
</section>


      {/* Blog List Section */}
      <section className="w-full pt-32 bg-transparent scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-violet-500 scrollbar-track-gray-300 ">
        <div
          className="container mx-auto px-4 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-violet-500 scrollbar-track-gray-300"
          style={{ scrollbarWidth: "thin" }} // For Firefox
        >
          {loading ? (
            <p className="text-center text-gray-500">Loading blogs...</p>
          ) : filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredBlogs.map((blog) => (
                <BlogCard
                  key={blog.$id}
                  image={blog.image}
                  title={blog.title}
                  MetaDescription={blog.MetaDescription}
                  slug={blog.slug}
                  onClick={() => handleClick(blog.slug)}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No blogs found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogList;

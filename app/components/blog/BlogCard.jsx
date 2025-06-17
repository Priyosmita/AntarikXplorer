import Link from "next/link";
import Image from "next/image";
import "@/app/components/global/global_components.css";

const BlogCard = ({ image, title, MetaDescription, slug }) => {
  return (
    <div className="max-w-sm bg-gray-800 bg-opacity-40 rounded-lg shadow">
      <Link href={`/insights/${slug}`}>
        <Image
          className="rounded-t-lg w-full h-40 object-cover"
          src={image}
          alt={title}
          width={600}
          height={400}
        />
      </Link>
      <div className="p-5">
        <Link href={`/insights/${slug}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-200">{MetaDescription}</p>
        <Link
          href={`/insights/${slug}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-full button_gradient"
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

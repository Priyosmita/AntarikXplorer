import Image from "next/image";
import "./global_components.css";

const Footer = () => {
  return (
    <footer className="relative z-10 footer_gradient shadow">
      <div className=" w-full max-w-screen-xl mx-auto p-2 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center -space-x-8 mb-4 sm:mb-0 rtl:space-x-reverse"
          >
            <Image
              src="/global-assets/logo.png"
              className="h-10 object-contain"
              alt="AntarikXplorer"
              width={200}
              height={100}
            />
            <span className="text-xl whitespace-nowrap dark:text-white">
              AntarikXplorer
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:text-gray-700 me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700 me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700 me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-700">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="/" className="hover:underline">
            AntarikXplorer
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "../components/global/header";
import { MdOutlineAccountCircle } from "react-icons/md";
import Image from "next/image";
import Button from "../components/global/button_gradient";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // toggle state
  const router = useRouter();

  const options = [
    { label: "Home", link: "/" },
    { label: "Simulation", link: "/simulation" },
    { label: "Quizzes", link: "/quizzes" },
    { label: "Insights", link: "/insights" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      alert("Login successful");
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("Login failed. Please check your credentials.");
    }
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
        name="AntarikXplorer"
        catchPhrase="Beyond the stars"
        accountIcon={
          <MdOutlineAccountCircle className="text-white text-4xl hover:text-indigo-300 transition-colors duration-300" />
        }
      />
      <div
        className="flex items-center justify-center min-h-screen"
        style={{
          backgroundImage: `url('https://wallpapers.com/images/hd/4k-space-glowing-ring-es4tss2e6i1dzfj6.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section className="h-full">
          <div className="container h-full p-8">
            <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
              <div className="w-full">
                <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                  <div className="g-0 lg:flex lg:flex-wrap">
                    <div className="px-4 md:px-0 lg:w-6/12">
                      <div className="md:mx-6 md:p-12">
                        <div className="text-center">
                          <Image
                            className="mx-auto w-48"
                            src="/global-assets/logo.png"
                            alt="logo"
                            width={200}
                            height={100}
                          />
                          <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                            AntarikXplorer
                          </h4>
                        </div>

                        <form onSubmit={handleSubmit}>
                          <p className="mb-4">Please login to your account</p>

                          <label>Email:</label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Please enter your email"
                            className="mb-4 w-full p-2 text-black rounded-md"
                            required
                          />

                          <label>Password:</label>
                          <div className="relative mb-4">
                            <input
                              type={showPassword ? "text" : "password"}
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="Please enter your password"
                              className="w-full p-2 text-black rounded-md pr-10"
                              required
                            />
                            <span
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-indigo-600 cursor-pointer"
                            >
                              {showPassword ? (
                                <FaEye className="text-2xl" />
                              ) : (
                                <FaEyeSlash className="text-2xl" />
                              )}
                            </span>
                          </div>

                          <div className="mb-12 pb-1 pt-1 text-center">
                            <Button type="submit" className="w-full">
                              Login
                            </Button>
                          </div>

                          <div className="flex items-center justify-between pb-6">
                            <p className="mb-0 mr-2">Don&apos;t have an account?</p>
                            <Button>
                              <Link
                                href="/signup"
                                className="inline-block text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                              >
                                Register
                              </Link>
                            </Button>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none">
                      <video
                        autoPlay
                        loop
                        muted
                        className="w-full h-full object-cover"
                      >
                        <source
                          src="https://cdn.pixabay.com/video/2022/09/02/129938-745943774_large.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
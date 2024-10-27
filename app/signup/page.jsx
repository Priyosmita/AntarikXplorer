"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Header from "../components/global/header";
import { MdOutlineAccountCircle } from "react-icons/md";
import Image from "next/image";
import Button from "../components/global/button_gradient";
import server from "@/app/lib/server";

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
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
      const response = await server.post("/account", {
        name,
        email,
        pass: password,
      });

      if (response.status === 200) {
        alert("Login successful");
        router.push("/");
      } else {
        // Handle error response
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("An error occurred:", error);
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
                          <p className="mb-4">Create an account</p>

                          <label>Username:</label>
                          <input
                            type="text"
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Please enter your name"
                            className="mb-4 w-full p-2 text-black rounded-md"
                          />

                          <label>Email:</label>
                          <input
                            type="email"
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Please enter your email"
                            className="mb-4 w-full p-2 text-black rounded-md"
                          />

                          <label>Password:</label>
                          <input
                            type="password"
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Please enter your password"
                            className="mb-4 w-full p-2 text-black rounded-md"
                          />

                          <div className="mb-12 pb-1 pt-1 text-center">
                            <Button type="submit" className={`w-full`}>
                              Start your cosmic journey
                            </Button>
                          </div>

                          <div className="flex items-center justify-between pb-6">
                            <p className="mb-0 mr-2">
                              Already have an account?
                            </p>
                            <Button>
                              <Link
                                href="/login"
                                className="inline-block text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                              >
                                Login
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

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import Header from "../components/global/header";
import { MdOutlineAccountCircle } from "react-icons/md";
import Image from "next/image";

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
      const response = await axios.post(
        "https://ant.buckets.growsoc.arpan.xyz/account",
        {
          name,
          email,
          pass: password,
        }
      );

      if (response.status === 200) {
        router.push("/account");
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
        backgroundImage: `url('https://hdwallpaperim.com/wp-content/uploads/2017/08/22/448392-green-stars-galaxy-space.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-40 p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-4 text-purple-900 text-center">Sign Up</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-purple-900">
            Email ID:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 p-2 w-full border rounded border-purple-900"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-purple-900">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="mt-1 p-2 w-full border rounded border-purple-900"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-700 text-white py-2 rounded hover:bg-purple-800"
        >
          Sign Up
        </button>
        <p className="mt-4 text-center text-purple-900">
          Already have an account?{" "}
          <Link href="/login" className="text-purple-900 hover:underline">
            Login
          </Link>
        </p>
      </form>
      </div>
      </>
  );
};

export default Page;

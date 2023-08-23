import React from "react";
import { UserButton } from "@clerk/nextjs";

const Example = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-black to-gray-900 flex flex-col text-white'>
      <header className='bg-gradient-to-r from-blue-500 to-pink-200 p-4'>
        <div className='max-w-6xl mx-auto flex justify-end'>
          <UserButton afterSignOutUrl='/' />
        </div>
      </header>
      <main className='flex-grow'>
        <div className='max-w-6xl mx-auto p-8 '>
          <h1 className='text-4xl font-bold mb-4 text-white'>
            Welcome to{" "}
            <span className='bg-gradient-to-r from-blue-500 to-pink-600'>
              {" "}
              SkillSphere
            </span>
          </h1>
          <p className='text-lg font-semibold'>
            SkillSphere is a platform that empowers professionals to share their
            knowledge easily online and for{" "}
            <span className='bg-gradient-to-r from-blue-500 to-pink-600'>
              {" "}
              students{" "}
            </span>{" "}
            around the world to benefit. Join us to learn, grow, and connect
            with a community of learners. Whether you&apos;re a{" "}
            <span className='bg-gradient-to-r from-blue-500 to-pink-600'>
              {" "}
              teacher{" "}
            </span>
            , an expert in your field, or simply passionate about sharing your
            knowledge, our platform provides the tools and community to help you
            succeed.
          </p>
          <h2 className=' pt-7 text-base md:text-lg lg:text-2xl xl:text-3xl font-bold text-pink-700 '>
            {" "}
            Create your first class now{" "}
          </h2>
          <a href='/videocall/lobby.html'>
            <button className='mt-10 bg-gradient-to-r from-blue-500 to-pink-500 text-white py-4 px-8 rounded-full shadow-md hover:shadow-lg'>
              Let&apos;s Go!
            </button>
          </a>
        </div>
      </main>
      <footer className='bg-blue-400 p-2 text-center'>
        <p>&copy; {new Date().getFullYear()} SkillSphere</p>
      </footer>
    </div>
  );
};

export default Example;

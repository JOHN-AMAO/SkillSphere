import React from "react";
import { UserButton } from "@clerk/nextjs";

const Example = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col'>
      <header className='bg-blue-500 p-4'>
        <div className='max-w-6xl mx-auto flex justify-end'>
          <UserButton afterSignOutUrl='/' />
        </div>
      </header>
      <main className='flex-grow'>
        <div className='max-w-6xl mx-auto p-8'>
          <h1 className='text-2xl font-bold mb-4'>
            Welcome to Live Video Teaching!
          </h1>
          <p>Your pages content can go here.</p>
        </div>
      </main>
      <footer className='bg-blue-500 p-4 text-center'>
        <p>&copy; {new Date().getFullYear()} SkillSphere</p>
      </footer>
    </div>
  );
};

export default Example;

import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 to-white">
      <h1 className="text-5xl font-bold mb-4">Smart Card Profile</h1>
      <p className="mb-8 text-lg">Create, Share, and Manage Your Digital Identity</p>
      <Link
        to="/login"
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Get Started
      </Link>
    </div>
  );
}
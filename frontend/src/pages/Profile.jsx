import React from 'react';

export default function Profile() {
  const user = {
    name: "Shakeel Ahmad",
    title: "Full Stack Developer",
    bio: "Experienced developer skilled in Laravel, React, and Python. Passionate about building smart digital solutions.",
    email: "shakeel@example.com",
    phone: "+971 50 123 4567",
    website: "https://shakeel.dev",
    linkedin: "https://linkedin.com/in/shakeel",
    avatar: "https://ui-avatars.com/api/?name=Shakeel+Ahmad&background=random",
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <img
            src={user.avatar}
            alt="Profile"
            className="w-28 h-28 rounded-full mb-4 border"
          />
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-600">{user.title}</p>
        </div>

        {/* Contact */}
        <div className="flex justify-center gap-4 text-sm text-gray-700 mb-6 flex-wrap">
          <p>📧 {user.email}</p>
          <p>📞 {user.phone}</p>
          <a href={user.website} className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">
            🌐 Website
          </a>
          <a href={user.linkedin} className="text-blue-500 hover:underline" target="_blank" rel="noreferrer">
            💼 LinkedIn
          </a>
        </div>

        {/* About */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">About</h2>
          <p className="text-gray-700">{user.bio}</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Download QR
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Share Profile
          </button>
        </div>
      </div>
    </div>
  );
}

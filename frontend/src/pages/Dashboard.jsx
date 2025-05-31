import React from 'react';

export default function Dashboard() {
  const user = {
    name: "Shakeel Ahmad",
    title: "Full Stack Developer",
    email: "shakeel@example.com",
    avatar: "https://ui-avatars.com/api/?name=Shakeel+Ahmad",
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-white shadow rounded-lg p-6 flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-16 h-16 rounded-full border"
          />
          <div>
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-sm text-gray-600">{user.title}</p>
            <p className="text-sm text-gray-400">{user.email}</p>
          </div>
        </div>
        <div className="space-x-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Edit Profile
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            View QR Code
          </button>
        </div>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">My Projects</h3>
          <ul className="space-y-2">
            <li className="p-3 border rounded hover:bg-gray-50">
              <h4 className="font-bold text-blue-700">Portfolio Website</h4>
              <p className="text-sm text-gray-500">Personal portfolio built with React & Tailwind</p>
            </li>
            <li className="p-3 border rounded hover:bg-gray-50">
              <h4 className="font-bold text-blue-700">QR Business Card</h4>
              <p className="text-sm text-gray-500">Smart business card with scan tracking</p>
            </li>
          </ul>
        </div>

        {/* QR Code Preview */}
        <div className="bg-white p-6 rounded shadow text-center">
          <h3 className="text-lg font-semibold mb-4">Your QR Code</h3>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?data=https://your-profile-url.com/shakeel"
            alt="QR Code"
            className="mx-auto w-40 h-40"
          />
          <p className="text-sm text-gray-500 mt-2">Scan this QR code to view your profile</p>
        </div>
      </div>
    </div>
  );
}

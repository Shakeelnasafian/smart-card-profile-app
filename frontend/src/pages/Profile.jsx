import React, { useEffect, useState } from "react";
import { getProfile } from "../api/profile.js";
import AvatarIcon from "../components/AvatarIcon";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProfile()
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error fetching profile data:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-6">Loading profile...</div>;
  if (!user)
    return <div className="p-6 text-red-500">Failed to load profile data</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full p-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt="Profile"
              className="w-28 h-28 rounded-full mb-4 border"
            />
          ) : (
            <AvatarIcon />
          )}
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-600">{user.title}</p>
        </div>

        {/* Contact */}
        <div className="flex justify-center gap-4 text-sm text-gray-700 mb-6 flex-wrap">
          <p>📧 {user.email}</p>
          <p>📞 {user.phone}</p>
          <a
            href={user.website}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            🌐 Website
          </a>
          <a
            href={user.linkedin}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
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

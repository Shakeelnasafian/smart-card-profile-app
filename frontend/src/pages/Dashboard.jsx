import React, { useEffect, useState } from "react";
import { getDashboardData } from "../api/dashboard";
import AvatarIcon from "../components/AvatarIcon"; 
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [user, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDashboardData()
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching dashboard data:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="p-6">Loading dashboard...</div>;
  if (!user) return <div className="p-6 text-red-500">Failed to load data</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="bg-white shadow rounded-lg p-6 flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt={user.name}
              className="w-16 h-16 rounded-full border"
            />
          ) : (
            <AvatarIcon />
          )}

          <div>
            <h2 className="text-xl font-bold">{user.name}</h2>
            <p className="text-sm text-gray-600">{user.title}</p>
            <p className="text-sm text-gray-400">{user.email}</p>
          </div>
        </div>
        <div className="space-x-2">
          <Link to="/profile" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Profile
          </Link>
          <Link to="/projects" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Projects
          </Link>
          <Link to="/viewer" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Viewer Profile
          </Link>
        </div>
      </div>

      {/* Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">My Projects</h3>
          <ul className="space-y-2">
            <li className="p-3 border rounded hover:bg-gray-50">
              <h4 className="font-bold text-blue-700">Portfolio Website</h4>
              <p className="text-sm text-gray-500">
                Personal portfolio built with React & Tailwind
              </p>
            </li>
            <li className="p-3 border rounded hover:bg-gray-50">
              <h4 className="font-bold text-blue-700">QR Business Card</h4>
              <p className="text-sm text-gray-500">
                Smart business card with scan tracking
              </p>
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
          <p className="text-sm text-gray-500 mt-2">
            Scan this QR code to view your profile
          </p>
        </div>
      </div>
    </div>
  );
}

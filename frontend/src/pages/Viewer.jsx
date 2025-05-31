import React, { useEffect, useState } from "react";
import AvatarIcon from "../components/AvatarIcon";
import { getProfile } from "../api/viewer.js";

export default function Viewer() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProfile()
      .then((response) => {
        setProfile(response.data);
      })
      .catch((err) => {
        console.error("Error fetching profile:", err);
        setError("Failed to load profile data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-6">Loading profile...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;
  if (!profile) return <div className="p-6 text-red-500">No profile data available</div>;

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 flex flex-col items-center">
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center mb-8">
        {profile.avatar ? (
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-28 h-28 rounded-full border mb-4"
          />
        ) : (
          <AvatarIcon />
        )}
        <h1 className="text-2xl font-bold">{profile.name}</h1>
        <p className="text-gray-600">{profile.title}</p>
        <p className="mt-4 max-w-xl">{profile.bio}</p>
      </div>

      {/* Contact / Links */}
      <div className="flex gap-4 flex-wrap justify-center mb-6">
        <a
          href={profile.website}
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          🌐 Website
        </a>
        <a
          href={profile.linkedin}
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          💼 LinkedIn
        </a>
      </div>

      {/* Projects Section */}
      <div className="w-full max-w-3xl">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {profile.projects.map((project, index) => (
            <div
              key={index}
              className="border p-4 rounded shadow hover:shadow-md transition"
            >
              <h3 className="font-bold text-blue-700">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.description}</p>
              {project.url && (
                <a
                  href={project.url}
                  className="text-sm text-blue-500 underline mt-2 inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

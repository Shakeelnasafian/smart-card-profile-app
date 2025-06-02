import React, { useEffect, useState } from "react";
import AvatarIcon from "../components/AvatarIcon";
import { getProjects } from "../api/projects.js";
import { getProfile } from "../api/profile.js"; // Add the missing import

export default function Projects() {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProjects() // Call getProjects directly
      .then((response) => {
        setProjects(response.data); // Store the data in state
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setError("Failed to load projects data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="p-6">Loading projects...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;
  if (!projects) return <div className="p-6 text-red-500">No projects data available</div>;

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 flex flex-col items-center">
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center mb-8">
        {projects.avatar ? (
          <img
            src={projects.avatar}
            alt={projects.name}
            className="w-28 h-28 rounded-full border mb-4"
          />
        ) : (
          <AvatarIcon />
        )}
        <h1 className="text-2xl font-bold">{projects.name}</h1>
        <p className="text-gray-600">{projects.title}</p>
        <p className="mt-4 max-w-xl">{projects.bio}</p>
      </div>

      {/* Contact / Links */}
      <div className="flex gap-4 flex-wrap justify-center mb-6">
        <a
          href={projects.website}
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          🌐 Website
        </a>
        <a
          href={projects.linkedin}
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
          {projects && projects.map((project, index) => (
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
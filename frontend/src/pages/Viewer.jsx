import React from 'react';

export default function Viewer() {
  const profile = {
    name: "Shakeel Ahmad",
    title: "Full Stack Developer",
    bio: "Hi! I build clean, efficient, and scalable web applications using Laravel, React, and Python. Passionate about solving problems with code.",
    avatar: "https://ui-avatars.com/api/?name=Shakeel+Ahmad&background=random",
    website: "https://shakeel.dev",
    linkedin: "https://linkedin.com/in/shakeel",
    projects: [
      {
        title: "Portfolio Website",
        description: "A personal site showcasing my projects and skills.",
        url: "https://shakeel.dev",
      },
      {
        title: "Smart QR Card",
        description: "Digital card generator with customizable layouts and QR codes.",
        url: "#",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 flex flex-col items-center">
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center mb-8">
        <img
          src={profile.avatar}
          alt={profile.name}
          className="w-28 h-28 rounded-full border mb-4"
        />
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

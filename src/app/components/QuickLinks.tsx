// src/components/QuickLinks.tsx
import React from 'react';

interface QuickLinkProps {
  links: { title: string; description: string; url: string }[];
}

const QuickLinks: React.FC<QuickLinkProps> = ({ links }) => (
    <section className="bg-white shadow-md rounded-lg p-6 mb-4">
    <h2 className="text-xl font-semibold text-gray-700 mb-4">Quick Links</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          className="block p-4 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors shadow-sm"
        >
          <h3 className="text-lg font-medium text-gray-800 mb-2">{link.title}</h3>
          <p className="text-gray-500">{link.description}</p>
        </a>
      ))}
    </div>
  </section>
);

export default QuickLinks;
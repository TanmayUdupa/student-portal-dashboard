// src/components/QuickLinks.tsx
import React from 'react';

interface QuickLinkProps {
  links: { title: string; description: string; url: string }[];
}

const QuickLinks: React.FC<QuickLinkProps> = ({ links }) => (
  <div className="flex flex-col">
    {links.map((link, index) => (
      <a
        key={index}
        href={link.url}
        className="bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors shadow-sm"
      >
        <h3 className="text-lg font-medium text-gray-800 mb-2">{link.title}</h3>
        <p className="text-gray-500">Click here to access your LMS Portal for assignments, class recordings, and notes</p>
      </a>
    ))}
  </div>
);

export default QuickLinks;
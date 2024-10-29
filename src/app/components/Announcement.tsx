// src/components/Announcement.tsx
import React from 'react';

interface AnnouncementProps {
  announcements: { id: number; text: string }[];
}

const Announcement: React.FC<AnnouncementProps> = ({ announcements }) => (
  <section className="bg-white shadow-md rounded-lg p-6 mb-4">
    <h2 className="text-xl font-semibold text-gray-700 mb-4">Announcements</h2>
    <ul className="space-y-2">
      {announcements.map((announcement) => (
        <li key={announcement.id} className="text-gray-600">
          {announcement.text}
        </li>
      ))}
    </ul>
  </section>
);

export default Announcement;
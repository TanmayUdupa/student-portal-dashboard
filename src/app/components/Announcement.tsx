// src/components/Announcement.tsx
import React from 'react';
import { Sun, ClipboardList } from 'lucide-react';

const Announcement = () => (
  <section className="bg-white shadow-md rounded-2xl p-5 mb-4">
    <ul className="space-y-2 text-sm">
        <li className="flex gap-2 pl-2 py-2 pr-12 text-announcementText bg-announcement">
          <Sun size={24} color="#5354B8" />
          On account of independence day, August 15th will be a holiday.
        </li>
        <li className="flex gap-2 pl-2 py-2 pr-12 text-announcementText bg-announcement">
          <ClipboardList size={24} color="#5354B8" />
          Reminder to finish assignments and submit them by Monday.
        </li>
    </ul>
  </section>
);

export default Announcement;
// src/components/Recordings.tsx
import React from 'react';

interface RecordingProps {
  recordings: { title: string; date: string }[];
}

const Recordings: React.FC<RecordingProps> = ({ recordings }) => (
  <section className="bg-white shadow-md rounded-2xl p-6 mb-4">
    <ul className="divide-y divide-gray-200">
      {recordings.map((recording, index) => (
        <li key={index} className="py-3 flex justify-between">
          <span className="text-gray-800 font-medium">{recording.title}</span>
          <span className="text-gray-500">{recording.date}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Recordings;
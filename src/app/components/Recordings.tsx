// src/components/Recordings.tsx
import React from 'react';

interface Recording {
  title: string;
  subject: string;
  date: string;
}

interface RecordingProps {
  recordings: Recording[];
}

const Recordings: React.FC<RecordingProps> = ({ recordings }) => (
  <section className="bg-[#F8F8FF] rounded-2xl p-6 w-full max-w-lg mx-auto">

    {/* Static Search and Filter Section */}
    <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
      <input
        type="text"
        placeholder="Search for class recordings"
        className="w-full p-3 mb-4 rounded-lg border border-gray-300"
        disabled
      />
      <div className="flex gap-4">
        <button className="p-3 rounded-lg border border-gray-300 text-gray-700" disabled>
          This week
        </button>
        <button className="p-3 rounded-lg border border-gray-300 text-gray-700" disabled>
          All subjects
        </button>
      </div>
    </div>

    {/* Recordings List */}
    <ul className="divide-y divide-gray-200">
      {recordings.map((recording, index) => (
        <li key={index} className="py-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-purple-700">{recording.subject}</p>
            <p className="text-xl font-bold">{recording.title}</p>
            <p className="text-sm text-gray-500">{recording.date}</p>
          </div>
          <button className="p-4 rounded-full bg-purple-600 text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-5.304 3.022a1 1 0 01-1.448-.894V9.704a1 1 0 011.448-.894l5.304 3.022a1 1 0 010 1.788z" />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  </section>
);

export default Recordings;
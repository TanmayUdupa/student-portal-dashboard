// src/components/Recordings.tsx
import React from 'react';
import Image from 'next/image';

interface Recording {
  subject: string;
  topic: string;
  date: string;
}

interface RecordingProps {
  recordings: Recording[];
}

const Recordings: React.FC<RecordingProps> = ({ recordings }) => (
  <section className="bg-white shadow-md rounded-2xl px-6 py-10 mb-4">
    <div className="bg-white rounded-xl shadow-sm mb-6">
      <input
        type="text"
        placeholder="🔎︎ Search for class recordings"
        className="w-full px-4 py-2 mb-4 rounded-lg border bg-input"
        disabled
      />
      <div className="flex justify-between gap-4">
        <span className="text-sm">
          Filter by:
        </span>
        <div className="flex gap-3">
          <button className="p-2 rounded-lg text-xs text-buttonText bg-input" disabled>
            <div className='flex justify-between gap-5'>
              <span> This week </span>
              <span> ▼ </span>
            </div>
          </button>
          <button className="p-2 rounded-lg border border-gray-300 text-xs text-buttonText bg-input" disabled>
            <div className='flex justify-between gap-5'>
              <span> All subjects </span>
              <span> ▼ </span>
            </div>
          </button>
        </div>
      </div>
    </div>

    {/* Recordings List */}
    <ul>
      {recordings.map((recording, index) => (
        <li key={index} className="px-1 pt-3 pb-1 flex border-b border-gray-200 justify-between">
          <div className="flex flex-col justify-between gap-5">
            <div className="w-52">
              <p className={`text-sm font-semibold ${(recording.subject === 'Class 7 Math' ? 'text-announcementText' : 'text-classToday')}`}>{recording.subject}</p>
              <p className="text-lg leading-5 font-black">{recording.topic}</p>
            </div>
            <p className="text-xs text-gray-500">{recording.date}</p>
          </div>
          <div className='flex justify-end items-center'>
            <Image 
              src={`${(recording.subject === 'Class 7 Math' ? '/math-image-normal.png' : '/science-image-normal.png')}`}
              alt="image"
              width={120}
              height={120}
            />
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default Recordings;
"use client"


import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import RecordingModal from './RecordingModal';

interface Recording {
  subject: string;
  topic: string;
  date: string;
}

interface RecordingProps {
  recordings: Recording[];
}

const Recordings: React.FC<RecordingProps> = ({ recordings }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return(
  <section className="bg-white shadow-md rounded-2xl px-6 py-10 mb-4">
    <div className="bg-white rounded-xl shadow-sm mb-6">
      <input
        type="text"
        placeholder="🔎︎ Search for class recordings"
        className="w-full px-4 py-2 mb-4 rounded-lg border bg-input"
        disabled
      />
      <div className="flex justify-between gap-4">
        <span className="text-base pl-2">
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
        <li
          key={index}
          className={`px-1 pt-3 pb-1 flex border-b border-gray-200 
            ${recording.subject === 'Class 7 Math' ? 'group hover:border-announcementText' : 'group hover:border-classToday'}
            justify-between`}
          onClick={handleModalOpen} 
        >
          <div className="flex flex-col justify-between gap-5">
            <div className="w-52">
              <p
                className={`text-sm font-semibold 
                  ${recording.subject === 'Class 7 Math' ? 'text-announcementText group-hover:text-recordingsMathHover' : 'text-classToday group-hover:text-recordingsScienceHover'}`}
              >
                {recording.subject}
              </p>
              <p className="text-lg leading-5 font-black">{recording.topic}</p>
            </div>
            <p className="text-xs text-gray-500">{recording.date}</p>
          </div>
          <div className="flex justify-end items-center relative">
            <Image
              src={`${recording.subject === 'Class 7 Math' ? '/math-image-normal.png' : '/science-image-normal.png'}`}
              alt="image"
              width={120}
              height={120}
              className="transition-opacity duration-300 group-hover:opacity-0"
            />
            <Image
              src={`${recording.subject === 'Class 7 Math' ? '/math-image-hover.png' : '/science-image-hover.png'}`}
              alt="image hover"
              width={120}
              height={120}
              className="absolute top-0 left-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
        </li>
      ))}
    </ul>
    {showModal && <RecordingModal onClose={handleModalClose} />}
  </section>
);
}
export default Recordings;
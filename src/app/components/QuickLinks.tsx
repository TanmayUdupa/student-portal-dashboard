"use client"

import React from 'react';
import { useState } from 'react';
import { BookOpenText, IdCard, PhoneCall } from 'lucide-react';
import EarlyLiveClassModal from './EarlyLiveClassModal';

const QuickLinks = () => {

  const [showModal, setShowModal] = useState(false);
  const isLiveClass = true;

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  
  return(
  <div className="flex flex-col justify-between items-center gap-2">
    <div
      className="flex flex-col justify-center items-center gap-4 w-full sm:w-96 h-48 bg-announcementText text-white rounded-2xl hover:bg-white hover:text-announcementText transition-colors shadow-sm"
    >
      <BookOpenText size={28}/>
      <div className='flex flex-col justify-between items-center'>
        <span className="text-2xl font-bold">Canvas LMS</span>
        <div className='text-sm text-center px-12'>
          Click here to access your LMS Portal for assignments, class recordings, and notes.
        </div>
      </div>
    </div>
    {isLiveClass ? (
        <div
          className="flex flex-col justify-center items-center gap-4 w-full sm:w-96 h-48 bg-classToday text-white rounded-2xl hover:bg-white hover:text-classToday transition-colors shadow-sm"
          onClick={handleModalOpen} 
        >
          <IdCard size={28}/>
          <div className='flex flex-col justify-between items-center'>
            <span className="text-2xl font-bold">Join Live Class</span>
            <div className='text-sm text-center px-12'>
              Class 7 Math is starting in <b>1 hour, 35 minutes.</b>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="flex flex-col justify-center items-center gap-4 w-full sm:w-96 h-48 bg-noLiveClass text-white rounded-2xl transition-colors shadow-sm"
        >
          <IdCard size={28}/>
          <div className='flex flex-col justify-between items-center'>
            <span className="text-2xl font-bold">No Live Classes</span>
            <div className='text-sm text-center px-12'>
              You have no live classes scheduled for today.
            </div>
          </div>
        </div>
    )}
    <div
      className="flex flex-col justify-center items-center gap-4 w-full sm:w-96 h-48 bg-contactLink text-white rounded-2xl hover:bg-white hover:text-contactLink transition-colors shadow-sm"
    >
      <PhoneCall size={28}/>
      <div className='flex flex-col justify-between items-center'>
        <span className="text-2xl font-bold">Contact Teacher</span>
        <div className='text-sm text-center px-12'>
          Click here to contact your teacher for any doubts or concerns
        </div>
      </div>
    </div>
    {showModal && <EarlyLiveClassModal onClose={handleModalClose} />}
  </div>
  );
}

export default QuickLinks;
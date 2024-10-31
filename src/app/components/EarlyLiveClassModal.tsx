import React from 'react';
import { Bell } from 'lucide-react'

interface EarlyLiveClassModalProps {
  onClose: () => void; // Define onClose as a function prop
}

const EarlyLiveClassModal: React.FC<EarlyLiveClassModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex px-4 pt-8 gap-3 flex-col justify-center items-center bg-black bg-opacity-50">
        <div className="flex items-center gap-4 rounded-2xl pl-8 py-2 w-full sm:w-[500px] bg-white text-lg font-black text-classToday">
            <Bell />
            Class 7 Math is starting in 1 hour, 34 minutes.
        </div>
        <div
        className="flex flex-col py-8 lg:py-16 justify-center items-center lg:gap-4 w-full sm:w-[450px] h-48 bg-white text-announcementText rounded-2xl transition-colors shadow-sm"
        >
            <div className='text-2xl font-black text-center px-12'>
                You can join the live class 5 minutes before it starts. Please wait.
            </div>
            <button
                className="mt-2 py-2 p-8 bg-announcementText text-lg rounded-full font-black text-white rounded"
                onClick={onClose}
            >
                Okay.
            </button>
        </div>
    </div>
  );
};

export default EarlyLiveClassModal;

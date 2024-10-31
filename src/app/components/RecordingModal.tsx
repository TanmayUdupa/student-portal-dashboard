import React from 'react';
import { X } from 'lucide-react'
import Image from 'next/image';

interface RecordingModalProps {
  onClose: () => void; // Define onClose as a function prop
}

const RecordingModal: React.FC<RecordingModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex pt-8 flex-col items-center bg-black bg-opacity-50">
        <div className="flex flex-col rounded-2xl bg-header">
            <div className="flex py-2 pl-96 gap-96">
                <div className="flex flex-col">
                    <p className="text-white opacity-90 pl-32">Class 7 Science</p>
                    <h2 className="text-white text-xl font-extrabold">Fundamentals of Organic Chemistry</h2>
                </div>
                <button
                className="mt-2 py-2 pr-8 text-white rounded"
                onClick={onClose}
                >
                    <X color={"white"}/>
                </button>
            </div>
            <Image
                src="/video-image.png"
                alt="image"
                width={1170}
                height={300}
                className='rounded-2xl'
            />
        </div>
    </div>
  );
};

export default RecordingModal;

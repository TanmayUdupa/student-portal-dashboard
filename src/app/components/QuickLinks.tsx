// src/components/QuickLinks.tsx
import React from 'react';
import { BookOpenText, IdCard, PhoneCall } from 'lucide-react';
import Link from "next/link";

const QuickLinks = () => (
  <div className="flex flex-col justify-between items-center gap-2">
    <Link href="/"
      className="flex flex-col justify-center items-center gap-4 w-96 h-48 bg-announcementText text-white rounded-2xl hover:bg-gray-200 transition-colors shadow-sm"
    >
      <BookOpenText size={28} color="white"/>
      <div className='flex flex-col justify-between items-center'>
        <span className="text-2xl font-bold">Canvas LMS</span>
        <div className='text-sm text-center px-12'>
          Click here to access your LMS Portal for assignments, class recordings, and notes.
        </div>
      </div>
    </Link>
    <Link href="/"
      className="flex flex-col justify-center items-center gap-4 w-96 h-48 bg-classToday text-white rounded-2xl hover:bg-gray-200 transition-colors shadow-sm"
    >
      <IdCard size={28} color="white"/>
      <div className='flex flex-col justify-between items-center'>
        <span className="text-2xl font-bold">Join Live Class</span>
        <div className='text-sm text-center px-12'>
          Click here to join your live class session. Please do not share the link.
        </div>
      </div>
    </Link>
    <Link href="/"
      className="flex flex-col justify-center items-center gap-4 w-96 h-48 bg-contactLink text-white rounded-2xl hover:bg-gray-200 transition-colors shadow-sm"
    >
      <PhoneCall size={28} color="white"/>
      <div className='flex flex-col justify-between items-center'>
        <span className="text-2xl font-bold">Contact Teacher</span>
        <div className='text-sm text-center px-12'>
          Click here to contact your teacher for any doubts or concerns
        </div>
      </div>
    </Link>
  </div>
);

export default QuickLinks;
// src/pages/index.tsx
import React from 'react';
import Announcement from './Announcement';
import ClassSchedule from './ClassSchedule';
import QuickLinks from './QuickLinks';
import Recordings from './Recordings';
import Image from 'next/image';

interface HeaderProps {
    userName: string;
    classInfo: string;
  }
  
  const Header = ({ userName, classInfo }: HeaderProps) => {
    return (
      <nav className="bg-header pr-6 pu-4 flex items-center justify-between">
        <Image 
          src="/logo.png"
          alt="ConnectEd Logo"
          width={200}
          height={200}
          className='justify-start'
        />

        <h1 className="text-white text-4xl font-bold">Student Portal</h1>
        
        <div className="text-right pr-8">
          <h2 className="text-white text-2xl font-bold">Hello, {userName}!</h2>
          <p className="text-white text-sm opacity-90">{classInfo}</p>
        </div>
      </nav>
    );
  };

const Dashboard = () => {
  const classes = [
    { title: 'Class 7, Science | Live Class', date: 'Tuesday, 5:00 - 5:50 PM', status: 'Yesterday' },
    { title: 'Class 7, Science | Live Class', date: 'Tuesday, 6:30 - 7:15 PM', status: 'Today' },
    { title: 'Class 7, Science | Live Class', date: 'Tuesday, 5 - 5:50 PM', status: 'Tomorrow' },
    { title: 'Class 7, Science | Live Class', date: 'Tuesday, 5 - 5:50 PM', status: '23rd Sept, 2024' },
  ];
  const recordings = [
    { subject: 'Class 7 Math', topic: 'Algebraic Equations', date: '24th October, 2024' },
    { subject: 'Class 7 Math', topic: 'Differential Maths', date: '24th October, 2024' },
    { subject: 'Class 7 Science', topic: 'Fundamentals of Organic Chemistry', date: '24th October, 2024' },
    { subject: 'Class 7 Math', topic: 'Trigonometry 101', date: '24th October, 2024' },
  ];

  return (
    <div>
      <Header 
        userName="Gabrisa"
        classInfo="Class 7, Math + Science"
      />
      <div className='flex justify-between p-20 gap-5'>
        <div className="flex-[0.7]">
          <div>
            <h1 className="text-2xl font-bold mb-4">Announcements</h1>
            <Announcement />
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4">Your Class Schedule</h1>
            <ClassSchedule classes={classes} />
          </div>
        </div>
        <div className='flex-[0.6]'>
          <h1 className="text-2xl font-bold ml-5 mb-4">Quick Links</h1>
          <QuickLinks />
        </div>
        <div className='flex flex-col flex-[0.7]'>
          <h1 className="text-2xl font-bold mb-4"> Access Class Recordings</h1>
          <Recordings recordings={recordings} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
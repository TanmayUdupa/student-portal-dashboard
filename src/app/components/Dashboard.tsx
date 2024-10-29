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
  const announcements = [{ id: 1, text: 'No class on August 15th due to holiday.' }];
  const classes = [{ subject: 'Math', time: '10:00 AM - 11:00 AM', status: 'Today' }];
  const links = [
    { title: 'Canvas LMS', description: 'Access LMS for notes.', url: '#' },
    { title: 'Join Live Class', description: 'Class starting in 10 mins.', url: '#' },
  ];
  const recordings = [{ title: 'Algebra', date: '24th Oct 2024' }];

  return (
    <div>
      <Header 
        userName="Gabrisa"
        classInfo="Class 7, Math + Science"
      />
      <Announcement announcements={announcements} />
      <ClassSchedule classes={classes} />
      <QuickLinks links={links} />
      <Recordings recordings={recordings} />
    </div>
  );
};

export default Dashboard;
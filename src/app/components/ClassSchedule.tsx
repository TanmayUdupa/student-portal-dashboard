// src/components/ClassSchedule.tsx
import React from 'react';
import { Video } from 'lucide-react';

interface ClassScheduleProps {
  classes: { title: string; date: string; status: string }[];
}

const ClassSchedule: React.FC<ClassScheduleProps> = ({ classes }) => (
  <section className="bg-white shadow-md rounded-2xl p-5 mb-4">
    <ul className="space-y-3">
      {classes.map((classItem, index) => (
        <li key={index} className={`flex justify-between pl-5 pr-4 py-4 rounded-lg  ${(classItem.status === 'Yesterday' || classItem.status === 'Tomorrow')? 'text-announcementText bg-announcement' : (classItem.status === 'Today' ? 'text-white bg-classToday' : 'text-classToday bg-otherStatus')}`}>
          <div className='flex gap-3 items-center'>
            <Video size={24} color={`${(classItem.status === 'Yesterday' || classItem.status === 'Tomorrow')? "#5354B8" : (classItem.status === 'Today' ? 'white' : '#E66DFF')}`}/>
            <div className="flex flex-col">
              <span className="text-xs">{classItem.title}</span>
              <span className="font-black">{classItem.date}</span>
            </div>
          </div>
          <span className={`text-xs flex items-center`}>
            {classItem.status}
          </span>
        </li>
      ))}
    </ul>
  </section>
);

export default ClassSchedule;
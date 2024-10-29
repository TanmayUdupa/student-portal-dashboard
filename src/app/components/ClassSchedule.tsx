// src/components/ClassSchedule.tsx
import React from 'react';

interface ClassScheduleProps {
  classes: { subject: string; time: string; status: string }[];
}

const ClassSchedule: React.FC<ClassScheduleProps> = ({ classes }) => (
  <section className="bg-white shadow-md rounded-2xl p-6 mb-4">
    <ul className="space-y-3">
      {classes.map((classItem, index) => (
        <li key={index} className="flex justify-between p-3 rounded-lg bg-gray-100 hover:bg-gray-200">
          <span className="font-medium text-gray-800">{classItem.subject}</span>
          <span className="text-gray-500">{classItem.time}</span>
          <span className={`font-semibold ${classItem.status === 'Today' ? 'text-green-500' : 'text-gray-400'}`}>
            {classItem.status}
          </span>
        </li>
      ))}
    </ul>
  </section>
);

export default ClassSchedule;
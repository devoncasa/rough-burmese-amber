import React from 'react';
import type { Note } from '../types';

interface RarityAlertProps {
  note: Note;
}

const RarityAlert: React.FC<RarityAlertProps> = ({ note }) => {
  return (
    <div className="mb-8 p-4 bg-amber-100/60 border-l-4 rtl:border-l-0 rtl:border-r-4 border-amber-500 rounded-r-lg rtl:rounded-r-none rtl:rounded-l-lg" role="alert">
      <div className="flex">
        <div className="py-1">
          <svg className="fill-current h-6 w-6 text-amber-600 mr-4 rtl:mr-0 rtl:ml-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-6a1 1 0 01-2 0 1 1 0 012 0zm-1-8a1 1 0 012 0v4a1 1 0 11-2 0V4z"/>
          </svg>
        </div>
        <div>
          <p className="font-bold text-amber-900">{note.title}</p>
          <p className="text-sm text-amber-800">{note.content}</p>
        </div>
      </div>
    </div>
  );
};

export default RarityAlert;
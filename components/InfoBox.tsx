import React from 'react';
import type { Note } from '../types';

interface InfoBoxProps {
  note: Note;
}

const InfoBox: React.FC<InfoBoxProps> = ({ note }) => {
  if (!note || !note.content) {
    return null;
  }
  
  return (
    <div className="mb-8 p-4 bg-sky-100/60 border-l-4 rtl:border-l-0 rtl:border-r-4 border-sky-500 rounded-r-lg rtl:rounded-r-none rtl:rounded-l-lg print:hidden" role="status">
      <div className="flex">
        <div className="flex-shrink-0 py-1">
          <svg className="fill-current h-6 w-6 text-sky-600 mr-4 rtl:mr-0 rtl:ml-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-6v-4a1 1 0 112 0v4a1 1 0 11-2 0zm1-7a1 1 0 100 2 1 1 0 000-2z" />
          </svg>
        </div>
        <div>
          <p className="font-bold text-sky-900 text-xl">{note.title}</p>
          <p className="text-lg text-sky-800 whitespace-pre-line">{note.content}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
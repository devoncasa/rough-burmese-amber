import React from 'react';
import type { Note } from '../types';

interface NotesSectionProps {
  notes: Note[];
  title: string;
}

const NotesSection: React.FC<NotesSectionProps> = ({ notes, title }) => {
  return (
    <div className="mt-12 p-8 bg-amber-50/70 border border-amber-200/80 rounded-2xl">
      <h2 className="text-2xl font-bold text-amber-900 mb-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mr-3 rtl:mr-0 rtl:ml-3 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
          <path d="M11 3a1 1 0 100 2h.01a1 1 0 100-2H11zM10.707 6.293a1 1 0 00-1.414 0L6 9.586V11h1.586l3.293-3.293a1 1 0 000-1.414z" />
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.01a1 1 0 102 0V5z" clipRule="evenodd" />
        </svg>
        {title}
      </h2>
      <ul className="space-y-4">
        {notes.map((note, index) => (
          <li key={index}>
            <p className="text-stone-700">
              <span className="font-semibold text-stone-800">{note.title}:</span> {note.content}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotesSection;
'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';

export default function NotesClient() {
  const { data } = useQuery({
    queryKey: ['notes', 1, ''],
    queryFn: () => fetchNotes({ page: 1, perPage: 12, search: '' }),
    refetchOnMount: false,
  });

  if (!data) return <p>Loading...</p>;

  return (
    <ul>
      {data.notes.map((note) => (
        <li key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.tag}</p>
        </li>
      ))}
    </ul>
  );
}
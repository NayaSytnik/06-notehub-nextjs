import type { ComponentType } from 'react';
import NoteDetails from './NoteDetails.client';

type Props = {
  params: Promise<{ id: string }>;
};

const NoteDetailsClient = NoteDetails as ComponentType<{ id: string }>;

export default async function Page({ params }: Props) {
  const { id } = await params;

  return <NoteDetailsClient id={id} />;
}

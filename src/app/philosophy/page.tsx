import type { Metadata } from 'next';
import PhilosophyClient from './PhilosophyClient';

export const metadata: Metadata = {
  title: 'Design & Philosophy — Ulternative Spaces',
  description:
    'The mark, the method, and the philosophy behind Ulternative Spaces. Two circles, one unbroken line — an architecture of infinite possibility.',
};

export default function PhilosophyPage() {
  return <PhilosophyClient />;
}

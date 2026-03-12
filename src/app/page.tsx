import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Ulternative Spaces — Design-Build · Kampala · Juba',
  description:
    'Ulternative Spaces is a Design-Build company at the intersection of creative architecture and meticulous construction. Based in Kampala, Uganda and Juba, South Sudan.',
  openGraph: {
    title: 'Ulternative Spaces — Design-Build · Kampala · Juba',
    description: 'Architecture & Interior Design across East Africa.',
    type: 'website',
  },
};

export default function Home() {
  return <HomeClient />;
}

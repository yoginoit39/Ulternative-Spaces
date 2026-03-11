'use client';
import { useState } from 'react';

export default function ProjectCTAClient() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        padding: '100px 5vw',
        backgroundColor: 'var(--mid)',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          color: 'var(--steel)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: 20,
        }}
      >
        Like what you see?
      </p>
      <h2
        style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: 'clamp(40px, 6vw, 90px)',
          color: 'var(--parch)',
          letterSpacing: '-0.03em',
          lineHeight: 0.95,
          margin: '0 0 48px 0',
        }}
      >
        Let&apos;s Build Together.
      </h2>
      <a
        href="mailto:sulternative@gmail.com"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'inline-block',
          backgroundColor: hovered ? 'var(--gold)' : 'var(--ember)',
          color: 'white',
          padding: '18px 36px',
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          textDecoration: 'none',
          transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
          transition: 'background-color 0.25s ease, transform 0.25s ease',
        }}
      >
        Start a Project ↗
      </a>
    </div>
  );
}

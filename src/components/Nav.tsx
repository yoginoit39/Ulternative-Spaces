'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '/#about', label: 'About' },
  { href: '/#work', label: 'Work' },
  { href: '/#gallery', label: 'Gallery' },
  { href: '/#services', label: 'Services' },
  { href: '/#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(7,5,4,0.97)' : 'rgba(7,5,4,0.9)',
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        borderBottom: '1px solid rgba(242,232,211,0.06)',
        padding: '20px 5vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'background-color 0.3s ease',
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
        <span
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 14,
            color: 'var(--ember)',
          }}
        >
          U.S
        </span>
        <span style={{ color: 'var(--steel)', fontSize: 12 }}>·</span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            letterSpacing: '0.2em',
            color: 'var(--parch)',
            textTransform: 'uppercase',
          }}
        >
          ULTERNATIVE SPACES
        </span>
      </Link>

      {/* Center nav links */}
      <ul
        style={{
          display: 'flex',
          gap: 32,
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
        className="nav-center-links"
      >
        {NAV_LINKS.map((link) => (
          <li key={link.href}>
            <NavLink href={link.href} label={link.label} />
          </li>
        ))}
      </ul>

      {/* CTA */}
      <CTAButton />

      <style>{`
        @media (max-width: 767px) {
          .nav-center-links {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 9,
        letterSpacing: '0.15em',
        color: hovered ? 'var(--parch)' : 'var(--steel)',
        textDecoration: 'none',
        textTransform: 'uppercase',
        transition: 'color 0.2s ease',
      }}
    >
      {label}
    </a>
  );
}

function CTAButton() {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href="mailto:sulternative@gmail.com"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: hovered ? '1px solid var(--ember)' : '1px solid rgba(242,232,211,0.2)',
        padding: '8px 16px',
        fontFamily: 'var(--font-mono)',
        fontSize: 9,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: hovered ? 'white' : 'var(--parch)',
        backgroundColor: hovered ? 'var(--ember)' : 'transparent',
        textDecoration: 'none',
        transition: 'all 0.2s ease',
        whiteSpace: 'nowrap',
      }}
    >
      Start a Project ↗
    </a>
  );
}

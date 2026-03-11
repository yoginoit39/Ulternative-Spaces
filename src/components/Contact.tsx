'use client';
import { useState } from 'react';

const CONTACT_ITEMS = [
  { label: 'Email', value: 'sulternative@gmail.com', href: 'mailto:sulternative@gmail.com' },
  { label: 'Phone', value: '+256 782 843290', href: 'tel:+256782843290' },
  { label: 'Location', value: 'Kampala, Uganda', href: null },
  { label: 'Location', value: 'Juba, South Sudan', href: null },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        backgroundColor: 'var(--ink)',
        padding: '120px 5vw 80px',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          color: 'var(--ember)',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          marginBottom: 24,
        }}
      >
        06 / Get In Touch
      </p>

      <h2
        style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: 'clamp(48px, 8vw, 120px)',
          color: 'var(--parch)',
          letterSpacing: '-0.03em',
          lineHeight: 0.9,
          margin: '0 0 72px 0',
        }}
      >
        Let&apos;s Build
        <br />
        Together.
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 40,
          marginBottom: 72,
        }}
        className="contact-grid"
      >
        {CONTACT_ITEMS.map((item, i) => (
          <div key={i}>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 9,
                color: 'var(--steel)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: 8,
              }}
            >
              {item.label}
            </p>
            {item.href ? (
              <a
                href={item.href}
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontWeight: 400,
                  fontSize: 18,
                  color: 'var(--parch)',
                  textDecoration: 'none',
                  display: 'block',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ember)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--parch)')}
              >
                {item.value}
              </a>
            ) : (
              <p
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontWeight: 400,
                  fontSize: 18,
                  color: 'var(--parch)',
                  margin: 0,
                }}
              >
                {item.value}
              </p>
            )}
          </div>
        ))}
      </div>

      <CTAButton />

      <style>{`
        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
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
  );
}

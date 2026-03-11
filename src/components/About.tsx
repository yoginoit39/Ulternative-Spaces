'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const METRICS = [
  { value: '50+', label: 'Projects' },
  { value: '8+', label: 'Years' },
  { value: '2', label: 'Countries' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const elements = section.querySelectorAll<HTMLElement>('.reveal-up');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: '120px 5vw',
        backgroundColor: 'var(--ink)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 60,
          alignItems: 'start',
        }}
        className="about-grid"
      >
        {/* Left column */}
        <div className="reveal-up">
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
            01 / About
          </p>

          <div
            style={{
              position: 'relative',
              aspectRatio: '4/3',
              width: '100%',
              overflow: 'hidden',
            }}
          >
            <Image
              src="/images/Image from Facebook (17).jpg"
              alt="Ulternative Spaces project"
              fill
              unoptimized
              style={{ objectFit: 'cover' }}
            />
          </div>

          {/* Metrics row */}
          <div
            style={{
              display: 'flex',
              gap: 40,
              marginTop: 32,
              flexWrap: 'wrap',
            }}
          >
            {METRICS.map((m) => (
              <div key={m.label}>
                <div
                  style={{
                    fontFamily: 'var(--font-syne)',
                    fontWeight: 800,
                    fontSize: 'clamp(36px, 4vw, 52px)',
                    color: 'var(--ember)',
                    lineHeight: 1,
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 9,
                    color: 'var(--steel)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    marginTop: 6,
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="reveal-up" style={{ paddingTop: 48 }}>
          <blockquote
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontSize: 'clamp(24px, 3vw, 40px)',
              color: 'var(--parch)',
              lineHeight: 1.3,
              margin: '0 0 36px 0',
              borderLeft: '2px solid var(--ember)',
              paddingLeft: 24,
            }}
          >
            "We don&apos;t just design buildings — we design the quality of your life."
          </blockquote>

          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: 18,
              color: 'var(--steel)',
              lineHeight: 1.7,
              marginBottom: 24,
            }}
          >
            Ulternative Spaces is a Design-Build company at the intersection of creative architecture
            and meticulous construction — bringing your vision from blueprint to built reality.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: 18,
              color: 'var(--steel)',
              lineHeight: 1.7,
            }}
          >
            Based in{' '}
            <strong style={{ fontWeight: 600, color: 'var(--parch)' }}>Kampala, Uganda</strong> and{' '}
            <strong style={{ fontWeight: 600, color: 'var(--parch)' }}>Juba, South Sudan</strong>,
            we serve clients across East Africa with spaces that are not only beautiful, but
            enduring.
          </p>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 60% 40% !important;
          }
        }
      `}</style>
    </section>
  );
}

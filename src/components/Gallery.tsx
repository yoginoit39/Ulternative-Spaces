'use client';
import { useState } from 'react';
import Image from 'next/image';

const GALLERY_PROJECTS = [
  {
    num: '01',
    name: 'Kampala Residence',
    category: 'Residential',
    year: '2024',
    slug: 'kampala-residence',
    cover: '/images/Image from Facebook (1).jpg',
  },
  {
    num: '02',
    name: 'Commercial Complex',
    category: 'Commercial',
    year: '2024',
    slug: 'commercial-complex',
    cover: '/images/Image from Facebook (6).jpg',
  },
  {
    num: '03',
    name: 'Interior Suite',
    category: 'Interiors',
    year: '2023',
    slug: 'interior-suite',
    cover: '/images/Image from Facebook (11).jpg',
  },
  {
    num: '04',
    name: 'Villa Design',
    category: 'Residential',
    year: '2023',
    slug: 'villa-design',
    cover: '/images/Image from Facebook (15).jpg',
  },
  {
    num: '05',
    name: 'Juba Complex',
    category: 'Mixed-Use',
    year: '2022',
    slug: 'juba-complex',
    cover: '/images/Image from Facebook (19).jpg',
  },
  {
    num: '06',
    name: 'Urban Pavilion',
    category: 'Architecture',
    year: '2022',
    slug: 'urban-pavilion',
    cover: '/images/Image from Facebook (24).jpg',
  },
];

const POSITIONS = [
  { left: '2%',  top: '5%',  width: '28%', rotate: -2.5, zIndex: 1 },
  { left: '24%', top: '18%', width: '22%', rotate: 1.8,  zIndex: 3 },
  { left: '44%', top: '3%',  width: '26%', rotate: -1.2, zIndex: 2 },
  { left: '66%', top: '12%', width: '20%', rotate: 3.0,  zIndex: 4 },
  { left: '10%', top: '42%', width: '24%', rotate: 2.2,  zIndex: 2 },
  { left: '58%', top: '38%', width: '30%', rotate: -2.0, zIndex: 3 },
];

export default function Gallery() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      style={{
        padding: '120px 5vw 160px',
        backgroundColor: 'var(--ink)',
        position: 'relative',
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: 60 }}>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: 'var(--ember)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: 16,
          }}
        >
          04 / More Work
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(48px, 7vw, 110px)',
            color: 'var(--parch)',
            letterSpacing: '-0.03em',
            lineHeight: 0.9,
            margin: 0,
          }}
        >
          SELECTED
          <br />
          PROJECTS
        </h2>
      </div>

      {/* Scattered photos — desktop only */}
      <div
        className="gallery-scattered"
        style={{
          height: 'clamp(400px, 60vh, 700px)',
          position: 'relative',
          overflow: 'hidden',
          marginBottom: 80,
        }}
      >
        {GALLERY_PROJECTS.map((project, i) => {
          const pos = POSITIONS[i];
          const isLifted = hoveredIdx === i;

          return (
            <div
              key={project.slug}
              style={{
                position: 'absolute',
                left: pos.left,
                top: pos.top,
                width: pos.width,
                aspectRatio: '4/3',
                overflow: 'hidden',
                border: isLifted
                  ? '2px solid rgba(198,156,26,0.5)'
                  : '2px solid rgba(242,232,211,0.08)',
                zIndex: isLifted ? 20 : pos.zIndex,
                transform: isLifted
                  ? 'rotate(0deg) scale(1.08)'
                  : `rotate(${pos.rotate}deg) scale(1)`,
                transition: 'transform 0.4s ease, border-color 0.4s ease, z-index 0s',
              }}
            >
              <Image
                src={project.cover}
                alt={project.name}
                fill
                unoptimized
                style={{
                  objectFit: 'cover',
                  filter: isLifted
                    ? 'saturate(1) brightness(0.95)'
                    : 'saturate(0.7) brightness(0.85)',
                  transition: 'filter 0.4s ease',
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Editorial list */}
      <div>
        {GALLERY_PROJECTS.map((project, i) => (
          <GalleryRow
            key={project.slug}
            project={project}
            onEnter={() => setHoveredIdx(i)}
            onLeave={() => setHoveredIdx(null)}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 767px) {
          .gallery-scattered { display: none !important; }
          .gallery-meta { display: none !important; }
          .gallery-arrow { display: block !important; opacity: 1 !important; transform: none !important; }
        }
      `}</style>
    </section>
  );
}

function GalleryRow({
  project,
  onEnter,
  onLeave,
}: {
  project: (typeof GALLERY_PROJECTS)[number];
  onEnter: () => void;
  onLeave: () => void;
}) {
  const [hovered, setHovered] = useState(false);

  const handleEnter = () => {
    setHovered(true);
    onEnter();
  };

  const handleLeave = () => {
    setHovered(false);
    onLeave();
  };

  return (
    <a
      href={`/work/${project.slug}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        padding: '26px 0',
        borderBottom: hovered
          ? '1px solid rgba(232,82,10,0.4)'
          : '1px solid rgba(242,232,211,0.08)',
        textDecoration: 'none',
        transition: 'border-color 0.25s ease',
        cursor: 'pointer',
      }}
    >
      {/* Number */}
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          color: 'var(--ember)',
          letterSpacing: '0.15em',
          width: 22,
          flexShrink: 0,
        }}
      >
        {project.num}
      </span>

      {/* Name */}
      <span
        style={{
          fontFamily: 'var(--font-syne)',
          fontWeight: 800,
          fontSize: 'clamp(22px, 3.5vw, 54px)',
          color: 'var(--parch)',
          flex: 1,
          transform: hovered ? 'translateX(10px)' : 'translateX(0)',
          transition: 'transform 0.3s var(--ease-out)',
          lineHeight: 1,
        }}
      >
        {project.name}
      </span>

      {/* Category / Year */}
      <span
        className="gallery-meta"
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 9,
          color: hovered ? 'var(--ember)' : 'var(--steel)',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          transition: 'color 0.25s ease',
          flexShrink: 0,
        }}
      >
        {project.category} / {project.year}
      </span>

      {/* Arrow */}
      <span
        className="gallery-arrow"
        style={{
          color: 'var(--ember)',
          fontSize: 18,
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(-6px)',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
          flexShrink: 0,
        }}
      >
        ↗
      </span>
    </a>
  );
}

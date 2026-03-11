'use client';
import { useEffect, useRef, useState } from 'react';

const FILTER_BUTTONS = ['ALL WORK', 'RESIDENTIAL', 'COMMERCIAL', 'INTERIORS'] as const;

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tickerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>('ALL WORK');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(232, 82, 10, 0.15)';
        ctx.fill();
      }
      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  // Ticker animation
  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;
    let x = 0;
    let raf: number;
    const speed = 0.5;
    const tickerWidth = ticker.scrollWidth / 2;

    const animate = () => {
      x -= speed;
      if (Math.abs(x) >= tickerWidth) x = 0;
      ticker.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  const tickerText =
    'ARCHITECTURE · INTERIOR DESIGN · CONSTRUCTION · KAMPALA, UGANDA · JUBA, SOUTH SUDAN · DESIGN-BUILD · ULTERNATIVE SPACES · ';

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'var(--ink)',
        overflow: 'hidden',
      }}
    >
      {/* Background canvas */}
      <canvas
        ref={canvasRef}
        id="heroCanvas"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.35,
        }}
      />

      {/* Top bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: '20px 5vw',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 100,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            color: 'var(--steel)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          DESIGN-BUILD · EST. KAMPALA
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            color: 'var(--steel)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          KAMPALA, UG · JUBA, SS
        </span>
      </div>

      {/* Main content */}
      <div
        style={{
          padding: '0 5vw',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <h1
          style={{
            fontFamily: 'var(--font-syne)',
            fontWeight: 800,
            fontSize: 'clamp(72px, 12vw, 180px)',
            letterSpacing: '-0.04em',
            lineHeight: 0.88,
            color: 'var(--parch)',
            margin: 0,
          }}
        >
          <span style={{ display: 'block' }}>ULTERNATIVE</span>
          <span style={{ display: 'block' }}>SPACES.</span>
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            color: 'var(--steel)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginTop: 32,
          }}
        >
          Architecture · Interior Design · Design-Build
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            marginTop: 32,
          }}
        >
          {FILTER_BUTTONS.map((btn) => (
            <FilterButton
              key={btn}
              label={btn}
              active={activeFilter === btn}
              onClick={() => setActiveFilter(btn)}
            />
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          position: 'absolute',
          bottom: 48,
          left: 0,
          right: 0,
          padding: '24px 5vw',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            color: 'var(--steel)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          SCROLL ↓
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            color: 'var(--ember)',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          50+ Projects Built
        </span>
      </div>

      {/* Scrolling ticker */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          overflow: 'hidden',
          borderTop: '1px solid rgba(242,232,211,0.06)',
          backgroundColor: 'rgba(14,12,10,0.6)',
          padding: '10px 0',
          whiteSpace: 'nowrap',
        }}
      >
        <div ref={tickerRef} style={{ display: 'inline-flex', willChange: 'transform' }}>
          {[tickerText, tickerText].map((text, i) => (
            <span
              key={i}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 9,
                color: 'var(--steel)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                paddingRight: '2em',
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FilterButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: active || hovered ? '1px solid var(--ember)' : '1px solid rgba(242,232,211,0.15)',
        padding: '8px 14px',
        fontFamily: 'var(--font-mono)',
        fontSize: 9,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: active || hovered ? 'var(--parch)' : 'var(--steel)',
        backgroundColor: active ? 'rgba(232,82,10,0.12)' : 'transparent',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
      }}
    >
      {label}
    </button>
  );
}

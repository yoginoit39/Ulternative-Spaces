const STEPS = [
  {
    num: '01',
    name: 'Brief & Discovery',
    description:
      'We start by listening — to you, to the site, to the materials. Before a single line is drawn.',
  },
  {
    num: '02',
    name: 'Concept Design',
    description:
      'Creative exploration. Architectural concepts that interpret your brief with originality and spatial intelligence.',
  },
  {
    num: '03',
    name: 'Development',
    description:
      'Every detail refined. Technical drawings, material selections, and specifications guide flawless construction.',
  },
  {
    num: '04',
    name: 'Build & Deliver',
    description:
      'We build what we design. On-site management ensuring the vision becomes reality — on time, on budget.',
  },
];

export default function Process() {
  return (
    <section
      id="process"
      style={{
        padding: '140px 5vw',
        backgroundColor: 'var(--mid)',
      }}
    >
      <div style={{ marginBottom: 72 }}>
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
          05 / Process
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-cormorant)',
            fontWeight: 600,
            fontSize: 'clamp(40px, 6vw, 80px)',
            color: 'var(--parch)',
            letterSpacing: '-0.01em',
            lineHeight: 1.05,
            margin: 0,
          }}
        >
          How We Work
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 48,
        }}
        className="process-grid"
      >
        {STEPS.map((step) => (
          <div key={step.num}>
            <div
              style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 800,
                fontSize: 'clamp(60px, 8vw, 100px)',
                color: 'var(--ember)',
                opacity: 0.2,
                lineHeight: 1,
                marginBottom: 16,
              }}
            >
              {step.num}
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-syne)',
                fontWeight: 800,
                fontSize: 20,
                color: 'var(--parch)',
                marginBottom: 14,
              }}
            >
              {step.name}
            </h3>
            <p
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontWeight: 300,
                fontSize: 17,
                color: 'var(--steel)',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .process-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}

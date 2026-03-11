import SmoothScroll from '@/components/SmoothScroll';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Work from '@/components/Work';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Process from '@/components/Process';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  return (
    <SmoothScroll>
      <Nav />
      <Hero />
      <About />
      <Work />
      <Services />

      {/* Quote Break */}
      <div
        style={{
          background: 'linear-gradient(to right, var(--ink), var(--mid))',
          padding: '100px 5vw',
          display: 'flex',
          alignItems: 'center',
          gap: '5vw',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ flex: '1 1 400px' }}>
          <blockquote
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontStyle: 'italic',
              fontSize: 'clamp(22px, 3vw, 38px)',
              color: 'var(--parch)',
              borderLeft: '2px solid var(--ember)',
              paddingLeft: 24,
              margin: '0 0 20px 0',
              lineHeight: 1.4,
            }}
          >
            &ldquo;Every structure we raise is a statement — that craft matters, that beauty
            endures.&rdquo;
          </blockquote>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 9,
              color: 'var(--steel)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginLeft: 26,
            }}
          >
            — Ulternative Spaces · Kampala
          </p>
        </div>

        <div
          style={{
            flex: '0 0 clamp(260px, 30vw, 420px)',
            height: 400,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Image
            src="/images/Image from Facebook (17).jpg"
            alt="Ulternative Spaces craftsmanship"
            fill
            unoptimized
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>

      <Gallery />
      <Process />
      <Contact />
      <Footer />
    </SmoothScroll>
  );
}

import { useEffect, useRef } from 'react';

export default function Services() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { e.target.style.opacity = 1; e.target.style.transform = 'none'; }
    }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} style={{
      padding: 'clamp(60px,8vw,80px) clamp(24px,5vw,60px)',
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 60, alignItems: 'center',
      opacity: 0, transform: 'translateY(28px)', transition: 'opacity .7s ease, transform .7s ease',
      position: 'relative',
    }}>
      {/* red curvy line SVG */}
      <svg style={{ position: 'absolute', top: '-20%', left: '13%', width: '87%', pointerEvents: 'none', zIndex: 0, transform: 'rotate(-25deg)' }} viewBox="0 0 400 120" fill="none">
        <path d="M0 80 Q80 20 160 70 Q240 120 320 40 Q370 10 400 50" stroke="#ff7171" strokeWidth="2" fill="none" />
      </svg>

      {/* LEFT: circular image + red triangles */}
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', zIndex: 1, minHeight: 320 }}>
        {/* small red triangle top left */}
        <div style={{ position: 'absolute', top: 30, left: 122, zIndex: 1 }}>
          <svg width="110" height="96" viewBox="0 0 50 44" fill="none">
            <polygon points="25,0 50,44 0,44" fill="#ff7171" />
          </svg>
        </div>
        {/* circular image */}
        <div style={{ width: 280, height: 280, borderRadius: '50%', overflow: 'hidden', position: 'relative', zIndex: 2, marginTop: 30 }}>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop"
            alt="team working"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
        {/* big red triangle bottom right */}
        <div style={{ position: 'absolute', bottom: 0, right: 110, zIndex: 3 }}>
          <svg width="110" height="96" viewBox="0 0 110 96" fill="none">
            <polygon points="55,0 110,96 0,96" fill="#ff7171" />
          </svg>
        </div>
      </div>

      {/* RIGHT: text */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(26px,3.5vw,44px)', fontWeight: 700, lineHeight: 1.2, marginBottom: 20 }}>
          <span style={{ background: '#d7eedd', borderRadius: 50, padding: '0 8px' }}>See</span>
          how we can<br />
          help you{' '}
          <span style={{ position: 'relative', display: 'inline-block', paddingBottom: 10 }}>
            progress
            <svg
              style={{ position: 'absolute', bottom: -4, left: 0, width: '100%', height: 14, overflow: 'visible' }}
              viewBox="0 0 120 14"
              preserveAspectRatio="none"
            >
              <path d="M0 4 Q30 0 60 4 Q90 8 120 4" stroke="#ffc250" strokeWidth="2.5" fill="none" />
              <path d="M0 10 Q30 6 60 10 Q90 14 120 10" stroke="#ffc250" strokeWidth="2.5" fill="none" />
            </svg>
          </span>
        </h2>
        <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.75, marginBottom: 24, maxWidth: 360 }}>
          We add a layer of fearless insights and action that allows change makers to accelerate their progress in areas such as brand, design digital, comms and social research.
        </p>
        <button style={{ background: 'transparent', border: 'none',display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 500, color: '#0a0a0a', textDecoration: 'none', borderBottom: '1px solid #0a0a0a', paddingBottom: 2 }}>
          Read more &nbsp;————→
        </button>
      </div>
    </section>
  );
}
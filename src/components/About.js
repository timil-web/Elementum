import { useEffect, useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { e.target.style.opacity = 1; e.target.style.transform = 'none'; }
    }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{
      padding: 'clamp(60px,8vw,100px) clamp(24px,5vw,60px)',
      display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
      gap: 60, alignItems: 'center',
      opacity: 0, transform: 'translateY(28px)', transition: 'opacity .7s ease, transform .7s ease',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* pink blob top right */}
      <div style={{ position: 'absolute', top: -60, right: 400, width: 320, height: 320, background: 'radial-gradient(circle,#fce4ec 0%,#f8bbd9 20%,transparent 50%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 0 }} />

      {/* LEFT: text */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(26px,3.5vw,46px)', fontWeight: 700, lineHeight: 1.2, marginBottom: 20 }}>

          <span style={{ position: 'relative', display: 'inline-block', paddingBottom: 10 }}>
            Tomorrow
            <svg
              style={{ position: 'absolute', bottom: -4, left: 0, width: '100%', height: 14, overflow: 'visible' }}
              viewBox="0 0 120 14"
              preserveAspectRatio="none"
            >
              <path d="M0 4 Q30 0 60 4 Q90 8 120 4" stroke="#ffc250" strokeWidth="2.5" fill="none" />
              <path d="M0 10 Q30 6 60 10 Q90 14 120 10" stroke="#ffc250" strokeWidth="2.5" fill="none" />
            </svg>
          </span>

          {' '}should<br />
          be better than{' '}
          <span style={{ background: '#d7eedd', borderRadius: 50, padding: '0 8px' }}>today</span>
        </h2>
        <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.75, marginBottom: 24, maxWidth: 360 }}>
          We are a team of strategists, designers communicators, researchers. Togeather, we belive that progress only happens when you refuse to play things safe.
        </p>
        <button style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 500, color: '#0a0a0a', textDecoration: 'none', borderBottom: '1px solid #0a0a0a', paddingBottom: 2 }}>
          Read more &nbsp;————→
        </button>
      </div>

      {/* RIGHT: circular image + red triangle + grey rectangle outline */}
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', zIndex: 1, minHeight: 320 }}>
        {/* grey rectangle outline - top right */}
        {/* <div style={{ position: 'absolute', top: 0, right: 0, width: 130, height: 110, border: '2px solid #9ca3af', borderRadius: 4, transform: 'rotate(8deg)', zIndex: 0 }} /> */}

        {/* red triangle - overlapping top right of circle */}
        <div style={{ position: 'absolute', top: 35, right: 80, zIndex: 2 }}>
          <svg width="90" height="15" viewBox="0 0 70 70" fill="none" style={{ transform: 'rotate(10deg)' }}>
            <rect x="0" y="0" width="70" height="70" fill="#ff7171" />
          </svg>
        </div>
        {/* circular image */}
        <div style={{ width: 350, height: 350, borderRadius: '50%', overflow: 'hidden', position: 'relative', zIndex: 3, marginTop: 30 }}>
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop"
            alt="meeting"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
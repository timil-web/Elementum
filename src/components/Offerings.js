import { useEffect, useRef, useState } from 'react';

const items = [
  { label: 'Office of multiple\ninterest content', name: 'Collaborative & partnership' },
  { label: 'The hanger US Air force\ndigital experimental', name: 'We talk about our weight' },
  { label: 'Delta faucet content,\nsocial, digital', name: 'Piloting digital confidence' },
];

export default function Offerings() {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting) { e.target.style.opacity=1; e.target.style.transform='none'; }; }, { threshold: 0.1 });
    if(ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="offerings" ref={ref} style={{ position: 'relative', padding: 'clamp(60px,8vw,80px) clamp(24px,5vw,60px)', opacity: 0, transform: 'translateY(28px)', transition: 'opacity .7s ease, transform .7s ease' }}>
      <h2 style={{ display: 'inline-block', fontFamily: "'Syne',sans-serif", fontSize: 'clamp(26px,3.5vw,44px)', fontWeight: 800, border: '2px solid #f97316', padding: '12px 24px', marginBottom: 40 }}>
        What we can<br />offer you!
      </h2>
      <svg style={{ position: 'absolute', top: '-30%', left: '48%', width: '70%', pointerEvents: 'none', zIndex: 0, transform: 'rotate(-25deg)' }} viewBox="0 0 400 120" fill="none">
        <path d="M0 180 Q90 0 160 80 Q280 170 380 50" stroke="#ff7171" strokeWidth="2" fill="none" />
      </svg>

      <div style={{ borderTop: '1px solid #e5e7eb' }}>
        {items.map((item, i) => (
          <div key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              display: 'grid',
              gridTemplateColumns: 'clamp(120px,15vw,200px) 1fr 50px',
              alignItems: 'center', gap: 100, padding: '20px 0',
              borderBottom: '1px solid #e5e7eb',
              cursor: 'pointer',
              background: hovered === i ? '#fafafa' : 'transparent',
              transition: 'background .2s',
            }}>
            <span style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.5, whiteSpace: 'pre-line' }}>
              {item.label}
            </span>
            <span style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(26px,3.5vw,44px)', fontWeight: 700 }}>
              {item.name}
            </span>
            <span style={{ fontSize: 20, textAlign: 'right', transform: hovered === i ? 'translateX(6px)' : 'none', transition: 'transform .2s' }}>
              →
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';

const leftAvatars = [
  { src: 'https://randomuser.me/api/portraits/men/32.jpg', size: 70, marginLeft: 30, marginTop: 30 },
  { src: 'https://randomuser.me/api/portraits/men/67.jpg', size: 45, marginLeft: -100, marginTop: 30 },
  { src: 'https://randomuser.me/api/portraits/men/45.jpg', size: 120, marginLeft: 150, marginTop: -20 },
  { src: 'https://randomuser.me/api/portraits/men/69.jpg', size: 55, marginLeft: -80, marginTop: -25 },
];

const rightAvatars = [
  { src: 'https://randomuser.me/api/portraits/men/78.jpg', size: 75, marginRight: -60, marginTop: 0 },
  { src: 'https://randomuser.me/api/portraits/women/44.jpg', size: 40, marginRight: 140, marginTop: -50 },
  { src: 'https://randomuser.me/api/portraits/women/34.jpg', size: 50, marginRight: 80, marginTop: 10 },
  { src: 'https://randomuser.me/api/portraits/men/23.jpg', size: 135, marginRight: -60, marginTop: 10 },
];

export default function Testimonials() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { e.target.style.opacity = 1; e.target.style.transform = 'none'; }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={ref} style={{
      padding: 'clamp(60px,8vw,80px) clamp(24px,5vw,60px)',
      opacity: 0, transform: 'translateY(28px)', transition: 'opacity .7s ease, transform .7s ease',
    }}>

      {/* 3 column layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 180px', gap: 24, alignItems: 'center' }}>

        {/* LEFT avatars */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          {leftAvatars.map((a, i) => (
            <div key={i} style={{ width: a.size, height: a.size, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, marginLeft: a.marginLeft, marginTop: a.marginTop }}>
              <img src={a.src} alt="customer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>

        {/* MIDDLE: title + card */}
        <div>
          <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(22px,2.5vw,36px)', fontWeight: 700, textAlign: 'center', marginBottom: 32, lineHeight: 1.3 }}>
            <span style={{ background: '#d7eedd', borderRadius: 50, padding: '0 10px' }}>What</span>
            {' '}our customer<br />
            says{' '}
            <span style={{ position: 'relative', display: 'inline-block', paddingBottom: 10 }}>
              About Us
              <svg style={{ position: 'absolute', bottom: -4, left: 0, width: '100%', height: 14, overflow: 'visible' }} viewBox="0 0 120 14" preserveAspectRatio="none">
                <path d="M0 4 Q30 0 60 4 Q90 8 120 4" stroke="#ffc250" strokeWidth="2.5" fill="none" />
                <path d="M0 10 Q30 6 60 10 Q90 14 120 10" stroke="#ffc250" strokeWidth="2.5" fill="none" />
              </svg>
            </span>
          </h2>

          <div style={{
            background: '#d7eedd',
            borderRadius: '32px',
            padding: '60px clamp(24px, 8vw, 64px)',
            textAlign: 'center',
            maxWidth: 680,
            margin: 'auto'
          }}>
            <p style={{
              fontSize: '18px',
              color: '#1f2937',
              lineHeight: '2',
              fontWeight: '400',
              margin: 0,
              letterSpacing: '-0.01em'
            }}>
              {/* Left Large Quote */}
              <svg
                style={{
                  position: 'relative',
                  top: '-6px',            /* Pulls the comma slightly up inline with the text */
                  left: '-4px',           /* Pushes it slightly away from the first letter */
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  width: '69px',
                  height: '49px'
                }}
                viewBox="0 0 69 49"
                fill="none"
              >
                <path d="M22 0C9.8 0 0 9.8 0 22C0 36.2 10.4 49 22.6 49C30.6 49 36.8 43.2 36.8 35C36.8 26.6 30.6 21 23 21C21.4 21 19.4 21.4 18.2 22.2C18.6 14.2 24.6 7.6 31.8 4.2L22 0ZM54.2 0C42 0 32.2 9.8 32.2 22C32.2 36.2 42.6 49 54.8 49C62.8 49 69 43.2 69 35C69 26.6 62.8 21 55.2 21C53.6 21 51.6 21.4 50.4 22.2C50.8 14.2 56.8 7.6 64 4.2L54.2 0Z" fill="#cbd5e1" />
              </svg>

              Elementum delivered the site within the timeline as they requested. In the end, the client found a 50% increase in traffic within days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable

              {/* Right Large Quote */}
              <svg
                style={{
                  position: 'relative',
                  bottom: '-18px',         /* Pushes the closing comma lower to hug the baseline */
                  right: '-4px',          /* Adjusts spacing near the final word */
                  display: 'inline-block',
                  verticalAlign: 'middle',
                  width: '69px',
                  height: '49px'
                }}
                viewBox="0 0 69 49"
                fill="none"
              >
                <path d="M14.8 49C27 49 36.8 39.2 36.8 27C36.8 12.8 26.4 0 14.2 0C6.2 0 0 5.8 0 14C0 22.4 6.2 28 13.8 28C15.4 28 17.4 27.6 18.6 26.8C18.2 34.8 12.2 41.4 5 44.8L14.8 49ZM47 49C59.2 49 69 39.2 69 27C69 12.8 58.6 0 46.4 0C38.4 0 32.2 5.8 32.2 14C32.2 22.4 38.4 28 46 28C47.6 28 49.6 27.6 50.8 26.8C50.4 34.8 44.4 41.4 37.2 44.8L47 49Z" fill="#cbd5e1" />
              </svg>
            </p>
          </div>
        </div>


        {/* RIGHT avatars */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
          {rightAvatars.map((a, i) => (
            <div key={i} style={{ width: a.size, height: a.size, borderRadius: '50%', overflow: 'hidden', flexShrink: 0, marginRight: a.marginRight, marginTop: a.marginTop }}>
              <img src={a.src} alt="customer" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
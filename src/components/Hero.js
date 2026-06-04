const avatars = [
  { initials: 'AK', bg: '#fce4ec', color: '#c2185b' },
  { initials: 'NR', bg: '#e8f5e9', color: '#2e7d32' },
  { initials: 'SP', bg: '#e3f2fd', color: '#1565c0' },
  { initials: 'YM', bg: '#fff3e0', color: '#e65100' },
  { initials: 'JT', bg: '#f3e5f5', color: '#6a1b9a' },
  { initials: 'LB', bg: '#e0f2f1', color: '#004d40' },
  { initials: '+3', bg: '#fafafa', color: '#333' },
];

const circles = [
  { size: 120, src: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { size: 120, src: 'https://randomuser.me/api/portraits/men/45.jpg' },
  { size: 120, src: 'https://randomuser.me/api/portraits/men/67.jpg' },
  { size: 120, src: 'https://randomuser.me/api/portraits/men/12.jpg' },
  { size: 120, src: 'https://randomuser.me/api/portraits/men/23.jpg' },
  { size: 120, src: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { size: 120, src: 'https://randomuser.me/api/portraits/men/78.jpg' },
  { size: 120, src: 'https://randomuser.me/api/portraits/men/68.jpg' },
];

export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: '100vh', padding: 'clamp(100px,12vw,120px) clamp(24px,5vw,60px) 80px', position: 'relative', overflow: 'hidden' }}>
      {/* Pink blob background */}
      {/* <div style={{ position: 'absolute', top: 80, right: 100, width: 420, height: 420, background: 'radial-gradient(circle at 60% 40%,#fce4ec 0%,#f8bbd9 40%,transparent 70%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 0 }} /> */}

      {/* Purple geometric shape top-right */}
      <div style={{ position: 'absolute', right: 'clamp(250px,6vw,80px)', top: 'clamp(200px,14vw,170px)', zIndex: 1, pointerEvents: 'none' }}>
        <div style={{ position: 'relative', width: 80, height: 100 }}>
          {/* Rotated outline rectangle */}
          {/* <div style={{ position: 'absolute', inset: 0, border: '3px solid #7c3aed', borderRadius: 6, transform: 'rotate(12deg)', background: 'transparent' }} /> */}
          {/* Purple half-circle */}
          <div style={{ position: 'absolute', right: -14, bottom: 4, width: 66, height: 66, borderRadius: '50%', background: '#934CEC', clipPath: 'inset(0 0 0 50%)', transform: 'rotate(30deg)' }} />
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 1, animation: 'fadeUp .7s ease forwards' }}>
        <h1 style={{
          fontFamily: "'Syne',sans-serif",
          fontSize: 'clamp(28px,4.5vw,58px)',
          fontWeight: 700,
          lineHeight: 1.3,
          marginBottom: 24,
          textAlign: 'center',
        }}>
          The{' '}
          {/* thinkers - orange wavy double underline */}
          <span style={{ position: 'relative', display: 'inline-block', paddingBottom: 10 }}>
            thinkers
            <svg
              style={{ position: 'absolute', bottom: -4, left: 0, width: '100%', height: 14, overflow: 'visible' }}
              viewBox="0 0 120 14"
              preserveAspectRatio="none"
            >
              <path d="M0 4 Q30 0 60 4 Q90 8 120 4" stroke="#ffc250" strokeWidth="2.5" fill="none" />
              <path d="M0 10 Q30 6 60 10 Q90 14 120 10" stroke="#ffc250" strokeWidth="2.5" fill="none" />
            </svg>
          </span>
          {' '}and
          <br />
          doers were{' '}
          {/* changing - pink pill background */}
          ch<p style={{ background: '#FFC2EA', borderRadius: 999, padding: '0 0px', display: 'inline-block' }}>
            anging
          </p>
          <br />
          the{' '}
          {/* status - mint/green pill background */}
          <span style={{ background: '#D7EEDD', borderRadius: 999, padding: '0 10px', display: 'inline-block' }}>
            status
          </span>
          {' '}Quo with
        </h1>

        <p style={{ fontSize: 13, color: '#6b7280', maxWidth: 600, lineHeight: 1.75, marginBottom: 40, textAlign: 'center', margin: '0 auto 40px' }}>
          We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
        </p>

        {/* Avatar stack */}
        {/* <div style={{ display: 'flex', alignItems: 'center', marginBottom: 24, justifyContent: 'center' }}>
          {avatars.map((a, i) => (
            <div key={i} style={{
              width: 52, height: 52, borderRadius: '50%',
              border: '3px solid white',
              background: a.bg, color: a.color,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Syne',sans-serif", fontWeight: 700, fontSize: 12,
              marginLeft: i === 0 ? 0 : -12, flexShrink: 0,
            }}>{a.initials}</div>
          ))}
        </div> */}

        {/* Person circles - staggered layout */}
        <div style={{ position: 'relative', height: 200, marginTop: 20 }}>
          {circles.map((c, i) => {
            const positions = [
              { left: '5%', top: '60%' },
              { left: '11%', top: '35%' },
              { left: '35%', top: '50%' },
              { left: '30%', top: '13%' },
              { left: '55%', top: '25%' },
              { left: '62%', top: '53%' },
              { left: '78%', top: '10%' },
              { left: '90%', top: '50%' },
            ];
            return (
              <div key={i} style={{
                position: 'absolute',
                left: positions[i].left,
                top: positions[i].top,
                width: c.size,
                height: c.size,
                borderRadius: '50%',
                overflow: 'hidden',
                flexShrink: 0,
                transform: 'translate(-50%, -50%)',
              }}>
                <img
                  src={c.src}
                  alt="team member"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </section>
  );
}
import { useEffect, useRef } from 'react';

export default function NewsletterFooter() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { e.target.style.opacity = 1; e.target.style.transform = 'none'; }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ opacity: 0, transform: 'translateY(28px)', transition: 'opacity .7s ease, transform .7s ease', background: '#d7eedd' }}>

      {/* NEWSLETTER */}
      <div id="contact" style={{
        borderRadius: '24px 24px 0 0',
        padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,60px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* red doodle top */}
        {/* <svg
          style={{ position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none' }}
          width="80" height="80" viewBox="0 0 80 80" fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M18 5 C16 20 20 40 28 62" stroke="#ff6d6d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M28 62 L20 55" stroke="#ff6d6d" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M28 62 L32 53" stroke="#ff6d6d" strokeWidth="2.5" strokeLinecap="round" />

          <path d="M38 5 C36 20 40 40 48 62" stroke="#ff6d6d" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M48 62 L40 55" stroke="#ff6d6d" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M48 62 L52 53" stroke="#ff6d6d" strokeWidth="2.5" strokeLinecap="round" />
        </svg> */}
        <svg
          style={{
            position: 'absolute',
            top: -15,
            left: '40%',
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
          }}
          width="150"
          height="150"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left Arrow */}
          <path
            d="M30 8
       C20 22, 18 42, 24 62"
            stroke="#ff6d6d"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />

          <path
            d="M24 62 L18 54"
            stroke="#ff6d6d"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          <path
            d="M24 62 L29 53"
            stroke="#ff6d6d"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Right Arrow */}
          <path
            d="M55 8
       C45 22, 43 42, 49 62"
            stroke="#ff6d6d"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />

          <path
            d="M49 62 L43 54"
            stroke="#ff6d6d"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          <path
            d="M49 62 L54 53"
            stroke="#ff6d6d"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
        {/* purple teardrop */}
        <div style={{ position: 'absolute', right: 'clamp(250px,6vw,80px)', top: 'clamp(200px,14vw,170px)', zIndex: 1, pointerEvents: 'none' }}>
          <div style={{ position: 'relative', width: 80, height: 100 }}>
            <div style={{ position: 'absolute', right: -154, bottom: 4, width: 126, height: 126, borderRadius: '50%', background: '#934CEC', clipPath: 'inset(0 50% 0 0)', transform: 'rotate(30deg)' }} />
          </div>
        </div>

        <h2 style={{ fontFamily: "'Syne',sans-serif", fontSize: 'clamp(28px,4vw,52px)', fontWeight: 800, lineHeight: 1.2, marginBottom: 12 }}>
          Subscribe to<br />our newsletter
        </h2>
        <p style={{ fontSize: 14, color: '#6b7280', marginBottom: 32 }}>
          To make your stay special and even more memorable
        </p>
        <button
          style={{ background: '#0a0a0a', color: '#fff', fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 500, padding: '14px 40px', borderRadius: 100, border: 'none', cursor: 'pointer', transition: 'opacity .2s' }}
          onMouseEnter={e => e.currentTarget.style.opacity = .8}
          onMouseLeave={e => e.currentTarget.style.opacity = 1}
        >
          Subscribe Now
        </button>
      </div>

      <div style={{ borderTop: '1px solid #000', margin: '0 clamp(24px,5vw,60px)' }}></div>

      {/* FOOTER */}
      <div id="faq" style={{
        padding: 'clamp(40px,5vw,60px) clamp(24px,5vw,60px)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
        gap: 40,
      }}>
        {/* Company */}
        <div>
          <div style={{ fontFamily: "Gerbil", fontSize: 16, fontWeight: 800, marginBottom: 16 }}>Company</div>
          {['Home', 'Studio', 'Service', 'Blog'].map(l => (
            <div key={l} style={{ marginBottom: 10 }}>
              <a href="/" style={{ fontSize: 13, color: '#4b5563', textDecoration: 'none' }}>{l}</a>
            </div>
          ))}
        </div>

        {/* Terms & Policies */}
        <div>
          <div style={{ fontFamily: "Gerbil", fontSize: 14, fontWeight: 700, marginBottom: 16, display: 'inline-block', padding: '2px 8px', borderRadius: 4 }}>
            Terms &amp; Policies
          </div>
          {['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility'].map(l => (
            <div key={l} style={{ marginBottom: 10 }}>
              <a href="/" style={{ fontSize: 13, color: '#4b5563', textDecoration: 'none' }}>{l}</a>
            </div>
          ))}
        </div>

        {/* Follow Us */}
        <div>
          <div style={{ fontFamily: "Gerbil", fontSize: 14, fontWeight: 700, marginBottom: 16 }}>Follow Us</div>
          {['Instagram', 'LinkedIn', 'Youtube', 'Twitter'].map(l => (
            <div key={l} style={{ marginBottom: 10 }}>
              <a href="/" style={{ fontSize: 13, color: '#4b5563', textDecoration: 'none' }}>{l}</a>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontFamily: "Gerbil", fontSize: 14, fontWeight: 700, marginBottom: 16 }}>Contact</div>
          <div style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.8 }}>
            1498w Fluton ste, STE<br />
            2D Chricgo, IL 63867.<br /><br />
            (123) 456789000<br />
            info@elementum.com
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div style={{ textAlign: 'center', padding: '20px 0', fontSize: 12, color: '#6b7280' }}>
        ©2023 Elementum. All rights reserved
      </div>

    </div>
  );
}
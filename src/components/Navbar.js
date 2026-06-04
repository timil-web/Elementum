import { useState, useEffect } from 'react';

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '18px 60px',
    background: 'rgba(255,255,255,0.92)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid #e5e7eb',
  },
  logo: {
    fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 800,
    color: '#0a0a0a', textDecoration: 'none',
  },
  links: {
    display: 'flex', gap: 36, listStyle: 'none',
  },
  link: {
    fontSize: 14, color: '#6b7280', textDecoration: 'none', cursor: 'pointer',
  },
  hamburger: {
    display: 'flex', flexDirection: 'column', gap: 5,
    cursor: 'pointer', background: 'none', border: 'none', padding: 4,
  },
  hamburgerLine: {
    width: 24, height: 2, background: '#0a0a0a', borderRadius: 2,
  },
  mobileMenu: {
    position: 'absolute', top: 64, right: 24,
    background: '#fff', border: '1px solid #e5e7eb',
    borderRadius: 12, padding: '20px 28px',
    zIndex: 200, boxShadow: '0 4px 20px rgba(0,0,0,.08)',
    display: 'flex', flexDirection: 'column', gap: 16,
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <nav style={styles.nav}>
      <a href="#" style={styles.logo}>Elementum</a>

      {!isMobile && (
        <ul style={styles.links}>
          {['hero','about','offerings','contact','faq'].map((id, i) => (
            <li key={id}>
              <a style={styles.link} onClick={() => scrollTo(id)}>
                {['Home','Studio','Services','Contact','FAQs'][i]}
              </a>
            </li>
          ))}
        </ul>
      )}

      {isMobile && (
        <button style={styles.hamburger} onClick={() => setOpen(!open)}>
          <span style={styles.hamburgerLine}></span>
          <span style={styles.hamburgerLine}></span>
          <span style={styles.hamburgerLine}></span>
        </button>
      )}

      {isMobile && open && (
        <div style={styles.mobileMenu}>
          {['hero','about','offerings','contact','faq'].map((id, i) => (
            <a key={id} style={styles.link} onClick={() => scrollTo(id)}>
              {['Home','Studio','Services','Contact','FAQs'][i]}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
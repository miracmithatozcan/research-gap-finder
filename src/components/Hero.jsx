import React from 'react';
import { Telescope, ArrowRight, Atom, Zap, Globe } from 'lucide-react';

const Hero = () => {
    return (
        <div className="container animate-fade-in" style={{ padding: '6rem 1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>

            {/* Floating Ambient Elements */}
            <div className="float-slow" style={{ position: 'absolute', top: '15%', left: '10%', opacity: 0.1 }}>
                <Atom size={120} color="var(--accent-purple)" />
            </div>
            <div className="float-slow-reverse" style={{ position: 'absolute', top: '50%', right: '12%', opacity: 0.08 }}>
                <Globe size={150} color="var(--accent-cyan)" />
            </div>
            <div className="float-slow" style={{ position: 'absolute', bottom: '10%', left: '25%', opacity: 0.12, animationDelay: '2s' }}>
                <Zap size={80} color="var(--accent-emerald)" />
            </div>

            <div style={{ position: 'relative', zIndex: 10 }}>
                <div className="animate-slide-up" style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.5rem 1.5rem',
                    background: 'rgba(6, 182, 212, 0.08)',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
                    borderRadius: '99px',
                    color: 'var(--accent-cyan)',
                    fontWeight: '600',
                    fontSize: '0.875rem',
                    marginBottom: '2rem',
                    boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)'
                }}>
                    <Telescope size={18} />
                    <span>Gelişmiş Metodoloji & Araştırma Keşfi</span>
                </div>

                <h1 className="animate-slide-up" style={{ animationDelay: '0.1s', fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', lineHeight: '1.05', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
                    <span className="gradient-text">Discover the Next</span> <br />
                    <span className="gradient-text-accent">Scientific Breakthrough</span>
                </h1>

                <p className="animate-slide-up" style={{ animationDelay: '0.2s', maxWidth: '650px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: '1.7' }}>
                    Dünya derecesi hedefleyen ISEF projeleri için literatürdeki gerçek, çözülmemiş ve yüksek etki potansiyeline sahip bilimsel araştırma boşluklarını keşfedin.
                </p>

                <div className="animate-slide-up" style={{ animationDelay: '0.3s', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <button style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        padding: '1rem 2rem',
                        background: 'linear-gradient(to right, var(--text-main), #d1d5db)',
                        color: '#03050C',
                        border: 'none',
                        borderRadius: '12px',
                        fontFamily: 'Space Grotesk',
                        fontWeight: '700',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                        boxShadow: '0 10px 25px -5px rgba(255, 255, 255, 0.2)'
                    }}
                        onMouseOver={e => {
                            e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                            e.currentTarget.style.boxShadow = '0 20px 35px -10px rgba(255, 255, 255, 0.3)';
                        }}
                        onMouseOut={e => {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(255, 255, 255, 0.2)';
                        }}
                        onFocus={e => e.currentTarget.blur()}
                        onClick={() => window.scrollTo({ top: document.getElementById('gaps-section').offsetTop, behavior: 'smooth' })}
                    >
                        Explore Gaps <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;

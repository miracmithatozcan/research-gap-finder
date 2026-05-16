import React, { useEffect } from 'react';
import { X, BookOpen, AlertTriangle, Target, FlaskConical, Link } from 'lucide-react';

const ResearchDetails = ({ gap, onClose }) => {
    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div className="animate-fade-in" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50,
            padding: '1.5rem',
            animationDuration: '0.3s'
        }}>
            <div className="animate-scale-in" style={{
                width: '100%',
                maxWidth: '850px',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative',
                background: '#0a0f1c',
                borderRadius: '24px',
                boxShadow: `0 0 100px -20px ${gap.color}40`,
                border: `1px solid ${gap.color}40`
            }}>

                {/* Header */}
                <div style={{ padding: '2.5rem', borderBottom: '1px solid var(--glass-border)', position: 'sticky', top: 0, background: '#0a0f1c', zIndex: 10 }}>
                    <button
                        onClick={onClose}
                        style={{
                            position: 'absolute', top: '1.5rem', right: '1.5rem',
                            background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)', borderRadius: '50%', padding: '8px',
                            color: 'var(--text-muted)', cursor: 'pointer', transition: 'all 0.2s', display: 'flex'
                        }}
                        onMouseOver={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                        onMouseOut={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                    >
                        <X size={20} />
                    </button>

                    <div style={{ color: gap.color, fontSize: '0.875rem', fontWeight: '700', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        1. Araştırma Alanı ve Alt Disiplin
                    </div>
                    <h2 style={{ fontSize: '1.75rem', lineHeight: '1.3', color: 'var(--text-main)', paddingRight: '3rem' }}>
                        {gap.domain} — {gap.subDomain}
                    </h2>
                </div>

                {/* Content Body */}
                <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '3rem' }}>

                    <section>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--accent-purple)' }}>
                            <BookOpen size={22} />
                            <h3 style={{ fontSize: '1.25rem' }}>2. Literatürün Mevcut Durumu ve Sınırları</h3>
                        </div>
                        <p style={{ color: 'var(--text-muted)', background: 'rgba(139, 92, 246, 0.04)', padding: '1.25rem', borderRadius: '12px', borderLeft: '3px solid var(--accent-purple)', lineHeight: '1.7' }}>
                            {gap.literatureStatus}
                        </p>
                    </section>

                    <section>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#ef4444' }}>
                            <AlertTriangle size={22} color="#ef4444" />
                            <h3 style={{ fontSize: '1.25rem', color: '#f8fafc' }}>3. Net Araştırma Boşluğu</h3>
                        </div>
                        <p style={{ color: '#fff', background: 'rgba(239, 68, 68, 0.1)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(239, 68, 68, 0.3)', fontWeight: '500', fontSize: '1.05rem', lineHeight: '1.6' }}>
                            {gap.researchGap}
                        </p>
                    </section>

                    <section>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--accent-emerald)' }}>
                            <Target size={22} />
                            <h3 style={{ fontSize: '1.25rem' }}>4. ISEF Proje Potansiyeli</h3>
                        </div>
                        <p style={{ color: 'var(--text-muted)', background: 'rgba(16, 185, 129, 0.04)', padding: '1.25rem', borderRadius: '12px', borderLeft: '3px solid var(--accent-emerald)', lineHeight: '1.7' }}>
                            {gap.isefPotential}
                        </p>
                    </section>

                    <section>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: 'var(--accent-cyan)' }}>
                            <FlaskConical size={22} />
                            <h3 style={{ fontSize: '1.25rem' }}>5. Doğrulayıcı Akademik Kaynaklar</h3>
                        </div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {gap.references.map((ref, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontSize: '0.9rem', background: '#ffffff05', padding: '1.25rem', borderRadius: '12px', borderLeft: `2px solid ${gap.color}`, transition: 'background 0.2s' }}
                                    onMouseOver={e => e.currentTarget.style.background = '#ffffff0a'}
                                    onMouseOut={e => e.currentTarget.style.background = '#ffffff05'}
                                >
                                    <Link size={18} style={{ marginTop: '2px', flexShrink: 0, color: gap.color }} />
                                    <div>
                                        <div style={{ color: 'var(--text-main)', fontWeight: '600', marginBottom: '0.5rem', fontSize: '1rem' }}>{ref.title}</div>
                                        <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                                            <span style={{ fontStyle: 'italic', marginRight: '0.5rem' }}>{ref.journal}</span> |
                                            <a href={ref.link} target="_blank" rel="noreferrer" style={{ color: gap.color, textDecoration: 'none', marginLeft: '0.5rem', fontWeight: '500' }}>DOI: {ref.doi}</a>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default ResearchDetails;

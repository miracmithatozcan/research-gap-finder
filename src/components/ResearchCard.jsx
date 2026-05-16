import React from 'react';
import { Lightbulb, ChevronRight, Bookmark } from 'lucide-react';

const ResearchCard = ({ gap, index, isFavorite, onToggleFavorite, onClick }) => {
    return (
        <div
            className="glass-panel animate-slide-up"
            onClick={onClick}
            style={{
                padding: '1.5rem',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '280px',
                position: 'relative',
                overflow: 'hidden',
                animationDelay: `${index * 0.1}s` // Stagger animation
            }}
            onMouseOver={e => {
                e.currentTarget.style.transform = 'translateY(-6px) scale(1.02)';
                e.currentTarget.style.boxShadow = `0 15px 40px -10px ${gap.color}40`;
                e.currentTarget.style.borderColor = `${gap.color}80`;
            }}
            onMouseOut={e => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--glass-border)';
            }}
        >
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '3px',
                background: `linear-gradient(90deg, ${gap.color}, transparent)`
            }}></div>

            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <div style={{
                            padding: '4px 10px',
                            background: `${gap.color}15`,
                            color: gap.color,
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em'
                        }}>
                            {gap.category}
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                        <button
                            onClick={onToggleFavorite}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                color: isFavorite ? 'var(--accent-purple)' : 'var(--text-muted)',
                                transition: 'all 0.2s',
                                padding: '4px',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2)'}
                            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <Bookmark
                                size={22}
                                fill={isFavorite ? 'var(--accent-purple)' : 'none'}
                                strokeWidth={isFavorite ? 2 : 1.5}
                            />
                        </button>
                        <Lightbulb size={20} color={gap.color} style={{ opacity: 0.5 }} />
                    </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-main)', lineHeight: '1.4' }}>
                    {gap.subDomain}
                </h3>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    <strong>Sorun:</strong> {gap.literatureStatus}
                </p>
            </div>

            <div style={{
                marginTop: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: '500',
                color: gap.color
            }}>
                Detaylı Raporu İncele <ChevronRight size={16} />
            </div>
        </div>
    );
};

export default ResearchCard;

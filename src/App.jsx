import React, { useState, useEffect, useMemo } from 'react';
import Hero from './components/Hero';
import ResearchCard from './components/ResearchCard';
import ResearchDetails from './components/ResearchDetails';
import { researchGaps } from './data/mockData';
import { Beaker, Search, RefreshCw, Bookmark } from 'lucide-react';
import './index.css';

function App() {
  const [selectedGap, setSelectedGap] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [shuffleSeed, setShuffleSeed] = useState(Math.random());
  const [showFavorites, setShowFavorites] = useState(false);

  // Favoriler için state ve LocalStorage entegrasyonu
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem('isef-favorites');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('isef-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(fId => fId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const categories = ["Tümü", "Fizik", "Kimya", "Biyoloji", "Teknoloji ve Tasarım"];

  const randomizedGaps = useMemo(() => {
    return [...researchGaps].sort(() => Math.random() - 0.5);
  }, [shuffleSeed]);

  const handleClose = () => {
    setSelectedGap(null);
  };

  const triggerRefresh = () => {
    setShuffleSeed(Math.random());
    setShowFavorites(false); // Yenile dendiğinde tüm fikirlere dön
  };

  const filteredGaps = randomizedGaps.filter(gap => {
    const matchesSearch = gap.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gap.subDomain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gap.researchGap.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === "Tümü" ? true : gap.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Görüntülenecek veriyi belirleme
  let displayedGaps = [];
  if (showFavorites) {
    displayedGaps = researchGaps.filter(gap => favorites.includes(gap.id));
  } else {
    displayedGaps = (searchQuery === '' && selectedCategory === 'Tümü')
      ? filteredGaps.slice(0, 6)
      : filteredGaps;
  }

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="container pt-6 pb-4 flex justify-between items-center animate-fade-in">
        <div className="flex items-center gap-3">
          <div style={{ padding: '8px', background: 'var(--panel-bg)', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
            <Beaker color="var(--accent-emerald)" size={24} />
          </div>
          <div>
            <h1 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--text-main)' }}>ISEF Research Hub</h1>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0, marginTop: '-3px' }}>Academic Discovery Portal</p>
          </div>
        </div>
        <nav style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
          By <span style={{ color: 'var(--text-main)', fontWeight: '500' }}>AI Methodology Expert</span>
        </nav>
      </header>

      {/* Main Content */}
      <main>
        <Hero />

        <section id="gaps-section" className="container mt-12" style={{ width: '100%', scrollMarginTop: '2rem' }}>
          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <div className="animate-slide-up" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <h2 style={{ fontSize: '2.5rem', color: 'white', margin: 0 }}>Araştırma Boşlukları</h2>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button
                  onClick={triggerRefresh}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'rgba(6, 182, 212, 0.1)',
                    color: 'var(--accent-cyan)',
                    border: '1px solid var(--accent-cyan)',
                    padding: '0.5rem 1rem',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontWeight: '600'
                  }}
                  onMouseOver={e => { e.currentTarget.style.background = 'rgba(6, 182, 212, 0.2)' }}
                  onMouseOut={e => { e.currentTarget.style.background = 'rgba(6, 182, 212, 0.1)' }}
                >
                  <RefreshCw size={18} /> Yenile
                </button>

                <button
                  onClick={() => setShowFavorites(!showFavorites)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: showFavorites ? 'var(--accent-purple)' : 'rgba(139, 92, 246, 0.1)',
                    color: showFavorites ? 'white' : 'var(--accent-purple)',
                    border: '1px solid var(--accent-purple)',
                    padding: '0.5rem 1rem',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    fontWeight: '600'
                  }}
                  onMouseOver={e => { if (!showFavorites) e.currentTarget.style.background = 'rgba(139, 92, 246, 0.2)' }}
                  onMouseOut={e => { if (!showFavorites) e.currentTarget.style.background = 'rgba(139, 92, 246, 0.1)' }}
                >
                  <Bookmark size={18} /> {showFavorites ? 'Tümüne Dön' : `Favorilerim (${favorites.length})`}
                </button>
              </div>
            </div>

            <p className="animate-slide-up" style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Mevcut literatürdeki yüksek etkili (high-impact) bilim açıklarını inceleyin.
            </p>

            {!showFavorites && (
              <div className="animate-slide-up" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                animationDelay: '0.1s'
              }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '99px',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      background: selectedCategory === cat ? 'white' : 'rgba(255,255,255,0.05)',
                      color: selectedCategory === cat ? 'var(--bg-color)' : 'var(--text-muted)',
                      border: '1px solid',
                      borderColor: selectedCategory === cat ? 'white' : 'var(--glass-border)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {!showFavorites && (
              <div className="animate-slide-up" style={{
                position: 'relative',
                maxWidth: '600px',
                margin: '0 auto',
                animationDelay: '0.2s'
              }}>
                <Search style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={20} />
                <input
                  type="text"
                  placeholder="Araştırma alanı, konu veya algoritma giriniz..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '1rem 1rem 1rem 3rem',
                    borderRadius: '12px',
                    background: 'var(--panel-bg)',
                    border: '1px solid var(--glass-border)',
                    color: 'white',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = 'var(--text-main)';
                    e.target.style.boxShadow = '0 0 0 4px rgba(255,255,255, 0.05)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'var(--glass-border)';
                    e.target.style.boxShadow = 'none';
                  }}
                />
              </div>
            )}
          </div>

          {displayedGaps.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
              {showFavorites
                ? "Henüz favoriye alınmış bir araştırma fikri bulunmuyor."
                : `Araştırdığınız kriterlere uyan literatür boşluğu bulunamadı.`}
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {displayedGaps.map((gap, index) => (
                <ResearchCard
                  key={gap.id}
                  gap={gap}
                  index={index}
                  isFavorite={favorites.includes(gap.id)}
                  onToggleFavorite={(e) => toggleFavorite(e, gap.id)}
                  onClick={() => setSelectedGap(gap)}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="container mt-20 text-center" style={{ color: 'var(--text-muted)', fontSize: '0.9rem', borderTop: '1px solid var(--glass-border)', paddingTop: '2rem' }}>
        <p>ISEF Proje Fikirleri yalnızca ilham ve yönlendirme amaçlıdır. Literatür taraması yaparken lütfen orjinal makaleleri okuyunuz.</p>
        <p style={{ marginTop: '0.5rem', opacity: 0.5 }}>© {new Date().getFullYear()} - DeepMind Experimental Research Hub | by Miraç Mithat Özcan</p>
      </footer>

      {/* Detail Modal Layer */}
      {selectedGap && (
        <ResearchDetails gap={selectedGap} onClose={handleClose} />
      )}
    </div>
  );
}

export default App;

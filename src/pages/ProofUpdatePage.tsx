import { ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';

interface ProofUpdatePageProps {
    onNavigate: (page: string) => void;
    showToast: (msg: string) => void;
    onScoreUpdate: () => void;
}

export default function ProofUpdatePage({ onNavigate, showToast, onScoreUpdate }: ProofUpdatePageProps) {
    const handleViewProfile = () => {
        onScoreUpdate();
        onNavigate('profile');
        showToast('Profile updated with new proof-of-work!');
    };

    return (
        <div style={{
            minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '40px 24px', fontFamily: 'Inter, sans-serif',
        }}>
            <div style={{ maxWidth: '560px', width: '100%', textAlign: 'center' }}>
                {/* Celebration */}
                <div style={{
                    width: '80px', height: '80px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #d1fae5, #a7f3d0)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 24px', fontSize: '36px',
                    boxShadow: '0 8px 32px rgba(16,185,129,0.25)',
                }}>
                    🎉
                </div>

                <h1 style={{ fontSize: '30px', fontWeight: 900, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '8px' }}>
                    You just added new proof to your profile.
                </h1>
                <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '36px', lineHeight: 1.6 }}>
                    Your completed project has been verified and added to your Proof-of-Work profile.
                </p>

                {/* Project summary */}
                <div style={{
                    background: 'white', borderRadius: '16px',
                    border: '1px solid #e2e8f0', padding: '28px',
                    marginBottom: '24px', textAlign: 'left',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                        <div>
                            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: '#94a3b8', marginBottom: '6px' }}>PROJECT COMPLETED</div>
                            <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', fontFamily: 'Plus Jakarta Sans' }}>
                                AI Customer Research Platform
                            </h2>
                            <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>Nova Labs · 2 weeks</div>
                        </div>
                        <div style={{
                            width: '48px', height: '48px', borderRadius: '12px',
                            background: 'linear-gradient(135deg, #0a1628, #162b57)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'white', fontWeight: 800, fontSize: '14px', fontFamily: 'Plus Jakarta Sans',
                        }}>NL</div>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: '#64748b', marginBottom: '10px', letterSpacing: '0.04em' }}>
                            SKILLS DEMONSTRATED
                        </div>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {['User Research', 'Python', 'Data Analysis', 'Product Strategy'].map(s => (
                                <span key={s} style={{
                                    padding: '4px 12px', borderRadius: '999px', fontSize: '12px', fontWeight: 600,
                                    background: '#eff6ff', color: '#2563eb', border: '1px solid #bfdbfe',
                                }}>{s}</span>
                            ))}
                        </div>
                    </div>

                    <div style={{
                        padding: '14px', borderRadius: '10px',
                        background: '#f0fdf4', border: '1px solid #bbf7d0', marginBottom: '20px',
                    }}>
                        <div style={{ fontSize: '12px', fontWeight: 700, color: '#59a08c', marginBottom: '4px' }}>📊 OUTCOME</div>
                        <div style={{ fontSize: '14px', color: '#065f46', fontWeight: 500 }}>
                            "Identified 3 major onboarding friction points, leading to 24% improvement in simulation testing."
                        </div>
                    </div>

                    {/* Proof Score change */}
                    <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px',
                        padding: '20px', borderRadius: '12px',
                        background: 'linear-gradient(135deg, #f8fbff, #f0f9ff)',
                        border: '1px solid #bfdbfe',
                    }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', marginBottom: '4px' }}>BEFORE</div>
                            <div style={{ fontSize: '36px', fontWeight: 900, color: '#64748b', fontFamily: 'Plus Jakarta Sans', lineHeight: 1 }}>82</div>
                            <div style={{ fontSize: '10px', color: '#94a3b8' }}>Proof Score</div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                            <TrendingUp size={24} color="#10b981" />
                            <span style={{ fontSize: '11px', fontWeight: 700, color: '#10b981' }}>+6 pts</span>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '11px', fontWeight: 700, color: '#10b981', marginBottom: '4px' }}>AFTER</div>
                            <div style={{ fontSize: '36px', fontWeight: 900, color: '#10b981', fontFamily: 'Plus Jakarta Sans', lineHeight: 1 }}>88</div>
                            <div style={{ fontSize: '10px', color: '#10b981' }}>Proof Score</div>
                        </div>
                    </div>
                </div>

                {/* What happens next */}
                <div style={{
                    background: 'linear-gradient(135deg, #f8fbff, #f5f3ff)',
                    borderRadius: '16px', border: '1px solid #e0e7ff',
                    padding: '24px', marginBottom: '24px', textAlign: 'left',
                }}>
                    <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', marginBottom: '14px' }}>What happens now?</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {[
                            'Your proof score has been updated from 82 to 88',
                            'Nova Labs has been notified of your project completion',
                            'AI is now finding better matching opportunities for you',
                            'Your project is now visible to companies discovering talent',
                        ].map((text, i) => (
                            <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                <CheckCircle size={15} color="#10b981" fill="#d1fae5" style={{ flexShrink: 0, marginTop: '1px' }} />
                                <span style={{ fontSize: '13px', color: '#374151', lineHeight: 1.5 }}>{text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                    <button onClick={handleViewProfile} className="btn-primary" style={{ padding: '14px 28px', fontSize: '15px' }}>
                        View Updated Profile <ArrowRight size={16} />
                    </button>
                    <button onClick={() => onNavigate('opportunities')} className="btn-secondary" style={{ padding: '14px 28px', fontSize: '15px' }}>
                        Find New Opportunities
                    </button>
                </div>
            </div>
        </div>
    );
}

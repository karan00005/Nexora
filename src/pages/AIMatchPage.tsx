import { matchBreakdown } from '../data/mockData';

interface AIMatchPageProps {
    onNavigate: (page: string) => void;
}

export default function AIMatchPage({ onNavigate }: AIMatchPageProps) {
    const reasons = [
        { icon: '🤖', text: 'Your robotics project demonstrates hands-on hardware experience that directly matches this role.' },
        { icon: '🐍', text: 'Your Python projects align with the technical stack and development requirements.' },
        { icon: '🚀', text: 'You have indicated interest in early-stage technology companies and hardware startups.' },
        { icon: '👥', text: 'You have previously participated in team-based challenges and demonstrated collaboration skills.' },
        { icon: '📊', text: 'Your data analysis experience from the Smart Campus project is highly relevant.' },
    ];

    return (
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 24px', fontFamily: 'Inter, sans-serif' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <span style={{
                    display: 'inline-block', padding: '4px 14px', borderRadius: '999px',
                    background: '#eff6ff', color: '#2563eb', fontSize: '12px', fontWeight: 700,
                    letterSpacing: '0.08em', border: '1px solid #bfdbfe', marginBottom: '16px',
                }}>AI OPPORTUNITY INTELLIGENCE</span>
                <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '8px' }}>
                    Your Opportunity Intelligence
                </h1>
                <p style={{ fontSize: '15px', color: '#64748b' }}>For: AI Research Intern — Vertex AI</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                {/* Big match score */}
                <div style={{
                    background: 'linear-gradient(135deg, #0a1628, #162b57)',
                    borderRadius: '20px', padding: '40px',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 12px 40px rgba(10,22,40,0.25)',
                }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', color: '#94a3b8', marginBottom: '16px' }}>
                        OVERALL MATCH SCORE
                    </div>
                    <div style={{ position: 'relative', marginBottom: '20px' }}>
                        <svg width="160" height="160" style={{ transform: 'rotate(-90deg)' }}>
                            <circle cx="80" cy="80" r="70" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="10" />
                            <circle
                                cx="80" cy="80" r="70" fill="none" stroke="#10b981" strokeWidth="10"
                                strokeDasharray="440"
                                strokeDashoffset={440 - (0.92 * 440)}
                                strokeLinecap="round"
                            />
                        </svg>
                        <div style={{
                            position: 'absolute', inset: 0,
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        }}>
                            <span style={{ fontSize: '52px', fontWeight: 900, color: '#10b981', fontFamily: 'Plus Jakarta Sans', lineHeight: 1 }}>92</span>
                            <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 700, letterSpacing: '0.05em' }}>%</span>
                        </div>
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: 'white', marginBottom: '8px' }}>Excellent Match</div>
                    <div style={{ fontSize: '12px', color: '#94a3b8', textAlign: 'center', lineHeight: 1.6 }}>
                        Top 8% of all applicants for this position
                    </div>
                </div>

                {/* Breakdown */}
                <div style={{
                    background: 'white', borderRadius: '20px',
                    border: '1px solid #e2e8f0', padding: '32px',
                }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '24px' }}>
                        Match Breakdown
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {matchBreakdown.map(item => {
                            const color = item.value >= 90 ? '#10b981' : '#2563eb';
                            return (
                                <div key={item.label}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '7px' }}>
                                        <span style={{ fontSize: '13px', fontWeight: 600, color: '#475569' }}>{item.label}</span>
                                        <span style={{ fontSize: '14px', fontWeight: 800, color, fontFamily: 'Plus Jakarta Sans' }}>{item.value}%</span>
                                    </div>
                                    <div style={{ height: '8px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
                                        <div style={{
                                            width: `${item.value}%`, height: '100%', borderRadius: '999px',
                                            background: `linear-gradient(90deg, ${color}, ${color}cc)`,
                                            transition: 'width 1.2s ease',
                                        }} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Why this matches you */}
            <div style={{
                background: 'white', borderRadius: '20px',
                border: '1px solid #e2e8f0', padding: '32px', marginBottom: '24px',
            }}>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '20px' }}>
                    🤖 Why this matches you
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {reasons.map((reason, i) => (
                        <div key={i} style={{
                            display: 'flex', gap: '14px', alignItems: 'flex-start',
                            padding: '16px', borderRadius: '12px',
                            background: '#f8fbff', border: '1px solid #e0edff',
                            animation: `fadeIn 0.4s ease ${i * 80}ms both`,
                        }}>
                            <span style={{ fontSize: '20px', flexShrink: 0 }}>{reason.icon}</span>
                            <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.7, margin: 0 }}>{reason.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recommended Next Step */}
            <div style={{
                background: 'linear-gradient(135deg, #eff6ff, #f5f3ff)',
                borderRadius: '20px', border: '1px solid #bfdbfe', padding: '32px',
                textAlign: 'center',
            }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>🎯</div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '8px' }}>
                    Recommended Next Step
                </h3>
                <p style={{ fontSize: '15px', color: '#4338ca', marginBottom: '24px', lineHeight: 1.6 }}>
                    "Apply to this project and complete the technical challenge to stand out from other candidates."
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                    <button onClick={() => onNavigate('opportunity-detail')} className="btn-primary" style={{ padding: '13px 28px', fontSize: '15px' }}>
                        Apply Now
                    </button>
                    <button onClick={() => onNavigate('opportunities')} className="btn-secondary" style={{ padding: '13px 28px', fontSize: '15px' }}>
                        Explore Similar
                    </button>
                </div>
            </div>
        </div>
    );
}

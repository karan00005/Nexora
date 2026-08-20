import { Users, Clock, Zap } from 'lucide-react';
import { mockChallenges } from '../data/mockData';
import { MatchRing, SkillBadge } from '../components/UIComponents';

interface ChallengesPageProps {
    onNavigate: (page: string) => void;
    showToast: (msg: string) => void;
}

export default function ChallengesPage({ onNavigate, showToast }: ChallengesPageProps) {
    const difficultyColors = {
        Beginner: { bg: '#f0fdf4', text: '#16a34a', border: '#bbf7d0' },
        Intermediate: { bg: '#fff7ed', text: '#ea580c', border: '#fed7aa' },
        Advanced: { bg: '#fef2f2', text: '#dc2626', border: '#fecaca' },
    } as Record<string, { bg: string; text: string; border: string }>;

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '32px 24px', fontFamily: 'Inter, sans-serif' }}>
            <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                    <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '6px' }}>
                        🏆 Challenges
                    </h1>
                    <p style={{ color: '#64748b', fontSize: '14px' }}>Compete, demonstrate skills, and win prizes</p>
                </div>
                <div style={{
                    padding: '8px 16px', borderRadius: '10px',
                    background: '#fef3c7', border: '1px solid #fde68a',
                    fontSize: '13px', fontWeight: 700, color: '#92400e',
                }}>
                    💰 ₹2,25,000 in prizes available
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
                {mockChallenges.map((challenge, i) => {
                    const diff = difficultyColors[challenge.difficulty];
                    return (
                        <div key={challenge.id} style={{
                            background: 'white', borderRadius: '16px',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                            overflow: 'hidden', transition: 'all 0.2s ease',
                        }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)';
                                (e.currentTarget as HTMLElement).style.borderColor = '#bfdbfe';
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                                (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)';
                                (e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0';
                            }}
                        >
                            {/* Top accent */}
                            <div style={{
                                height: '4px',
                                background: i % 2 === 0 ? 'linear-gradient(90deg, #2563eb, #4f46e5)' : 'linear-gradient(90deg, #f59e0b, #f97316)',
                            }} />
                            <div style={{ padding: '24px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
                                            <span style={{ padding: '3px 10px', borderRadius: '999px', fontSize: '11px', fontWeight: 700, background: diff.bg, color: diff.text, border: `1px solid ${diff.border}` }}>
                                                {challenge.difficulty}
                                            </span>
                                            <span style={{ padding: '3px 10px', borderRadius: '999px', fontSize: '11px', fontWeight: 700, background: '#eff6ff', color: '#2563eb', border: '1px solid #bfdbfe' }}>
                                                {challenge.domain}
                                            </span>
                                        </div>
                                        <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', lineHeight: 1.3, marginBottom: '4px' }}>
                                            {challenge.title}
                                        </h3>
                                        <div style={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>{challenge.company}</div>
                                    </div>
                                    <MatchRing score={challenge.matchScore} size={58} fontSize={14} />
                                </div>

                                <div style={{ display: 'flex', gap: '16px', marginBottom: '14px', flexWrap: 'wrap' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#64748b' }}>
                                        <Users size={12} /> {challenge.participants} participants
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: '#ef4444', fontWeight: 500 }}>
                                        <Clock size={12} /> {challenge.deadline} left
                                    </div>
                                </div>

                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
                                    {challenge.skills.map(s => <SkillBadge key={s} skill={s} />)}
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <div style={{
                                        fontSize: '20px', fontWeight: 900, color: '#f59e0b',
                                        fontFamily: 'Plus Jakarta Sans',
                                    }}>
                                        🏆 {challenge.prize}
                                    </div>
                                    <button
                                        onClick={() => showToast(`Registering for ${challenge.title}!`)}
                                        className="btn-primary"
                                        style={{ padding: '9px 20px', fontSize: '13px' }}
                                    >
                                        <Zap size={13} /> Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Banner */}
            <div style={{
                marginTop: '32px',
                background: 'linear-gradient(135deg, #0a1628, #162b57)',
                borderRadius: '16px', padding: '32px', textAlign: 'center',
            }}>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>🚀</div>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'white', fontFamily: 'Plus Jakarta Sans', marginBottom: '8px' }}>
                    Host a Challenge
                </h3>
                <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '20px' }}>
                    Are you a company looking to discover emerging talent? Host a challenge on NEXORA.
                </p>
                <button onClick={() => onNavigate('company-dashboard')} className="btn-primary" style={{ padding: '11px 24px' }}>
                    Host a Challenge
                </button>
            </div>
        </div>
    );
}

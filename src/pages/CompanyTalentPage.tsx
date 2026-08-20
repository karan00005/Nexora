import { Search, Filter } from 'lucide-react';
import { mockCompanyTalent } from '../data/mockData';
import { SkillBadge, Avatar } from '../components/UIComponents';

interface CompanyTalentPageProps {
    showToast: (msg: string) => void;
}

export default function CompanyTalentPage({ showToast }: CompanyTalentPageProps) {
    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '32px 24px', fontFamily: 'Inter, sans-serif' }}>
            <div style={{ marginBottom: '28px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                    <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '6px' }}>
                        Best Builders for Your Problem
                    </h1>
                    <p style={{ fontSize: '14px', color: '#64748b' }}>
                        AI-matched talent for: <strong>AI-powered Customer Research</strong>
                    </p>
                </div>
                <div style={{
                    padding: '8px 16px', borderRadius: '10px',
                    background: '#d1fae5', border: '1px solid #bbf7d0',
                    fontSize: '13px', fontWeight: 700, color: '#059669',
                }}>
                    ✓ 24 builders matched
                </div>
            </div>

            {/* Filters */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
                <div style={{
                    flex: 1, minWidth: '200px',
                    display: 'flex', alignItems: 'center', gap: '10px',
                    background: 'white', border: '1.5px solid #e2e8f0', borderRadius: '10px', padding: '10px 16px',
                }}>
                    <Search size={15} color="#94a3b8" />
                    <input placeholder="Search builders..." style={{ border: 'none', background: 'transparent', fontSize: '14px', outline: 'none', flex: 1, fontFamily: 'Inter' }} />
                </div>
                {['AI', 'Python', 'Product'].map(f => (
                    <button key={f} style={{
                        padding: '10px 16px', borderRadius: '10px',
                        border: '1.5px solid #2563eb', background: '#eff6ff',
                        color: '#2563eb', fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter',
                    }}>{f} ✕</button>
                ))}
                <button className="btn-ghost" style={{ padding: '10px 14px', fontSize: '13px' }}>
                    <Filter size={14} /> More
                </button>
            </div>

            {/* Talent Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {mockCompanyTalent.map((talent, i) => (
                    <div key={talent.id} style={{
                        background: 'white', borderRadius: '16px',
                        border: i === 0 ? '2px solid #10b981' : '1px solid #e2e8f0',
                        padding: '24px', display: 'flex', gap: '20px', alignItems: 'flex-start',
                        boxShadow: i === 0 ? '0 4px 20px rgba(16,185,129,0.08)' : '0 1px 4px rgba(0,0,0,0.04)',
                        transition: 'all 0.2s ease',
                    }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                            (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)';
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                            (e.currentTarget as HTMLElement).style.boxShadow = i === 0 ? '0 4px 20px rgba(16,185,129,0.08)' : '0 1px 4px rgba(0,0,0,0.04)';
                        }}
                    >
                        {/* Rank */}
                        <div style={{
                            width: '36px', height: '36px', borderRadius: '50%',
                            background: i === 0 ? '#10b981' : i === 1 ? '#2563eb' : '#e2e8f0',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontWeight: 900, fontSize: '14px', color: i < 2 ? 'white' : '#64748b',
                            flexShrink: 0, fontFamily: 'Plus Jakarta Sans',
                        }}>
                            {i + 1}
                        </div>

                        <Avatar initials={talent.avatar} size={56} />

                        <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px', flexWrap: 'wrap' }}>
                                <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', margin: 0 }}>
                                    {talent.name}
                                </h3>
                                <span style={{
                                    fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '999px',
                                    background: talent.available ? '#d1fae5' : '#fef2f2',
                                    color: talent.available ? '#059669' : '#dc2626',
                                }}>
                                    ● {talent.available ? 'Available this month' : 'Currently busy'}
                                </span>
                            </div>

                            <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '10px', fontWeight: 500 }}>
                                {talent.university} · Proof Score: {talent.proofScore}/100
                            </div>

                            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '10px' }}>
                                {talent.skills.map(s => <SkillBadge key={s} skill={s} />)}
                            </div>

                            <div style={{
                                display: 'flex', gap: '8px', alignItems: 'center',
                                padding: '10px 14px', borderRadius: '8px',
                                background: '#f8fbff', border: '1px solid #e0edff',
                            }}>
                                <span style={{ fontSize: '12px', color: '#64748b' }}>Relevant Project:</span>
                                <span style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a' }}>"{talent.project}"</span>
                                <span style={{ fontSize: '11px', color: '#10b981', fontWeight: 700, marginLeft: 'auto' }}>✓ Verified</span>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                            <div style={{
                                padding: '10px 16px', borderRadius: '12px', textAlign: 'center',
                                background: talent.matchScore >= 94 ? '#d1fae5' : '#eff6ff',
                                border: `1px solid ${talent.matchScore >= 94 ? '#bbf7d0' : '#bfdbfe'}`,
                            }}>
                                <div style={{
                                    fontSize: '20px', fontWeight: 900,
                                    color: talent.matchScore >= 94 ? '#059669' : '#2563eb',
                                    fontFamily: 'Plus Jakarta Sans', lineHeight: 1,
                                }}>
                                    {talent.matchScore}%
                                </div>
                                <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 600 }}>MATCH</div>
                            </div>
                            <button onClick={() => showToast(`${talent.name} shortlisted!`)} className="btn-primary" style={{ padding: '9px 18px', fontSize: '13px' }}>
                                Shortlist
                            </button>
                            <button onClick={() => showToast('Profile viewed!')} className="btn-ghost" style={{ padding: '7px 18px', fontSize: '12px' }}>
                                View Profile
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

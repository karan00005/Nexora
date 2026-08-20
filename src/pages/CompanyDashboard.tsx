import { Plus } from 'lucide-react';
import { mockCompany, mockCompanyTalent } from '../data/mockData';
import { SkillBadge, Avatar } from '../components/UIComponents';

interface CompanyDashboardProps {
    onNavigate: (page: string) => void;
    showToast: (msg: string) => void;
}

export default function CompanyDashboard({ onNavigate, showToast }: CompanyDashboardProps) {
    return (
        <div style={{ padding: '32px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Inter, sans-serif' }}>
            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <div style={{
                        width: '56px', height: '56px', borderRadius: '14px',
                        background: 'linear-gradient(135deg, #0a1628, #162b57)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'white', fontWeight: 800, fontSize: '18px', fontFamily: 'Plus Jakarta Sans',
                    }}>NL</div>
                    <div>
                        <h1 style={{ fontSize: '24px', fontWeight: 800, color: 'white', fontFamily: 'Plus Jakarta Sans', margin: 0 }}>
                            {mockCompany.name}
                        </h1>
                        <div style={{ fontSize: '13px', color: '#9ca3af', marginTop: '2px' }}>
                            {mockCompany.industry} · {mockCompany.location}
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => onNavigate('post-problem')}
                    className="btn-primary"
                    style={{ padding: '12px 22px', fontSize: '14px', gap: '8px' }}
                >
                    <Plus size={16} /> Post a Problem
                </button>
            </div>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
                {[
                    { value: '4', label: 'Active Projects', icon: '🔨', color: '#a78bfa' },
                    { value: '126', label: 'Talent Matches', icon: '🤖', color: '#10b981' },
                    { value: '38', label: 'Applications', icon: '📋', color: '#7c3aed' },
                    { value: '12', label: 'Completed Projects', icon: '✅', color: '#f59e0b' },
                ].map(stat => (
                    <div key={stat.label} style={{
                        background: 'rgba(20,20,25,0.8)', borderRadius: '14px',
                        border: '1px solid rgba(255,255,255,0.05)', padding: '20px',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                    }}>
                        <div style={{ fontSize: '24px', marginBottom: '8px' }}>{stat.icon}</div>
                        <div style={{ fontSize: '30px', fontWeight: 900, color: stat.color, fontFamily: 'Plus Jakarta Sans', lineHeight: 1 }}>{stat.value}</div>
                        <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '6px', fontWeight: 500 }}>{stat.label}</div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
                {/* LEFT */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {/* Post Problem CTA */}
                    <div style={{
                        background: 'linear-gradient(135deg, #0a1628, #1e3a6e)',
                        borderRadius: '16px', padding: '28px',
                        display: 'flex', alignItems: 'center', gap: '24px',
                    }}>
                        <div style={{ fontSize: '48px' }}>💡</div>
                        <div style={{ flex: 1 }}>
                            <h2 style={{ fontSize: '20px', fontWeight: 800, color: 'white', fontFamily: 'Plus Jakarta Sans', marginBottom: '6px' }}>
                                Post a Real Problem
                            </h2>
                            <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6 }}>
                                Turn a real business problem into a project opportunity. AI will find and match the best builders.
                            </p>
                        </div>
                        <button onClick={() => onNavigate('post-problem')} style={{
                            padding: '12px 22px', borderRadius: '10px',
                            background: 'rgba(37,99,235,0.3)', color: 'white',
                            border: '1px solid rgba(37,99,235,0.5)', fontWeight: 700, fontSize: '14px',
                            cursor: 'pointer', fontFamily: 'Inter', display: 'flex', alignItems: 'center', gap: '8px',
                            whiteSpace: 'nowrap',
                        }}>
                            <Plus size={16} /> Post Problem
                        </button>
                    </div>

                    {/* Active Projects */}
                    <div style={{ background: 'rgba(20,20,25,0.8)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', padding: '24px' }}>
                        <h2 style={{ fontSize: '16px', fontWeight: 700, color: 'white', fontFamily: 'Plus Jakarta Sans', marginBottom: '16px' }}>
                            Active Projects
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[
                                { name: 'AI Customer Research Platform', team: 4, progress: 68, days: 5, status: 'On Track' },
                                { name: 'Smart Retail Analytics System', team: 3, progress: 35, days: 12, status: 'In Progress' },
                                { name: 'Predictive Churn Model', team: 2, progress: 90, days: 2, status: 'Near Complete' },
                                { name: 'Customer Journey Dashboard', team: 4, progress: 15, days: 20, status: 'Starting' },
                            ].map(project => {
                                const statusColors = {
                                    'On Track': '#10b981', 'In Progress': '#2563eb',
                                    'Near Complete': '#f59e0b', 'Starting': '#64748b',
                                } as Record<string, string>;
                                return (
                                    <div key={project.name} style={{
                                        padding: '16px', borderRadius: '12px',
                                        border: '1px solid rgba(255,255,255,0.05)', background: '#050505',
                                        cursor: 'pointer', transition: 'all 0.15s ease',
                                    }}
                                        onClick={() => onNavigate('workspace')}
                                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#f0f4ff'; }}
                                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#f8fafc'; }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                            <div style={{ fontSize: '14px', fontWeight: 600, color: 'white' }}>{project.name}</div>
                                            <span style={{
                                                fontSize: '11px', fontWeight: 700, padding: '2px 8px', borderRadius: '999px',
                                                background: `${statusColors[project.status]}15`, color: statusColors[project.status],
                                                border: `1px solid ${statusColors[project.status]}30`,
                                            }}>{project.status}</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                            <span style={{ fontSize: '12px', color: '#9ca3af' }}>👥 {project.team} builders · ⏰ {project.days} days left</span>
                                            <span style={{ fontSize: '12px', fontWeight: 700, color: 'white' }}>{project.progress}%</span>
                                        </div>
                                        <div style={{ height: '5px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
                                            <div style={{
                                                height: '100%', width: `${project.progress}%`,
                                                background: statusColors[project.status], borderRadius: '999px',
                                            }} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Recommended Talent */}
                    <div style={{ background: 'rgba(20,20,25,0.8)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', padding: '24px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <div>
                                <h2 style={{ fontSize: '16px', fontWeight: 700, color: 'white', fontFamily: 'Plus Jakarta Sans', margin: 0 }}>
                                    🤖 Recommended Builders
                                </h2>
                                <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>{mockCompany.stats.talentMatches} builders matched across your problems</p>
                            </div>
                            <button onClick={() => onNavigate('company-talent')} style={{
                                fontSize: '12px', fontWeight: 600, color: '#a78bfa',
                                background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter',
                            }}>
                                View All
                            </button>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {mockCompanyTalent.map(talent => (
                                <div key={talent.id} style={{
                                    display: 'flex', gap: '14px', alignItems: 'center',
                                    padding: '14px', borderRadius: '10px',
                                    border: '1px solid rgba(255,255,255,0.05)', background: '#fafafa',
                                }}>
                                    <Avatar initials={talent.avatar} size={44} />
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ fontSize: '14px', fontWeight: 700, color: 'white', marginBottom: '2px' }}>{talent.name}</div>
                                        <div style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '8px' }}>{talent.university} · Proof Score: {talent.proofScore}</div>
                                        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                                            {talent.skills.map(s => <SkillBadge key={s} skill={s} />)}
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                                        <div style={{
                                            padding: '4px 10px', borderRadius: '999px',
                                            background: '#d1fae5', color: '#059669', fontSize: '12px', fontWeight: 800,
                                        }}>
                                            {talent.matchScore}% Match
                                        </div>
                                        <button
                                            onClick={() => showToast(`${talent.name} shortlisted!`)}
                                            style={{
                                                padding: '6px 14px', borderRadius: '8px',
                                                border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(20,20,25,0.8)',
                                                fontSize: '12px', fontWeight: 600, color: 'white',
                                                cursor: 'pointer', fontFamily: 'Inter',
                                            }}
                                        >
                                            Shortlist
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {/* Analytics */}
                    <div style={{ background: 'rgba(20,20,25,0.8)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', padding: '24px' }}>
                        <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'white', fontFamily: 'Plus Jakarta Sans', marginBottom: '16px' }}>
                            📊 This Month
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[
                                { label: 'Talent Discovered', value: '+24', trend: 'up' },
                                { label: 'Projects Matched', value: '+3', trend: 'up' },
                                { label: 'Avg Match Score', value: '89%', trend: 'up' },
                                { label: 'Time to Hire', value: '8 days', trend: 'neutral' },
                            ].map(item => (
                                <div key={item.label} style={{
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                    padding: '12px', borderRadius: '10px', background: '#050505',
                                }}>
                                    <span style={{ fontSize: '13px', color: '#9ca3af', fontWeight: 500 }}>{item.label}</span>
                                    <span style={{
                                        fontSize: '15px', fontWeight: 800,
                                        color: item.trend === 'up' ? '#10b981' : '#64748b',
                                        fontFamily: 'Plus Jakarta Sans',
                                    }}>
                                        {item.trend === 'up' ? '↑' : ''} {item.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div style={{ background: 'rgba(20,20,25,0.8)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', padding: '24px' }}>
                        <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'white', fontFamily: 'Plus Jakarta Sans', marginBottom: '14px' }}>
                            Quick Actions
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {[
                                { label: 'Post a Problem', action: 'post-problem', icon: '📋' },
                                { label: 'Browse Talent', action: 'company-talent', icon: '👥' },
                                { label: 'View Projects', action: 'workspace', icon: '🔨' },
                            ].map(item => (
                                <button
                                    key={item.action}
                                    onClick={() => onNavigate(item.action)}
                                    style={{
                                        padding: '12px 14px', borderRadius: '10px',
                                        border: '1px solid rgba(255,255,255,0.05)', background: '#050505',
                                        color: 'white', fontSize: '13px', fontWeight: 500,
                                        cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px',
                                        fontFamily: 'Inter', transition: 'all 0.15s ease',
                                    }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#eff6ff'; (e.currentTarget as HTMLElement).style.color = '#2563eb'; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#f8fafc'; (e.currentTarget as HTMLElement).style.color = '#0f172a'; }}
                                >
                                    {item.icon} {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

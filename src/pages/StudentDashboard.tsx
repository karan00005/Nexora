import { ArrowRight, CheckCircle, Zap } from 'lucide-react';
import { mockOpportunities, mockActivityFeed } from '../data/mockData';
import { MatchRing, SkillBadge, StatCard } from '../components/UIComponents';

interface DashboardProps {
    onNavigate: (page: string) => void;
    showToast: (msg: string) => void;
}

export default function StudentDashboard({ onNavigate, showToast }: DashboardProps) {
    const topOpps = mockOpportunities.slice(0, 3);

    return (
        <div style={{ padding: '32px', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Welcome */}
            <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                    <h1 style={{ fontSize: '28px', fontWeight: 800, color: 'white', fontFamily: 'Plus Jakarta Sans', marginBottom: '6px' }}>
                        Good morning, Aarav 👋
                    </h1>
                    <p style={{ color: '#9ca3af', fontSize: '15px' }}>Here's what's happening with your career journey.</p>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button onClick={() => onNavigate('opportunities')} className="btn-primary" style={{ padding: '10px 18px', fontSize: '13px' }}>
                        <Zap size={14} />
                        Explore Matches
                    </button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '32px' }}>
                <StatCard value="86" label="Proof Score" icon="⚡" color="#2563eb" />
                <StatCard value="8" label="Projects" icon="🔨" color="#4f46e5" />
                <StatCard value="5" label="Challenges" icon="🏆" color="#f59e0b" />
                <StatCard value="92%" label="Best Match" icon="🤖" color="#10b981" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                {/* LEFT COLUMN */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {/* Profile Strength */}
                    <div style={{
                        background: 'rgba(20,20,25,0.8)', borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.05)', padding: '24px',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'white', fontFamily: 'Plus Jakarta Sans' }}>Profile Strength</h3>
                            <span style={{ fontSize: '13px', fontWeight: 700, color: '#a78bfa' }}>78% Complete</span>
                        </div>
                        <div style={{ height: '8px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden', marginBottom: '16px' }}>
                            <div style={{
                                height: '100%', width: '78%',
                                background: 'linear-gradient(90deg, #2563eb, #4f46e5)',
                                borderRadius: '999px', transition: 'width 1s ease',
                            }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {[
                                { text: 'Add GitHub profile link', done: false },
                                { text: 'Describe your career goal', done: false },
                                { text: 'Add one more project', done: false },
                                { text: 'Skills added', done: true },
                                { text: 'Profile picture added', done: true },
                            ].map(item => (
                                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <CheckCircle size={15} color={item.done ? '#10b981' : '#d1d5db'} fill={item.done ? '#d1fae5' : 'transparent'} />
                                    <span style={{ fontSize: '13px', color: item.done ? '#64748b' : '#0f172a', fontWeight: item.done ? 400 : 500, textDecoration: item.done ? 'line-through' : 'none' }}>
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => onNavigate('profile')} className="btn-primary" style={{ marginTop: '16px', width: '100%', padding: '10px' }}>
                            Complete Profile
                        </button>
                    </div>

                    {/* AI Opportunity Matches */}
                    <div style={{
                        background: 'rgba(20,20,25,0.8)', borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.05)', padding: '24px',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                            <div>
                                <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'white', fontFamily: 'Plus Jakarta Sans' }}>
                                    🤖 AI Opportunity Matches
                                </h3>
                                <p style={{ fontSize: '12px', color: '#94a3b8', marginTop: '2px' }}>Based on your skills, projects & goals</p>
                            </div>
                            <button onClick={() => onNavigate('opportunities')} style={{
                                fontSize: '12px', fontWeight: 600, color: '#a78bfa',
                                background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px',
                            }}>
                                View All <ArrowRight size={13} />
                            </button>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            {topOpps.map(opp => (
                                <div
                                    key={opp.id}
                                    onClick={() => onNavigate('opportunity-detail')}
                                    style={{
                                        display: 'flex', alignItems: 'center', gap: '16px',
                                        padding: '16px', borderRadius: '12px',
                                        border: '1px solid rgba(255,255,255,0.05)', cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                        background: '#fafafa',
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLElement).style.border = '1px solid #bfdbfe';
                                        (e.currentTarget as HTMLElement).style.background = '#f8fbff';
                                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLElement).style.border = '1px solid #e2e8f0';
                                        (e.currentTarget as HTMLElement).style.background = '#fafafa';
                                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                                    }}
                                >
                                    <div style={{
                                        width: '44px', height: '44px', borderRadius: '10px',
                                        background: 'linear-gradient(135deg, #0a1628, #162b57)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'white', fontWeight: 800, fontSize: '12px', fontFamily: 'Plus Jakarta Sans',
                                        flexShrink: 0,
                                    }}>
                                        {opp.companyLogo}
                                    </div>
                                    <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ fontSize: '14px', fontWeight: 700, color: 'white', marginBottom: '2px' }}>{opp.title}</div>
                                        <div style={{ fontSize: '12px', color: '#9ca3af' }}>{opp.company} · {opp.location} · {opp.duration}</div>
                                        <div style={{ display: 'flex', gap: '6px', marginTop: '8px', flexWrap: 'wrap' }}>
                                            {opp.skills.map(s => <SkillBadge key={s} skill={s} />)}
                                        </div>
                                    </div>
                                    <div style={{ flexShrink: 0 }}>
                                        <MatchRing score={opp.matchScore} size={60} fontSize={15} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Recommended Projects */}
                    <div style={{
                        background: 'rgba(20,20,25,0.8)', borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.05)', padding: '24px',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                    }}>
                        <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'white', fontFamily: 'Plus Jakarta Sans', marginBottom: '16px' }}>
                            🔨 Recommended Projects
                        </h3>
                        <div style={{
                            background: 'linear-gradient(135deg, #f8fbff, #f5f3ff)',
                            borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', padding: '20px',
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                                <div>
                                    <div style={{ fontSize: '15px', fontWeight: 700, color: 'white', marginBottom: '4px' }}>
                                        Build an AI-powered customer feedback analyzer
                                    </div>
                                    <div style={{ fontSize: '12px', color: '#9ca3af' }}>Nova Labs</div>
                                </div>
                                <span style={{
                                    padding: '4px 10px', borderRadius: '999px',
                                    background: '#d1fae5', color: '#059669', fontSize: '11px', fontWeight: 700,
                                }}>94% Match</span>
                            </div>
                            <div style={{ display: 'flex', gap: '20px', marginBottom: '16px' }}>
                                <div style={{ fontSize: '12px', color: '#9ca3af' }}>👥 Team: 3/4 members</div>
                                <div style={{ fontSize: '12px', color: '#9ca3af' }}>⏱ 2 weeks</div>
                                <div style={{ fontSize: '12px', color: '#f59e0b', fontWeight: 600 }}>₹15,000 + Certificate</div>
                            </div>
                            <button
                                onClick={() => { onNavigate('team-formation'); showToast('Joining project team!'); }}
                                className="btn-primary"
                                style={{ fontSize: '13px', padding: '8px 18px' }}
                            >
                                Join Project
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {/* Proof of Work */}
                    <div style={{
                        background: 'linear-gradient(135deg, #0a1628, #162b57)',
                        borderRadius: '16px', padding: '24px',
                        boxShadow: '0 4px 20px rgba(10,22,40,0.2)',
                    }}>
                        <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'white', marginBottom: '4px', fontFamily: 'Plus Jakarta Sans' }}>
                            Your Proof-of-Work
                        </h3>
                        <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '20px' }}>Everything you've built and proven</p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px' }}>
                            {[
                                { value: '8', label: 'Projects', icon: '🔨' },
                                { value: '5', label: 'Challenges', icon: '⚡' },
                                { value: '3', label: 'Hackathons', icon: '🏆' },
                                { value: '14', label: 'Skills', icon: '🎯' },
                                { value: '12', label: 'Collaborations', icon: '👥' },
                                { value: '86', label: 'Proof Score', icon: '⚡' },
                            ].map(stat => (
                                <div key={stat.label} style={{
                                    background: 'rgba(255,255,255,0.07)', borderRadius: '10px',
                                    padding: '14px', border: '1px solid rgba(255,255,255,0.08)',
                                }}>
                                    <div style={{ fontSize: '18px', marginBottom: '4px' }}>{stat.icon}</div>
                                    <div style={{ fontSize: '22px', fontWeight: 800, color: 'white', fontFamily: 'Plus Jakarta Sans', lineHeight: 1 }}>{stat.value}</div>
                                    <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px', fontWeight: 500 }}>{stat.label}</div>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => onNavigate('profile')} style={{
                            marginTop: '16px', width: '100%', padding: '10px',
                            background: 'rgba(37,99,235,0.3)', color: 'white', border: '1px solid rgba(37,99,235,0.5)',
                            borderRadius: '10px', fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: 'Inter',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                        }}>
                            View Full Profile <ArrowRight size={14} />
                        </button>
                    </div>

                    {/* Recent Activity */}
                    <div style={{
                        background: 'rgba(20,20,25,0.8)', borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.05)', padding: '24px',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                    }}>
                        <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'white', fontFamily: 'Plus Jakarta Sans', marginBottom: '16px' }}>
                            Recent Activity
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            {mockActivityFeed.map(act => {
                                const icons = { completed: '✅', achievement: '🏆', added: '➕', match: '🤖', team: '👥' } as Record<string, string>;
                                const colors = { completed: '#10b981', achievement: '#f59e0b', added: '#2563eb', match: '#7c3aed', team: '#db2777' } as Record<string, string>;
                                return (
                                    <div key={act.id} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                        <div style={{
                                            width: '32px', height: '32px', borderRadius: '8px',
                                            background: `${colors[act.type]}15`,
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            fontSize: '14px', flexShrink: 0,
                                        }}>
                                            {icons[act.type]}
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '13px', fontWeight: 500, color: 'white' }}>{act.text}</div>
                                            <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>{act.time}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div style={{
                        background: 'rgba(20,20,25,0.8)', borderRadius: '16px',
                        border: '1px solid rgba(255,255,255,0.05)', padding: '24px',
                        boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                    }}>
                        <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'white', fontFamily: 'Plus Jakarta Sans', marginBottom: '14px' }}>
                            Quick Actions
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            {[
                                { label: 'View AI Matches', action: 'ai-match', icon: '🤖' },
                                { label: 'Browse Challenges', action: 'challenges', icon: '🏆' },
                                { label: 'Find Mentors', action: 'mentors', icon: '🧑‍🏫' },
                                { label: 'Project Workspace', action: 'workspace', icon: '🔨' },
                                { label: 'View My Certificate', action: 'certificate', icon: '📜' },
                            ].map(item => (
                                <button
                                    key={item.action}
                                    onClick={() => onNavigate(item.action)}
                                    style={{
                                        padding: '10px 14px', borderRadius: '10px',
                                        border: '1px solid rgba(255,255,255,0.05)', background: '#050505',
                                        color: 'white', fontSize: '13px', fontWeight: 500,
                                        cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px',
                                        textAlign: 'left', fontFamily: 'Inter', transition: 'all 0.15s ease',
                                    }}
                                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#eff6ff'; (e.currentTarget as HTMLElement).style.color = '#2563eb'; }}
                                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = '#f8fafc'; (e.currentTarget as HTMLElement).style.color = '#0f172a'; }}
                                >
                                    <span>{item.icon}</span> {item.label}
                                    <ArrowRight size={13} style={{ marginLeft: 'auto' }} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { CheckCircle, ArrowRight, Bookmark } from 'lucide-react';
import { SkillBadge } from '../components/UIComponents';
import { matchBreakdown } from '../data/mockData';

interface OpportunityDetailProps {
    onNavigate: (page: string) => void;
    showToast: (msg: string) => void;
}

export default function OpportunityDetailPage({ onNavigate, showToast }: OpportunityDetailProps) {
    const teamRoles = [
        { role: 'Product Researcher', filled: true },
        { role: 'Data Analyst', filled: true },
        { role: 'Frontend Developer', filled: false },
        { role: 'UX Designer', filled: false },
    ];

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '32px 24px', fontFamily: 'Inter, sans-serif' }}>
            {/* Breadcrumb */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px', fontSize: '13px', color: '#94a3b8' }}>
                <button onClick={() => onNavigate('opportunities')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', fontFamily: 'Inter', fontSize: '13px' }}>
                    Opportunities
                </button>
                <span>/</span>
                <span style={{ color: '#0f172a', fontWeight: 500 }}>AI-Powered Customer Research Platform</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
                {/* LEFT */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {/* Header */}
                    <div style={{
                        background: 'white', borderRadius: '16px',
                        border: '1px solid #e2e8f0', padding: '28px',
                    }}>
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '20px' }}>
                            <div style={{
                                width: '60px', height: '60px', borderRadius: '14px',
                                background: 'linear-gradient(135deg, #0a1628, #162b57)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: 'white', fontWeight: 800, fontSize: '16px', flexShrink: 0, fontFamily: 'Plus Jakarta Sans',
                            }}>NL</div>
                            <div>
                                <h1 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '6px' }}>
                                    AI-Powered Customer Research Platform
                                </h1>
                                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                    <div style={{ fontSize: '14px', fontWeight: 600, color: '#64748b' }}>Nova Labs</div>
                                    <span style={{
                                        padding: '3px 10px', borderRadius: '999px', fontSize: '11px', fontWeight: 700,
                                        background: '#f5f3ff', color: '#7c3aed',
                                    }}>Real-world Project</span>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                            {[
                                { icon: '📍', label: 'Location', value: 'Remote' },
                                { icon: '⏱️', label: 'Duration', value: '2 weeks' },
                                { icon: '👥', label: 'Team Size', value: '4 builders' },
                                { icon: '💰', label: 'Reward', value: '₹15,000 + Cert.' },
                            ].map(item => (
                                <div key={item.label} style={{
                                    padding: '14px', borderRadius: '10px',
                                    background: '#f8fafc', border: '1px solid #e2e8f0', textAlign: 'center',
                                }}>
                                    <div style={{ fontSize: '18px', marginBottom: '4px' }}>{item.icon}</div>
                                    <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 500 }}>{item.label}</div>
                                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', marginTop: '2px' }}>{item.value}</div>
                                </div>
                            ))}
                        </div>
                        <div style={{
                            marginTop: '14px', padding: '10px 14px', borderRadius: '8px',
                            background: '#fef3c7', border: '1px solid #fde68a',
                            fontSize: '13px', fontWeight: 600, color: '#92400e',
                        }}>
                            🎯 Hiring Consideration for top performers
                        </div>
                    </div>

                    {/* Problem Statement */}
                    <div style={{
                        background: 'white', borderRadius: '16px',
                        border: '1px solid #e2e8f0', padding: '24px',
                    }}>
                        <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '14px' }}>
                            The Problem
                        </h2>
                        <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.8 }}>
                            We are trying to understand why users abandon our onboarding flow and need a data-driven research solution.
                            The current onboarding flow has a 62% drop-off rate but we don't understand the friction points.
                            We need a team to design a research framework, collect data, analyze it, and present actionable insights.
                        </p>
                    </div>

                    {/* What You'll Build */}
                    <div style={{
                        background: 'white', borderRadius: '16px',
                        border: '1px solid #e2e8f0', padding: '24px',
                    }}>
                        <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '16px' }}>
                            What You'll Build
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[
                                { icon: '📋', title: 'Customer Research Framework', desc: 'Design the research methodology and questions' },
                                { icon: '📊', title: 'Survey & Interview System', desc: 'Build and distribute user surveys' },
                                { icon: '🤖', title: 'Data Analysis Pipeline', desc: 'Process and analyze collected qualitative and quantitative data' },
                                { icon: '📈', title: 'Insight Dashboard', desc: 'Present findings in a clear, actionable dashboard' },
                            ].map(item => (
                                <div key={item.title} style={{
                                    display: 'flex', gap: '14px', alignItems: 'flex-start',
                                    padding: '14px', borderRadius: '10px', background: '#f8fafc', border: '1px solid #e2e8f0',
                                }}>
                                    <div style={{
                                        width: '36px', height: '36px', borderRadius: '8px',
                                        background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        fontSize: '16px', flexShrink: 0,
                                    }}>{item.icon}</div>
                                    <div>
                                        <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>{item.title}</div>
                                        <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Skills */}
                    <div style={{
                        background: 'white', borderRadius: '16px',
                        border: '1px solid #e2e8f0', padding: '24px',
                    }}>
                        <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '14px' }}>
                            Required Skills
                        </h2>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {['User Research', 'Data Analysis', 'Python', 'Product Thinking', 'Survey Design', 'React'].map(s => (
                                <SkillBadge key={s} skill={s} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {/* AI Match */}
                    <div style={{
                        background: 'linear-gradient(135deg, #0a1628, #162b57)',
                        borderRadius: '16px', padding: '24px',
                    }}>
                        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: '#94a3b8', marginBottom: '12px' }}>
                                🤖 AI MATCH SCORE
                            </div>
                            <div style={{ fontSize: '52px', fontWeight: 900, color: '#10b981', fontFamily: 'Plus Jakarta Sans', lineHeight: 1 }}>
                                94%
                            </div>
                            <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>Excellent Match</div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {matchBreakdown.map(item => (
                                <div key={item.label}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                        <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 500 }}>{item.label}</span>
                                        <span style={{ fontSize: '12px', color: '#10b981', fontWeight: 700 }}>{item.value}%</span>
                                    </div>
                                    <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '999px' }}>
                                        <div style={{ height: '100%', width: `${item.value}%`, background: '#10b981', borderRadius: '999px' }} />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '16px', padding: '12px', borderRadius: '10px', background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}>
                            <p style={{ fontSize: '12px', color: '#6ee7b7', lineHeight: 1.6 }}>
                                ✓ Your data analysis skills and IoT project experience align strongly with this role.
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div style={{
                        background: 'white', borderRadius: '16px',
                        border: '1px solid #e2e8f0', padding: '24px',
                    }}>
                        <button
                            onClick={() => { showToast('Joined project! Check team page.'); onNavigate('team-formation'); }}
                            className="btn-primary"
                            style={{ width: '100%', padding: '14px', fontSize: '15px', marginBottom: '10px' }}
                        >
                            Join Project <ArrowRight size={16} />
                        </button>
                        <button
                            onClick={() => showToast('Saved to your list!')}
                            className="btn-ghost"
                            style={{ width: '100%', padding: '12px', fontSize: '14px' }}
                        >
                            <Bookmark size={15} /> Save Opportunity
                        </button>
                    </div>

                    {/* Team Needed */}
                    <div style={{
                        background: 'white', borderRadius: '16px',
                        border: '1px solid #e2e8f0', padding: '24px',
                    }}>
                        <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '16px' }}>
                            Team Needed
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {teamRoles.map(role => (
                                <div key={role.role} style={{
                                    display: 'flex', alignItems: 'center', gap: '12px',
                                    padding: '12px', borderRadius: '10px',
                                    background: role.filled ? '#f0fdf4' : '#fefce8',
                                    border: `1px solid ${role.filled ? '#bbf7d0' : '#fde68a'}`,
                                }}>
                                    {role.filled ? (
                                        <CheckCircle size={16} color="#10b981" />
                                    ) : (
                                        <div style={{
                                            width: '16px', height: '16px', borderRadius: '50%',
                                            border: '2px dashed #fbbf24',
                                        }} />
                                    )}
                                    <span style={{ fontSize: '13px', fontWeight: 600, color: role.filled ? '#065f46' : '#92400e' }}>
                                        {role.role}
                                    </span>
                                    <span style={{
                                        marginLeft: 'auto', fontSize: '11px', fontWeight: 700,
                                        color: role.filled ? '#059669' : '#d97706',
                                    }}>
                                        {role.filled ? '1/1 Filled' : '0/1 Open'}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Company */}
                    <div style={{
                        background: 'white', borderRadius: '16px',
                        border: '1px solid #e2e8f0', padding: '24px',
                    }}>
                        <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '14px' }}>
                            About Nova Labs
                        </h3>
                        <p style={{ fontSize: '13px', color: '#64748b', lineHeight: 1.7, marginBottom: '14px' }}>
                            Nova Labs is an AI-first product company building next-generation tools for teams.
                            Series A backed, 50-person team based in Bangalore.
                        </p>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            <SkillBadge skill="AI" variant="purple" />
                            <SkillBadge skill="SaaS" variant="blue" />
                            <SkillBadge skill="Series A" variant="green" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

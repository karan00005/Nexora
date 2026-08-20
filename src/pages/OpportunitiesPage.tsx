import { useState } from 'react';
import { Search, Filter, MapPin, Clock } from 'lucide-react';
import { mockOpportunities } from '../data/mockData';
import { MatchRing, SkillBadge } from '../components/UIComponents';

interface OpportunitiesPageProps {
    onNavigate: (page: string) => void;
    showToast: (msg: string) => void;
}

const tabs = ['All', 'Internships', 'Projects', 'Challenges', 'Jobs', 'Hackathons', 'Mentorship'];

export default function OpportunitiesPage({ onNavigate, showToast }: OpportunitiesPageProps) {
    const [activeTab, setActiveTab] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const [minMatch, setMinMatch] = useState(0);

    const filtered = mockOpportunities.filter(opp => {
        const q = searchQuery.toLowerCase();
        const matchesSearch = !q || opp.title.toLowerCase().includes(q) || opp.company.toLowerCase().includes(q) || opp.skills.some(s => s.toLowerCase().includes(q));
        const matchesTab = activeTab === 'All' ||
            (activeTab === 'Internships' && opp.type === 'Internship') ||
            (activeTab === 'Projects' && opp.type === 'Project') ||
            (activeTab === 'Challenges' && opp.type === 'Challenge') ||
            (activeTab === 'Jobs' && opp.type === 'Job');
        const matchesScore = opp.matchScore >= minMatch;
        return matchesSearch && matchesTab && matchesScore;
    });

    const typeColors = {
        Internship: { bg: '#eff6ff', text: '#2563eb' },
        Project: { bg: '#f5f3ff', text: '#7c3aed' },
        Challenge: { bg: '#fff7ed', text: '#ea580c' },
        Job: { bg: '#f0fdf4', text: '#16a34a' },
        Hackathon: { bg: '#fef3c7', text: '#d97706' },
    } as Record<string, { bg: string; text: string }>;

    return (
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 24px', fontFamily: 'Inter, sans-serif' }}>
            {/* Header */}
            <div style={{ marginBottom: '28px' }}>
                <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '6px' }}>
                    Opportunities
                </h1>
                <p style={{ color: '#64748b', fontSize: '14px' }}>
                    AI-matched opportunities based on your skills, projects, and goals
                </p>
            </div>

            {/* Search and Filters */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
                <div style={{
                    flex: 1, minWidth: '260px',
                    display: 'flex', alignItems: 'center', gap: '10px',
                    background: 'white', border: '1.5px solid #e2e8f0', borderRadius: '10px',
                    padding: '10px 16px',
                }}>
                    <Search size={16} color="#94a3b8" />
                    <input
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                        placeholder="Search opportunities, skills, companies..."
                        style={{ border: 'none', background: 'transparent', fontSize: '14px', color: '#0f172a', outline: 'none', flex: 1, fontFamily: 'Inter' }}
                    />
                </div>
                <select
                    value={minMatch}
                    onChange={e => setMinMatch(Number(e.target.value))}
                    style={{
                        padding: '10px 14px', borderRadius: '10px', border: '1.5px solid #e2e8f0',
                        background: 'white', fontSize: '13px', fontFamily: 'Inter', color: '#374151',
                        cursor: 'pointer', outline: 'none',
                    }}
                >
                    <option value={0}>All Match %</option>
                    <option value={80}>80%+ Match</option>
                    <option value={85}>85%+ Match</option>
                    <option value={90}>90%+ Match</option>
                </select>
                <button className="btn-ghost" style={{ padding: '10px 16px', fontSize: '13px' }}>
                    <Filter size={14} /> More Filters
                </button>
            </div>

            {/* Tabs */}
            <div style={{
                display: 'flex', gap: '4px', marginBottom: '24px',
                background: '#f8fafc', borderRadius: '10px', padding: '4px',
                border: '1px solid #e2e8f0', overflowX: 'auto',
            }}>
                {tabs.map(tab => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={{
                            padding: '8px 16px', borderRadius: '8px',
                            border: 'none', background: activeTab === tab ? 'white' : 'transparent',
                            color: activeTab === tab ? '#0f172a' : '#64748b',
                            fontSize: '13px', fontWeight: activeTab === tab ? 700 : 500,
                            cursor: 'pointer', transition: 'all 0.15s ease',
                            boxShadow: activeTab === tab ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                            fontFamily: 'Inter', whiteSpace: 'nowrap',
                        }}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Results count */}
            <div style={{ marginBottom: '16px' }}>
                <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>
                    {filtered.length} opportunities found
                </span>
            </div>

            {/* Opportunity Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {filtered.map(opp => {
                    const typeStyle = typeColors[opp.type] || typeColors['Internship'];
                    return (
                        <div
                            key={opp.id}
                            style={{
                                background: 'white', borderRadius: '16px',
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                                transition: 'all 0.2s ease', overflow: 'hidden',
                            }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)';
                                (e.currentTarget as HTMLElement).style.borderColor = '#bfdbfe';
                                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)';
                                (e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0';
                                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{ padding: '24px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                                {/* Company Logo */}
                                <div style={{
                                    width: '52px', height: '52px', borderRadius: '12px',
                                    background: 'linear-gradient(135deg, #0a1628, #162b57)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'white', fontWeight: 800, fontSize: '13px', flexShrink: 0,
                                    fontFamily: 'Plus Jakarta Sans',
                                }}>
                                    {opp.companyLogo}
                                </div>

                                {/* Main info */}
                                <div style={{ flex: 1, minWidth: 0 }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                                        <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', margin: 0 }}>
                                            {opp.title}
                                        </h3>
                                        <span style={{
                                            padding: '3px 10px', borderRadius: '999px', fontSize: '11px', fontWeight: 700,
                                            background: typeStyle.bg, color: typeStyle.text,
                                        }}>
                                            {opp.type}
                                        </span>
                                    </div>

                                    <div style={{ fontSize: '14px', color: '#64748b', fontWeight: 500, marginBottom: '10px' }}>
                                        {opp.company}
                                    </div>

                                    <div style={{ display: 'flex', gap: '16px', marginBottom: '12px', flexWrap: 'wrap' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', color: '#64748b' }}>
                                            <MapPin size={12} /> {opp.location}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', color: '#64748b' }}>
                                            <Clock size={12} /> {opp.duration}
                                        </div>
                                        {(opp.stipend || opp.reward) && (
                                            <div style={{ fontSize: '13px', color: '#f59e0b', fontWeight: 700 }}>
                                                {opp.stipend || opp.reward}
                                            </div>
                                        )}
                                        {opp.deadline && (
                                            <div style={{ fontSize: '13px', color: '#ef4444', fontWeight: 500 }}>
                                                ⏰ {opp.deadline} left
                                            </div>
                                        )}
                                    </div>

                                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
                                        {opp.skills.map(s => <SkillBadge key={s} skill={s} />)}
                                    </div>

                                    <div style={{
                                        padding: '10px 14px', borderRadius: '8px',
                                        background: '#f8fbff', border: '1px solid #dbeafe',
                                        fontSize: '13px', color: '#1e40af',
                                    }}>
                                        <span style={{ fontWeight: 700 }}>🤖 Why you match: </span>
                                        {opp.matchReason}
                                    </div>
                                </div>

                                {/* Match Score + CTA */}
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                                    <MatchRing score={opp.matchScore} size={72} fontSize={18} />
                                    <button
                                        onClick={() => onNavigate('opportunity-detail')}
                                        className="btn-primary"
                                        style={{ padding: '9px 18px', fontSize: '13px', whiteSpace: 'nowrap' }}
                                    >
                                        View Details
                                    </button>
                                    <button
                                        onClick={() => showToast('Saved to your list!')}
                                        className="btn-ghost"
                                        style={{ padding: '6px 18px', fontSize: '12px' }}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {filtered.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '60px 20px', color: '#94a3b8' }}>
                        <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
                        <div style={{ fontSize: '16px', fontWeight: 600, color: '#64748b', marginBottom: '8px' }}>No opportunities found</div>
                        <div style={{ fontSize: '14px' }}>Try adjusting your filters or search terms</div>
                    </div>
                )}
            </div>
        </div>
    );
}

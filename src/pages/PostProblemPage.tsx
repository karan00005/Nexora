import { useState } from 'react';
import { ArrowRight, Zap, CheckCircle } from 'lucide-react';
import { mockCompanyTalent } from '../data/mockData';
import { SkillBadge, Avatar } from '../components/UIComponents';

interface PostProblemPageProps {
    onNavigate: (page: string) => void;
    showToast: (msg: string) => void;
}

const skillOptions = ['Python', 'React', 'Node.js', 'AI/ML', 'Data Science', 'IoT', 'UI/UX', 'Product', 'Marketing', 'Finance', 'Robotics', 'SQL'];
const domainOptions = ['AI/ML', 'FinTech', 'HealthTech', 'CleanTech', 'EdTech', 'SaaS', 'IoT', 'Robotics', 'Analytics'];

export default function PostProblemPage({ onNavigate, showToast }: PostProblemPageProps) {
    const [step, setStep] = useState<'form' | 'loading' | 'results'>('form');
    const [selectedSkills, setSelectedSkills] = useState<string[]>(['AI/ML', 'Python', 'Product']);

    const toggleSkill = (s: string) => {
        setSelectedSkills(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
    };

    const handleFindBuilders = () => {
        setStep('loading');
        setTimeout(() => setStep('results'), 2500);
    };

    if (step === 'loading') {
        return (
            <div style={{
                minHeight: '70vh', display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Inter, sans-serif', textAlign: 'center',
            }}>
                <div style={{
                    width: '80px', height: '80px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '36px', marginBottom: '24px',
                    animation: 'pulse-ring 1.5s infinite',
                }}>
                    🤖
                </div>
                <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '10px' }}>
                    AI is finding your best matches...
                </h2>
                <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '32px' }}>
                    Analyzing proof-of-work profiles across the NEXORA network
                </p>
                <div style={{ display: 'flex', gap: '8px' }}>
                    {[0, 1, 2, 3, 4].map(i => (
                        <div key={i} style={{
                            width: '8px', height: '8px', borderRadius: '50%',
                            background: '#2563eb', opacity: 0.3,
                            animation: `shimmer 1.5s ease ${i * 0.2}s infinite`,
                        }} />
                    ))}
                </div>
                <div style={{ marginTop: '32px', display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '300px' }}>
                    {['Scanning skill requirements...', 'Analyzing proof-of-work data...', 'Computing match scores...'].map((text, i) => (
                        <div key={i} style={{
                            display: 'flex', alignItems: 'center', gap: '10px',
                            fontSize: '13px', color: '#64748b',
                            animation: `fadeIn 0.3s ease ${i * 0.4}s both`,
                        }}>
                            <CheckCircle size={14} color="#10b981" />
                            {text}
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (step === 'results') {
        return (
            <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 24px', fontFamily: 'Inter, sans-serif' }}>
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '10px',
                        background: '#f0fdf4', border: '1px solid #bbf7d0',
                        borderRadius: '999px', padding: '8px 20px', marginBottom: '16px',
                    }}>
                        <CheckCircle size={16} color="#10b981" />
                        <span style={{ fontSize: '14px', fontWeight: 700, color: '#059669' }}>AI matching complete!</span>
                    </div>
                    <h1 style={{ fontSize: '28px', fontWeight: 900, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '8px' }}>
                        24 recommended builders found
                    </h1>
                    <p style={{ fontSize: '15px', color: '#64748b' }}>
                        Best builders for: <strong>AI-powered Customer Research Platform</strong>
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {mockCompanyTalent.map((talent, i) => (
                        <div key={talent.id} style={{
                            background: 'white', borderRadius: '16px',
                            border: i === 0 ? '2px solid #10b981' : '1px solid #e2e8f0',
                            padding: '24px', display: 'flex', gap: '16px', alignItems: 'center',
                            boxShadow: i === 0 ? '0 4px 20px rgba(16,185,129,0.1)' : '0 1px 4px rgba(0,0,0,0.04)',
                            position: 'relative',
                        }}>
                            {i === 0 && (
                                <div style={{
                                    position: 'absolute', top: '-12px', left: '24px',
                                    background: '#10b981', color: 'white', padding: '4px 12px',
                                    borderRadius: '999px', fontSize: '11px', fontWeight: 700,
                                }}>🏆 #1 Best Match</div>
                            )}
                            <div style={{
                                width: '32px', height: '32px', borderRadius: '50%',
                                background: i === 0 ? '#10b981' : '#e2e8f0',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontWeight: 800, fontSize: '13px', color: i === 0 ? 'white' : '#64748b',
                                flexShrink: 0, fontFamily: 'Plus Jakarta Sans',
                            }}>
                                {i + 1}
                            </div>
                            <Avatar initials={talent.avatar} size={52} />
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '4px' }}>
                                    {talent.name}
                                    {!talent.available && <span style={{ fontSize: '11px', color: '#ef4444', fontWeight: 600, marginLeft: '8px' }}>● Busy</span>}
                                    {talent.available && <span style={{ fontSize: '11px', color: '#10b981', fontWeight: 600, marginLeft: '8px' }}>● Available</span>}
                                </div>
                                <div style={{ fontSize: '13px', color: '#64748b', marginBottom: '10px' }}>
                                    {talent.university} · Proof Score: <strong style={{ color: '#0f172a' }}>{talent.proofScore}</strong>
                                </div>
                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '10px' }}>
                                    {talent.skills.map(s => <SkillBadge key={s} skill={s} />)}
                                </div>
                                <div style={{ fontSize: '12px', color: '#64748b' }}>
                                    Relevant Project: <span style={{ fontWeight: 600, color: '#0f172a' }}>"{talent.project}"</span>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                                <div style={{
                                    padding: '8px 16px', borderRadius: '999px',
                                    background: talent.matchScore >= 94 ? '#d1fae5' : '#eff6ff',
                                    color: talent.matchScore >= 94 ? '#059669' : '#2563eb',
                                    fontSize: '16px', fontWeight: 900, fontFamily: 'Plus Jakarta Sans',
                                }}>
                                    {talent.matchScore}% Match
                                </div>
                                <button
                                    onClick={() => showToast(`${talent.name} shortlisted!`)}
                                    className="btn-primary"
                                    style={{ padding: '9px 18px', fontSize: '13px' }}
                                >
                                    Shortlist
                                </button>
                                <button
                                    onClick={() => showToast('Invite sent!')}
                                    className="btn-ghost"
                                    style={{ padding: '7px 18px', fontSize: '12px' }}
                                >
                                    Invite Direct
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '24px' }}>
                    <button
                        onClick={() => onNavigate('company-talent')}
                        className="btn-secondary"
                        style={{ padding: '12px 28px', fontSize: '14px' }}
                    >
                        View All 24 Builders <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '32px 24px', fontFamily: 'Inter, sans-serif' }}>
            <div style={{ marginBottom: '28px' }}>
                <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '6px' }}>
                    Post a Real-World Problem
                </h1>
                <p style={{ fontSize: '14px', color: '#64748b' }}>
                    Describe your challenge and AI will match you with the best builders in the network.
                </p>
            </div>

            <div style={{
                background: 'white', borderRadius: '16px',
                border: '1px solid #e2e8f0', padding: '32px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {/* Title */}
                    <div>
                        <label style={{ fontSize: '13px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '8px' }}>
                            Problem Title *
                        </label>
                        <input
                            defaultValue="AI-Powered Customer Research Platform"
                            style={{
                                width: '100%', padding: '12px 16px', borderRadius: '10px',
                                border: '1.5px solid #e2e8f0', fontSize: '14px', fontFamily: 'Inter',
                                outline: 'none', boxSizing: 'border-box',
                            }}
                            onFocus={e => e.target.style.borderColor = '#2563eb'}
                            onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label style={{ fontSize: '13px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '8px' }}>
                            Problem Description *
                        </label>
                        <textarea
                            defaultValue="We are trying to understand why users abandon our onboarding flow. We need a team to design a research framework, collect data through interviews and surveys, analyze it, and present actionable insights through a dashboard."
                            rows={5}
                            style={{
                                width: '100%', padding: '12px 16px', borderRadius: '10px',
                                border: '1.5px solid #e2e8f0', fontSize: '14px', fontFamily: 'Inter',
                                outline: 'none', resize: 'vertical', boxSizing: 'border-box', lineHeight: 1.7,
                            }}
                            onFocus={e => e.target.style.borderColor = '#2563eb'}
                            onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                        />
                    </div>

                    {/* Required Skills */}
                    <div>
                        <label style={{ fontSize: '13px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '8px' }}>
                            Required Skills
                        </label>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {skillOptions.map(skill => {
                                const selected = selectedSkills.includes(skill);
                                return (
                                    <button
                                        key={skill}
                                        onClick={() => toggleSkill(skill)}
                                        style={{
                                            padding: '7px 14px', borderRadius: '999px', fontSize: '12px', fontWeight: 600,
                                            border: selected ? '1.5px solid #2563eb' : '1.5px solid #e2e8f0',
                                            background: selected ? '#eff6ff' : 'white',
                                            color: selected ? '#2563eb' : '#64748b',
                                            cursor: 'pointer', fontFamily: 'Inter', transition: 'all 0.15s ease',
                                        }}
                                    >
                                        {selected ? '✓ ' : ''}{skill}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Domain + Duration + Team */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
                        <div>
                            <label style={{ fontSize: '13px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '8px' }}>Domain</label>
                            <select style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1.5px solid #e2e8f0', fontSize: '13px', fontFamily: 'Inter', outline: 'none', background: 'white' }}>
                                {domainOptions.map(d => <option key={d}>{d}</option>)}
                            </select>
                        </div>
                        <div>
                            <label style={{ fontSize: '13px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '8px' }}>Duration</label>
                            <select defaultValue="2 weeks" style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1.5px solid #e2e8f0', fontSize: '13px', fontFamily: 'Inter', outline: 'none', background: 'white' }}>
                                {['1 week', '2 weeks', '4 weeks', '6 weeks', '3 months'].map(d => <option key={d}>{d}</option>)}
                            </select>
                        </div>
                        <div>
                            <label style={{ fontSize: '13px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '8px' }}>Team Size</label>
                            <select defaultValue="4" style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1.5px solid #e2e8f0', fontSize: '13px', fontFamily: 'Inter', outline: 'none', background: 'white' }}>
                                {['1', '2', '3', '4', '5', '6+'].map(d => <option key={d}>{d}</option>)}
                            </select>
                        </div>
                    </div>

                    {/* Reward + Expected Outcome */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div>
                            <label style={{ fontSize: '13px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '8px' }}>Reward / Stipend</label>
                            <input defaultValue="₹15,000 + Certificate" style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1.5px solid #e2e8f0', fontSize: '13px', fontFamily: 'Inter', outline: 'none', boxSizing: 'border-box' }} />
                        </div>
                        <div>
                            <label style={{ fontSize: '13px', fontWeight: 700, color: '#374151', display: 'block', marginBottom: '8px' }}>Expected Outcome</label>
                            <input defaultValue="Insight dashboard + report" style={{ width: '100%', padding: '11px 14px', borderRadius: '10px', border: '1.5px solid #e2e8f0', fontSize: '13px', fontFamily: 'Inter', outline: 'none', boxSizing: 'border-box' }} />
                        </div>
                    </div>

                    {/* Toggles */}
                    <div style={{ display: 'flex', gap: '24px' }}>
                        {[
                            { label: 'Mentor Required?', defaultOn: true },
                            { label: 'Hiring Opportunity?', defaultOn: true },
                        ].map(toggle => (
                            <div key={toggle.label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{
                                    width: '40px', height: '22px', borderRadius: '999px',
                                    background: toggle.defaultOn ? '#2563eb' : '#e2e8f0',
                                    position: 'relative', cursor: 'pointer', transition: 'all 0.2s ease',
                                }}>
                                    <div style={{
                                        position: 'absolute', top: '3px', left: toggle.defaultOn ? '21px' : '3px',
                                        width: '16px', height: '16px', borderRadius: '50%',
                                        background: 'white', transition: 'all 0.2s ease',
                                        boxShadow: '0 1px 4px rgba(0,0,0,0.2)',
                                    }} />
                                </div>
                                <span style={{ fontSize: '13px', fontWeight: 500, color: '#374151' }}>{toggle.label}</span>
                            </div>
                        ))}
                    </div>

                    <button onClick={handleFindBuilders} className="btn-primary" style={{ padding: '16px', fontSize: '16px', borderRadius: '12px' }}>
                        <Zap size={18} />
                        Find the Right Builders
                    </button>
                </div>
            </div>
        </div>
    );
}

import { Calendar, ExternalLink, MapPin, Globe } from 'lucide-react';
import { mockStudent, mockSkills, mockProjects, mockAchievements } from '../data/mockData';
import { ProofScoreRing, SkillBadge, Avatar } from '../components/UIComponents';

interface ProfilePageProps {
    showToast: (msg: string) => void;
    updatedScore?: number;
}

export default function ProfilePage({ showToast, updatedScore }: ProfilePageProps) {
    const proofScore = updatedScore || mockStudent.proofScore;

    return (
        <div style={{ maxWidth: '960px', margin: '0 auto', padding: '32px 24px', fontFamily: 'Inter, sans-serif' }}>
            {/* Profile Header */}
            <div style={{
                background: 'linear-gradient(135deg, #0a1628 0%, #162b57 100%)',
                borderRadius: '20px', overflow: 'hidden', marginBottom: '24px',
                boxShadow: '0 8px 40px rgba(10,22,40,0.2)',
            }}>
                <div style={{ padding: '40px', display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
                    <div style={{
                        width: '96px', height: '96px', borderRadius: '50%',
                        background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '32px', fontWeight: 800, color: 'white',
                        border: '4px solid rgba(255,255,255,0.15)', flexShrink: 0,
                        fontFamily: 'Plus Jakarta Sans',
                    }}>AS</div>
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '6px', flexWrap: 'wrap' }}>
                            <h1 style={{ fontSize: '28px', fontWeight: 800, color: 'white', fontFamily: 'Plus Jakarta Sans', margin: 0 }}>
                                {mockStudent.name}
                            </h1>
                            {mockStudent.openToOpportunities && (
                                <span style={{
                                    padding: '4px 12px', borderRadius: '999px',
                                    background: 'rgba(16,185,129,0.2)', color: '#34d399',
                                    fontSize: '11px', fontWeight: 700, border: '1px solid rgba(16,185,129,0.3)',
                                }}>● Open to Opportunities</span>
                            )}
                        </div>
                        <div style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '8px' }}>
                            {mockStudent.degree} · {mockStudent.year} · {mockStudent.university}
                        </div>
                        <div style={{ color: '#60a5fa', fontSize: '14px', fontStyle: 'italic', marginBottom: '16px' }}>
                            "{mockStudent.bio}"
                        </div>
                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94a3b8', fontSize: '13px' }}>
                                <MapPin size={13} /> {mockStudent.location}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94a3b8', fontSize: '13px' }}>
                                <Calendar size={13} /> Class of {mockStudent.graduationYear}
                            </div>
                            <button
                                onClick={() => showToast('GitHub profile opened!')}
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '6px',
                                    color: '#60a5fa', fontSize: '13px', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Inter',
                                }}>
                                <Globe size={13} /> github.com/aarav-sharma
                            </button>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
                        <ProofScoreRing score={proofScore} size={120} />
                        {updatedScore && (
                            <span style={{
                                fontSize: '11px', fontWeight: 700, color: '#10b981',
                                background: 'rgba(16,185,129,0.15)', padding: '3px 10px', borderRadius: '999px',
                                border: '1px solid rgba(16,185,129,0.3)',
                            }}>↑ Updated!</span>
                        )}
                    </div>
                </div>

                {/* Stats row */}
                <div style={{
                    display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                }}>
                    {[
                        { value: mockStudent.stats.projects, label: 'Projects' },
                        { value: mockStudent.stats.challenges, label: 'Challenges' },
                        { value: mockStudent.stats.hackathons, label: 'Hackathons' },
                        { value: mockStudent.stats.skills, label: 'Skills' },
                        { value: mockStudent.stats.collaborations, label: 'Collaborations' },
                    ].map((stat, i) => (
                        <div key={stat.label} style={{
                            padding: '20px', textAlign: 'center',
                            borderRight: i < 4 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                        }}>
                            <div style={{ fontSize: '26px', fontWeight: 800, color: 'white', fontFamily: 'Plus Jakarta Sans' }}>{stat.value}</div>
                            <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px', fontWeight: 500 }}>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '24px' }}>
                {/* LEFT */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {/* Featured Projects */}
                    <div style={{
                        background: 'white', borderRadius: '16px',
                        border: '1px solid #e2e8f0', padding: '24px',
                    }}>
                        <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '20px' }}>
                            Featured Projects
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {mockProjects.map(proj => (
                                <div
                                    key={proj.id}
                                    style={{
                                        border: '1px solid #e2e8f0', borderRadius: '14px',
                                        padding: '20px', transition: 'all 0.2s ease',
                                        cursor: 'pointer',
                                    }}
                                    onMouseEnter={e => {
                                        (e.currentTarget as HTMLElement).style.borderColor = '#bfdbfe';
                                        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(37,99,235,0.08)';
                                    }}
                                    onMouseLeave={e => {
                                        (e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0';
                                        (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                                        <div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                                                <span style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>{proj.title}</span>
                                                {proj.verified && (
                                                    <span style={{
                                                        padding: '2px 8px', borderRadius: '999px',
                                                        background: '#d1fae5', color: '#059669', fontSize: '10px', fontWeight: 700,
                                                    }}>✓ Verified</span>
                                                )}
                                            </div>
                                            <div style={{ fontSize: '12px', color: '#64748b' }}>Role: {proj.role}</div>
                                        </div>
                                    </div>
                                    <p style={{ fontSize: '13px', color: '#475569', lineHeight: 1.6, marginBottom: '12px' }}>{proj.description}</p>
                                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
                                        {proj.tags.map(t => <SkillBadge key={t} skill={t} />)}
                                    </div>
                                    <div style={{
                                        padding: '10px 14px', borderRadius: '8px',
                                        background: '#f0fdf4', border: '1px solid #bbf7d0',
                                        fontSize: '13px', fontWeight: 600, color: '#059669', marginBottom: '12px',
                                    }}>
                                        📊 {proj.result}
                                    </div>
                                    <div style={{ display: 'flex', gap: '10px' }}>
                                        {proj.github && (
                                            <button onClick={() => showToast('Opening GitHub...')} style={{
                                                display: 'flex', alignItems: 'center', gap: '6px',
                                                padding: '6px 12px', borderRadius: '8px',
                                                border: '1px solid #e2e8f0', background: 'white',
                                                fontSize: '12px', fontWeight: 600, color: '#64748b', cursor: 'pointer', fontFamily: 'Inter',
                                            }}>
                                                <Globe size={13} /> GitHub
                                            </button>
                                        )}
                                        {proj.demo && (
                                            <button onClick={() => showToast('Opening Demo...')} style={{
                                                display: 'flex', alignItems: 'center', gap: '6px',
                                                padding: '6px 12px', borderRadius: '8px',
                                                border: '1px solid #bfdbfe', background: '#eff6ff',
                                                fontSize: '12px', fontWeight: 600, color: '#2563eb', cursor: 'pointer', fontFamily: 'Inter',
                                            }}>
                                                <ExternalLink size={13} /> Demo
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Achievements */}
                    <div style={{
                        background: 'white', borderRadius: '16px',
                        border: '1px solid #e2e8f0', padding: '24px',
                    }}>
                        <h2 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '20px' }}>
                            Achievements
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {mockAchievements.map((ach, i) => {
                                const typeIcons = { competition: '🏆', hackathon: '⚡', certification: '📜', achievement: '⭐' } as Record<string, string>;
                                const typeColors = { competition: '#fef3c7', hackathon: '#eff6ff', certification: '#f5f3ff', achievement: '#f0fdf4' } as Record<string, string>;
                                return (
                                    <div key={i} style={{
                                        display: 'flex', gap: '14px', alignItems: 'center',
                                        padding: '14px', borderRadius: '10px', background: '#f8fafc',
                                        border: '1px solid #e2e8f0',
                                    }}>
                                        <div style={{
                                            width: '40px', height: '40px', borderRadius: '10px',
                                            background: typeColors[ach.type],
                                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0,
                                        }}>
                                            {typeIcons[ach.type]}
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>{ach.title}</div>
                                            <div style={{ fontSize: '12px', color: '#94a3b8' }}>{ach.org} · {ach.year}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {/* Skills */}
                    <div style={{
                        background: 'white', borderRadius: '16px',
                        border: '1px solid #e2e8f0', padding: '24px',
                    }}>
                        <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '20px' }}>
                            Skills & Proficiency
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            {mockSkills.map(skill => {
                                const colors = { Advanced: '#10b981', Intermediate: '#2563eb', Beginner: '#f59e0b' } as Record<string, string>;
                                return (
                                    <div key={skill.name}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                                            <span style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a' }}>{skill.name}</span>
                                            <span style={{
                                                fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '999px',
                                                background: `${colors[skill.level]}20`, color: colors[skill.level],
                                            }}>{skill.level}</span>
                                        </div>
                                        <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
                                            <div style={{
                                                height: '100%', width: `${skill.percent}%`,
                                                background: colors[skill.level], borderRadius: '999px',
                                                transition: 'width 1s ease',
                                            }} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Career Goal */}
                    <div style={{
                        background: 'linear-gradient(135deg, #f8fbff, #f5f3ff)',
                        borderRadius: '16px', border: '1px solid #e2e8f0', padding: '24px',
                    }}>
                        <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '12px' }}>
                            Career Goal
                        </h2>
                        <p style={{ fontSize: '14px', color: '#475569', lineHeight: 1.7, fontStyle: 'italic' }}>
                            "{mockStudent.careerGoal}"
                        </p>
                    </div>

                    {/* Collaboration History */}
                    <div style={{
                        background: 'white', borderRadius: '16px',
                        border: '1px solid #e2e8f0', padding: '24px',
                    }}>
                        <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '16px' }}>
                            Collaboration History
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[
                                { name: 'Priya Nair', project: 'AI Research', avatar: 'PN', uni: 'BITS Pilani' },
                                { name: 'Rohan Mehta', project: 'FinSight App', avatar: 'RM', uni: 'IIT Delhi' },
                                { name: 'Meera Kapoor', project: 'Robotics Challenge', avatar: 'MK', uni: 'VIT' },
                            ].map(collab => (
                                <div key={collab.name} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <Avatar initials={collab.avatar} size={36} />
                                    <div>
                                        <div style={{ fontSize: '13px', fontWeight: 600, color: '#0f172a' }}>{collab.name}</div>
                                        <div style={{ fontSize: '11px', color: '#94a3b8' }}>{collab.project} · {collab.uni}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

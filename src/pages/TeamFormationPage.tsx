import { useState } from 'react';
import { UserPlus, Check } from 'lucide-react';
import { mockTeamMembers } from '../data/mockData';
import { MatchRing, SkillBadge, Avatar } from '../components/UIComponents';

interface TeamFormationProps {
    onNavigate: (page: string) => void;
    showToast: (msg: string) => void;
}

export default function TeamFormationPage({ onNavigate, showToast }: TeamFormationProps) {
    const [invited, setInvited] = useState<string[]>([]);

    const invite = (id: string, name: string) => {
        setInvited(prev => [...prev, id]);
        showToast(`Invitation sent to ${name}!`);
    };

    return (
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 24px', fontFamily: 'Inter, sans-serif' }}>
            <div style={{ marginBottom: '28px' }}>
                <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '6px' }}>
                    Team Formation
                </h1>
                <p style={{ fontSize: '14px', color: '#64748b' }}>AI-recommended builders for your project</p>
            </div>

            {/* Project */}
            <div style={{
                background: 'linear-gradient(135deg, #0a1628, #162b57)',
                borderRadius: '16px', padding: '24px', marginBottom: '24px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
                <div>
                    <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: '#94a3b8', marginBottom: '6px' }}>CURRENT PROJECT</div>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: 'white', fontFamily: 'Plus Jakarta Sans', marginBottom: '4px' }}>
                        Smart Retail Analytics
                    </div>
                    <div style={{ fontSize: '13px', color: '#94a3b8' }}>Nova Labs · 3 weeks · ₹20,000 + Hiring Opportunity</div>
                </div>
                <button onClick={() => onNavigate('workspace')} className="btn-primary" style={{ padding: '10px 20px', fontSize: '13px' }}>
                    View Workspace
                </button>
            </div>

            {/* Current Team */}
            <div style={{
                background: 'white', borderRadius: '16px',
                border: '1px solid #e2e8f0', padding: '24px', marginBottom: '24px',
            }}>
                <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '16px' }}>
                    Current Team (3/4)
                </h2>
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                    {[
                        { name: 'Aarav Sharma', role: 'Backend', avatar: 'AS', you: true },
                        { name: 'Priya Nair', role: 'Product', avatar: 'PN', you: false },
                        { name: 'Rohan Mehta', role: 'Data Analyst', avatar: 'RM', you: false },
                    ].map(member => (
                        <div key={member.name} style={{
                            display: 'flex', gap: '12px', alignItems: 'center',
                            padding: '14px 18px', borderRadius: '12px',
                            border: `2px solid ${member.you ? '#2563eb' : '#e2e8f0'}`,
                            background: member.you ? '#eff6ff' : '#f8fafc',
                            minWidth: '160px',
                        }}>
                            <Avatar initials={member.avatar} size={36} />
                            <div>
                                <div style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a' }}>
                                    {member.name} {member.you && <span style={{ fontSize: '10px', color: '#2563eb', fontWeight: 700 }}>(You)</span>}
                                </div>
                                <div style={{ fontSize: '11px', color: '#64748b' }}>{member.role}</div>
                            </div>
                        </div>
                    ))}

                    {/* Empty slot */}
                    <div style={{
                        display: 'flex', gap: '12px', alignItems: 'center',
                        padding: '14px 18px', borderRadius: '12px',
                        border: '2px dashed #fbbf24', background: '#fffbeb',
                        minWidth: '160px',
                    }}>
                        <div style={{
                            width: '36px', height: '36px', borderRadius: '50%',
                            background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '16px',
                        }}>?</div>
                        <div>
                            <div style={{ fontSize: '14px', fontWeight: 600, color: '#92400e' }}>Frontend Dev</div>
                            <div style={{ fontSize: '11px', color: '#d97706', fontWeight: 600 }}>Slot Open</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* AI Recommendations */}
            <div style={{
                background: 'white', borderRadius: '16px',
                border: '1px solid #e2e8f0', padding: '24px',
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div>
                        <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '4px' }}>
                            🤖 AI Recommended Builders
                        </h2>
                        <p style={{ fontSize: '13px', color: '#64748b' }}>
                            3 builders in the network match the <strong>Frontend Developer</strong> role.
                        </p>
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {mockTeamMembers.map((member, i) => (
                        <div key={member.id} style={{
                            border: '1px solid #e2e8f0', borderRadius: '14px',
                            padding: '20px', display: 'flex', gap: '16px',
                            alignItems: 'center', transition: 'all 0.2s ease',
                            background: '#fafafa',
                        }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLElement).style.borderColor = '#bfdbfe';
                                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)';
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0';
                                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                                (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                            }}
                        >
                            <div style={{ position: 'relative' }}>
                                <Avatar initials={member.avatar} size={52} />
                                {!member.available && (
                                    <div style={{
                                        position: 'absolute', bottom: -2, right: -2,
                                        width: '16px', height: '16px', borderRadius: '50%',
                                        background: '#ef4444', border: '2px solid white',
                                    }} />
                                )}
                                {member.available && (
                                    <div style={{
                                        position: 'absolute', bottom: -2, right: -2,
                                        width: '16px', height: '16px', borderRadius: '50%',
                                        background: '#10b981', border: '2px solid white',
                                    }} />
                                )}
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                                    <span style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>{member.name}</span>
                                    {i === 0 && (
                                        <span style={{
                                            padding: '2px 8px', borderRadius: '999px', fontSize: '10px', fontWeight: 700,
                                            background: '#fef3c7', color: '#d97706',
                                        }}>⭐ Top Pick</span>
                                    )}
                                </div>
                                <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '10px' }}>
                                    {member.role} · {member.university}
                                    <span style={{ color: member.available ? '#10b981' : '#ef4444', fontWeight: 600, marginLeft: '8px' }}>
                                        ● {member.available ? 'Available' : 'Busy'}
                                    </span>
                                </div>
                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '10px' }}>
                                    {member.skills.map(s => <SkillBadge key={s} skill={s} />)}
                                </div>
                                <div style={{ display: 'flex', gap: '16px' }}>
                                    <div style={{ fontSize: '12px', color: '#64748b' }}>
                                        Proof Score: <span style={{ fontWeight: 700, color: '#0f172a' }}>{member.proofScore}</span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                                <MatchRing score={member.matchScore} size={60} fontSize={15} />
                                {invited.includes(member.id) ? (
                                    <div style={{
                                        display: 'flex', alignItems: 'center', gap: '6px',
                                        padding: '8px 18px', borderRadius: '10px',
                                        background: '#f0fdf4', border: '1px solid #bbf7d0',
                                        fontSize: '13px', fontWeight: 600, color: '#059669',
                                    }}>
                                        <Check size={14} /> Invited
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => invite(member.id, member.name)}
                                        className="btn-primary"
                                        style={{ padding: '8px 18px', fontSize: '13px' }}
                                        disabled={!member.available}
                                    >
                                        <UserPlus size={14} />
                                        Invite
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

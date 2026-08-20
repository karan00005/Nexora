import { Star, MessageCircle } from 'lucide-react';
import { mockMentors } from '../data/mockData';
import { SkillBadge, Avatar } from '../components/UIComponents';

interface MentorsPageProps {
    showToast: (msg: string) => void;
}

export default function MentorsPage({ showToast }: MentorsPageProps) {
    return (
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '32px 24px', fontFamily: 'Inter, sans-serif' }}>
            <div style={{ marginBottom: '28px' }}>
                <h1 style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '6px' }}>
                    🧑‍🏫 Find a Mentor
                </h1>
                <p style={{ color: '#64748b', fontSize: '14px' }}>Personalized mentors matched to your goals and interests</p>
            </div>

            {/* AI Recommended Banner */}
            <div style={{
                background: 'linear-gradient(135deg, #f8fbff, #f0f4ff)',
                borderRadius: '14px', border: '1px solid #bfdbfe',
                padding: '18px 24px', marginBottom: '24px',
                display: 'flex', alignItems: 'center', gap: '14px',
            }}>
                <div style={{ fontSize: '28px' }}>🤖</div>
                <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#1e40af' }}>AI-Recommended Mentors</div>
                    <div style={{ fontSize: '13px', color: '#64748b' }}>
                        Based on your career goal: "Work on AI + hardware products and join an early-stage startup"
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {mockMentors.map((mentor, i) => (
                    <div key={mentor.id} style={{
                        background: 'white', borderRadius: '16px',
                        border: i === 0 ? '2px solid #2563eb' : '1px solid #e2e8f0',
                        padding: '28px', transition: 'all 0.2s ease', position: 'relative', overflow: 'hidden',
                    }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(0,0,0,0.08)'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                    >
                        {i === 0 && (
                            <div style={{
                                position: 'absolute', top: '16px', right: '16px',
                                padding: '3px 10px', borderRadius: '999px',
                                background: '#eff6ff', color: '#2563eb', fontSize: '11px', fontWeight: 700,
                                border: '1px solid #bfdbfe',
                            }}>⭐ Top Pick</div>
                        )}

                        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                            <div style={{ position: 'relative' }}>
                                <Avatar initials={mentor.avatar} size={72} />
                                <div style={{
                                    position: 'absolute', bottom: 0, right: 0,
                                    width: '20px', height: '20px', borderRadius: '50%',
                                    background: '#10b981', border: '3px solid white',
                                }} />
                            </div>

                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px', flexWrap: 'wrap', gap: '8px' }}>
                                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', margin: 0 }}>
                                        {mentor.name}
                                    </h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#f59e0b', fontWeight: 700, fontSize: '14px' }}>
                                        <Star size={14} fill="#f59e0b" /> {mentor.rating}
                                    </div>
                                </div>

                                <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '8px' }}>
                                    {mentor.role} · {mentor.company} · {mentor.experience} experience
                                </div>

                                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
                                    {mentor.skills.map(s => <SkillBadge key={s} skill={s} />)}
                                </div>

                                <div style={{
                                    padding: '12px 14px', borderRadius: '10px',
                                    background: '#f0fdf4', border: '1px solid #bbf7d0',
                                    fontSize: '13px', color: '#065f46', marginBottom: '14px',
                                }}>
                                    <span style={{ fontWeight: 700 }}>🎯 Why you match ({mentor.relevance}% relevant): </span>
                                    {mentor.reason}
                                </div>

                                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                                    <div style={{ fontSize: '12px', color: '#64748b' }}>
                                        <span style={{ fontWeight: 700, color: '#0f172a' }}>{mentor.sessions}</span> sessions completed
                                    </div>
                                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#e2e8f0' }} />
                                    <div style={{ fontSize: '12px', color: '#10b981', fontWeight: 600 }}>● Available</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                            <button
                                onClick={() => showToast(`Mentorship request sent to ${mentor.name}!`)}
                                className="btn-primary"
                                style={{ flex: 1, padding: '11px' }}
                            >
                                Request Mentorship
                            </button>
                            <button
                                onClick={() => showToast('Message sent!')}
                                className="btn-ghost"
                                style={{ padding: '11px 20px' }}
                            >
                                <MessageCircle size={15} /> Message
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

import { useState } from 'react';
import { CheckCircle, Circle, Plus } from 'lucide-react';
import { mockWorkspaceTasks } from '../data/mockData';
import { Avatar } from '../components/UIComponents';

interface WorkspacePageProps {
    onNavigate: (page: string) => void;
    showToast: (msg: string) => void;
    onProjectComplete: () => void;
}

export default function WorkspacePage({ showToast, onProjectComplete }: WorkspacePageProps) {
    const [tasks, setTasks] = useState(mockWorkspaceTasks);
    const [activeSection, setActiveSection] = useState('Tasks');
    const [completed, setCompleted] = useState(false);

    const toggleTask = (id: number) => {
        setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));
    };

    const doneCount = tasks.filter(t => t.done).length;
    const progress = Math.round((doneCount / tasks.length) * 100);

    const handleCompleteProject = () => {
        setCompleted(true);
        showToast('Project marked complete! Adding to proof-of-work...');
        setTimeout(() => onProjectComplete(), 1500);
    };

    const sections = ['Overview', 'Tasks', 'Team', 'Files', 'Milestones', 'Updates'];

    return (
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '32px 24px', fontFamily: 'Inter, sans-serif' }}>
            {/* Header */}
            <div style={{
                background: 'linear-gradient(135deg, #0a1628, #162b57)',
                borderRadius: '16px', padding: '28px', marginBottom: '24px',
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', color: '#94a3b8', marginBottom: '8px' }}>
                            PROJECT WORKSPACE
                        </div>
                        <h1 style={{ fontSize: '22px', fontWeight: 800, color: 'white', fontFamily: 'Plus Jakarta Sans', marginBottom: '4px' }}>
                            AI Customer Research Platform
                        </h1>
                        <div style={{ fontSize: '13px', color: '#94a3b8' }}>Nova Labs · 2 weeks · ₹15,000 + Certificate</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '32px', fontWeight: 900, color: '#10b981', fontFamily: 'Plus Jakarta Sans', lineHeight: 1 }}>
                            {progress}%
                        </div>
                        <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 600 }}>Complete</div>
                    </div>
                </div>

                <div style={{ marginTop: '16px' }}>
                    <div style={{ height: '8px', background: 'rgba(255,255,255,0.1)', borderRadius: '999px', overflow: 'hidden' }}>
                        <div style={{
                            height: '100%', width: `${progress}%`,
                            background: 'linear-gradient(90deg, #10b981, #34d399)',
                            borderRadius: '999px', transition: 'width 0.5s ease',
                        }} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
                        <span style={{ fontSize: '12px', color: '#94a3b8' }}>{doneCount} of {tasks.length} tasks completed</span>
                        <span style={{ fontSize: '12px', color: '#94a3b8' }}>5 days remaining</span>
                    </div>
                </div>
            </div>

            {/* Section tabs */}
            <div style={{
                display: 'flex', gap: '4px', marginBottom: '24px',
                background: '#050505', borderRadius: '10px', padding: '4px',
                border: '1px solid rgba(255,255,255,0.05)',
            }}>
                {sections.map(s => (
                    <button key={s} onClick={() => setActiveSection(s)} style={{
                        padding: '8px 14px', borderRadius: '8px', border: 'none',
                        background: activeSection === s ? 'white' : 'transparent',
                        color: activeSection === s ? '#0f172a' : '#64748b',
                        fontSize: '13px', fontWeight: activeSection === s ? 700 : 500,
                        cursor: 'pointer', boxShadow: activeSection === s ? '0 1px 4px rgba(0,0,0,0.08)' : 'none',
                        fontFamily: 'Inter',
                    }}>
                        {s}
                    </button>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '24px' }}>
                <div>
                    {/* Tasks */}
                    {activeSection === 'Tasks' && (
                        <div style={{
                            background: 'rgba(20,20,25,0.8)', borderRadius: '16px',
                            border: '1px solid rgba(255,255,255,0.05)', padding: '24px',
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                <h2 style={{ fontSize: '16px', fontWeight: 700, color: 'white', fontFamily: 'Plus Jakarta Sans' }}>
                                    Task List
                                </h2>
                                <button style={{
                                    display: 'flex', alignItems: 'center', gap: '6px',
                                    padding: '7px 14px', borderRadius: '8px',
                                    border: '1px solid rgba(255,255,255,0.05)', background: '#050505',
                                    fontSize: '12px', fontWeight: 600, color: '#9ca3af', cursor: 'pointer', fontFamily: 'Inter',
                                }}>
                                    <Plus size={13} /> Add Task
                                </button>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                {tasks.map(task => (
                                    <div
                                        key={task.id}
                                        onClick={() => toggleTask(task.id)}
                                        style={{
                                            display: 'flex', alignItems: 'center', gap: '12px',
                                            padding: '14px', borderRadius: '10px',
                                            background: task.done ? '#f0fdf4' : '#f8fafc',
                                            border: `1px solid ${task.done ? '#bbf7d0' : '#e2e8f0'}`,
                                            cursor: 'pointer', transition: 'all 0.2s ease',
                                        }}
                                        onMouseEnter={e => { if (!task.done) (e.currentTarget as HTMLElement).style.background = '#eff6ff'; }}
                                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = task.done ? '#f0fdf4' : '#f8fafc'; }}
                                    >
                                        {task.done ? (
                                            <CheckCircle size={20} color="#10b981" fill="#d1fae5" />
                                        ) : (
                                            <Circle size={20} color="#d1d5db" />
                                        )}
                                        <span style={{
                                            fontSize: '14px', fontWeight: task.done ? 400 : 500,
                                            color: task.done ? '#64748b' : '#0f172a',
                                            textDecoration: task.done ? 'line-through' : 'none',
                                            flex: 1,
                                        }}>
                                            {task.text}
                                        </span>
                                        {task.done && (
                                            <span style={{ fontSize: '11px', fontWeight: 600, color: '#059669' }}>Done</span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {!completed && doneCount === tasks.length && (
                                <div style={{ marginTop: '20px', padding: '20px', background: 'linear-gradient(135deg, #f0fdf4, #d1fae5)', borderRadius: '12px', border: '1px solid #10b981', textAlign: 'center' }}>
                                    <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎉</div>
                                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#065f46', marginBottom: '12px' }}>All tasks completed!</div>
                                    <button onClick={handleCompleteProject} className="btn-primary" style={{ background: '#10b981' }}>
                                        Complete Project & Add to Proof-of-Work
                                    </button>
                                </div>
                            )}

                            {!completed && doneCount < tasks.length && (
                                <button
                                    onClick={handleCompleteProject}
                                    style={{
                                        marginTop: '20px', width: '100%', padding: '12px',
                                        background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '10px',
                                        color: '#059669', fontWeight: 700, fontSize: '14px', cursor: 'pointer', fontFamily: 'Inter',
                                    }}
                                >
                                    Mark Project Complete →
                                </button>
                            )}
                        </div>
                    )}

                    {/* Overview */}
                    {activeSection === 'Overview' && (
                        <div style={{ background: 'rgba(20,20,25,0.8)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', padding: '24px' }}>
                            <h2 style={{ fontSize: '16px', fontWeight: 700, color: 'white', fontFamily: 'Plus Jakarta Sans', marginBottom: '16px' }}>Project Overview</h2>
                            <p style={{ fontSize: '14px', color: '#d1d5db', lineHeight: 1.8, marginBottom: '20px' }}>
                                Building an AI-powered customer research platform to analyze why users abandon the onboarding flow.
                                The team will design research methodology, collect data via surveys and interviews, build an analysis pipeline, and deliver an insights dashboard.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px' }}>
                                {[
                                    { label: 'Status', value: 'In Progress', color: '#a78bfa' },
                                    { label: 'Phase', value: 'Data Collection', color: '#7c3aed' },
                                    { label: 'Deadline', value: '5 days left', color: '#ef4444' },
                                ].map(item => (
                                    <div key={item.label} style={{ padding: '16px', borderRadius: '10px', background: '#050505', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                                        <div style={{ fontSize: '13px', fontWeight: 700, color: item.color }}>{item.value}</div>
                                        <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>{item.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Milestones */}
                    {activeSection === 'Milestones' && (
                        <div style={{ background: 'rgba(20,20,25,0.8)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', padding: '24px' }}>
                            <h2 style={{ fontSize: '16px', fontWeight: 700, color: 'white', fontFamily: 'Plus Jakarta Sans', marginBottom: '16px' }}>Milestones</h2>
                            {[
                                { title: 'Research Framework Design', date: 'Day 1-2', done: true },
                                { title: 'User Interviews Complete', date: 'Day 3-5', done: true },
                                { title: 'Data Analysis', date: 'Day 6-10', done: false },
                                { title: 'Dashboard & Report', date: 'Day 11-14', done: false },
                            ].map((m, i) => (
                                <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', marginBottom: '16px' }}>
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                        <div style={{
                                            width: '28px', height: '28px', borderRadius: '50%',
                                            background: m.done ? '#10b981' : '#e2e8f0',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        }}>
                                            {m.done ? <CheckCircle size={14} color="white" fill="white" /> : <span style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8' }}>{i + 1}</span>}
                                        </div>
                                        {i < 3 && <div style={{ width: '2px', height: '24px', background: m.done ? '#10b981' : '#e2e8f0' }} />}
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '14px', fontWeight: 600, color: m.done ? '#64748b' : '#0f172a', textDecoration: m.done ? 'line-through' : 'none' }}>{m.title}</div>
                                        <div style={{ fontSize: '12px', color: '#94a3b8' }}>{m.date}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Other sections */}
                    {!['Tasks', 'Overview', 'Milestones'].includes(activeSection) && (
                        <div style={{ background: 'rgba(20,20,25,0.8)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', padding: '40px', textAlign: 'center', color: '#94a3b8' }}>
                            <div style={{ fontSize: '36px', marginBottom: '12px' }}>📁</div>
                            <div style={{ fontSize: '15px', fontWeight: 600 }}>{activeSection} section</div>
                            <div style={{ fontSize: '13px', marginTop: '8px' }}>Content will appear here</div>
                        </div>
                    )}
                </div>

                {/* Right sidebar */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {/* Team */}
                    <div style={{ background: 'rgba(20,20,25,0.8)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', padding: '20px' }}>
                        <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'white', fontFamily: 'Plus Jakarta Sans', marginBottom: '14px' }}>Team</h3>
                        {[
                            { name: 'Aarav Sharma', role: 'Backend Developer', avatar: 'AS', you: true },
                            { name: 'Priya Nair', role: 'Product Researcher', avatar: 'PN', you: false },
                            { name: 'Rohan Mehta', role: 'Data Analyst', avatar: 'RM', you: false },
                            { name: 'Dr. Riya Mehta', role: 'Mentor', avatar: 'RM2', mentor: true, you: false },
                        ].map(member => (
                            <div key={member.name} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                                <Avatar initials={member.avatar} size={36} />
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'white' }}>
                                        {member.name} {member.you && <span style={{ fontSize: '10px', color: '#a78bfa', fontWeight: 700 }}>(You)</span>}
                                    </div>
                                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                                        {member.role}
                                        {(member as any).mentor && <span style={{ color: '#7c3aed', marginLeft: '4px', fontWeight: 700 }}>· Mentor</span>}
                                    </div>
                                </div>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                            </div>
                        ))}
                    </div>

                    {/* Progress breakdown */}
                    <div style={{ background: 'rgba(20,20,25,0.8)', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)', padding: '20px' }}>
                        <h3 style={{ fontSize: '14px', fontWeight: 700, color: 'white', fontFamily: 'Plus Jakarta Sans', marginBottom: '14px' }}>Progress</h3>
                        {[
                            { label: 'Research', value: 100 },
                            { label: 'Data Collection', value: 85 },
                            { label: 'Analysis', value: 40 },
                            { label: 'Dashboard', value: 10 },
                        ].map(item => (
                            <div key={item.label} style={{ marginBottom: '12px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                                    <span style={{ fontSize: '12px', color: '#9ca3af', fontWeight: 500 }}>{item.label}</span>
                                    <span style={{ fontSize: '12px', fontWeight: 700, color: item.value === 100 ? '#10b981' : '#2563eb' }}>{item.value}%</span>
                                </div>
                                <div style={{ height: '5px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
                                    <div style={{ height: '100%', width: `${item.value}%`, background: item.value === 100 ? '#10b981' : '#2563eb', borderRadius: '999px' }} />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Quick complete button */}
                    <div style={{
                        background: 'linear-gradient(135deg, #f0fdf4, #d1fae5)',
                        borderRadius: '16px', border: '1px solid #bbf7d0',
                        padding: '20px', textAlign: 'center',
                    }}>
                        <div style={{ fontSize: '24px', marginBottom: '8px' }}>🏁</div>
                        <div style={{ fontSize: '14px', fontWeight: 700, color: '#065f46', marginBottom: '4px' }}>Ready to complete?</div>
                        <div style={{ fontSize: '12px', color: '#6ee7b7', marginBottom: '14px' }}>All major milestones done</div>
                        <button onClick={handleCompleteProject} style={{
                            width: '100%', padding: '10px', border: 'none', borderRadius: '10px',
                            background: '#10b981', color: 'white', fontWeight: 700, fontSize: '13px',
                            cursor: 'pointer', fontFamily: 'Inter',
                        }}>
                            Complete Project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

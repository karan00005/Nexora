import { useState } from 'react';
import { ArrowRight, ArrowLeft, CheckCircle, Plus } from 'lucide-react';

interface OnboardingProps {
    onComplete: () => void;
}

const skillOptions = [
    'Python', 'JavaScript', 'TypeScript', 'React', 'Node.js',
    'AI/ML', 'Data Science', 'IoT', 'Robotics', 'UI/UX',
    'Product', 'Marketing', 'Business', 'Finance', 'Flutter',
    'Java', 'C++', 'Swift', 'DevOps', 'Cloud',
];

const lookingForOptions = [
    { label: 'Internship', icon: '💼' },
    { label: 'Freelance Project', icon: '🔨' },
    { label: 'Startup Team', icon: '🚀' },
    { label: 'Hackathon', icon: '⚡' },
    { label: 'Mentorship', icon: '🧑‍🏫' },
    { label: 'Full-time Job', icon: '🏢' },
    { label: 'Research', icon: '🔬' },
    { label: 'Co-founder', icon: '🤝' },
];

const interestOptions = [
    { label: 'AI', icon: '🤖' },
    { label: 'Climate Tech', icon: '🌱' },
    { label: 'FinTech', icon: '💰' },
    { label: 'Robotics', icon: '⚙️' },
    { label: 'HealthTech', icon: '❤️' },
    { label: 'SaaS', icon: '☁️' },
    { label: 'EdTech', icon: '📚' },
    { label: 'Web3', icon: '⛓️' },
    { label: 'Smart City', icon: '🏙️' },
    { label: 'Space Tech', icon: '🚀' },
];

export default function OnboardingPage({ onComplete }: OnboardingProps) {
    const [step, setStep] = useState(1);
    const [selectedSkills, setSelectedSkills] = useState<string[]>(['Python', 'AI/ML', 'IoT']);
    const [selectedGoals, setSelectedGoals] = useState<string[]>(['Internship', 'Startup Team']);
    const [selectedInterests, setSelectedInterests] = useState<string[]>(['AI', 'Robotics']);

    const totalSteps = 5;

    const toggleItem = (arr: string[], item: string, setter: (v: string[]) => void) => {
        if (arr.includes(item)) setter(arr.filter(s => s !== item));
        else setter([...arr, item]);
    };

    const next = () => {
        if (step < totalSteps) setStep(step + 1);
        else onComplete();
    };
    const prev = () => { if (step > 1) setStep(step - 1); };

    const stepTitles = [
        'Tell us about yourself',
        'What can you build?',
        "What have you built?",
        'What are you looking for?',
        'Your interests',
    ];

    return (
        <div style={{
            minHeight: '100vh', background: 'rgba(20,20,25,0.8)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '40px 24px', fontFamily: 'Inter, sans-serif',
        }}>
            <div style={{ width: '100%', maxWidth: '540px' }}>
                {/* Logo */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px', justifyContent: 'center' }}>
                    <div style={{
                        width: '32px', height: '32px', borderRadius: '8px',
                        background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                        <span style={{ color: 'white', fontWeight: 800, fontSize: '16px', fontFamily: 'Plus Jakarta Sans' }}>Z</span>
                    </div>
                    <span style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: '18px', color: 'white' }}>ZUNIVA</span>
                </div>

                {/* Progress */}
                <div style={{ marginBottom: '32px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <span style={{ fontSize: '13px', color: '#9ca3af', fontWeight: 500 }}>Step {step} of {totalSteps}</span>
                        <span style={{ fontSize: '13px', color: '#a78bfa', fontWeight: 600 }}>{Math.round((step / totalSteps) * 100)}% complete</span>
                    </div>
                    <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
                        <div style={{
                            height: '100%', width: `${(step / totalSteps) * 100}%`,
                            background: 'linear-gradient(90deg, #2563eb, #4f46e5)',
                            borderRadius: '999px', transition: 'width 0.4s ease',
                        }} />
                    </div>
                    <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
                        {Array.from({ length: totalSteps }).map((_, i) => (
                            <div key={i} style={{
                                flex: 1, height: '4px', borderRadius: '999px',
                                background: i < step ? '#2563eb' : '#e2e8f0',
                                transition: 'background 0.3s ease',
                            }} />
                        ))}
                    </div>
                </div>

                {/* Card */}
                <div style={{
                    background: 'rgba(20,20,25,0.8)', borderRadius: '20px',
                    border: '1px solid rgba(255,255,255,0.05)',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.4)',
                    padding: '40px',
                    animation: 'fadeIn 0.3s ease',
                    minHeight: '400px',
                }}>
                    <h2 style={{
                        fontSize: '24px', fontWeight: 800, color: 'white',
                        fontFamily: 'Plus Jakarta Sans', marginBottom: '8px',
                    }}>
                        {stepTitles[step - 1]}
                    </h2>

                    {/* Step 1 */}
                    {step === 1 && (
                        <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {[
                                { label: 'Full Name', placeholder: 'Aarav Sharma', defaultValue: 'Aarav Sharma' },
                                { label: 'University', placeholder: 'IIT Madras', defaultValue: 'IIT Madras' },
                                { label: 'Degree', placeholder: 'B.Tech Computer Engineering', defaultValue: 'B.Tech Computer Engineering' },
                            ].map(field => (
                                <div key={field.label}>
                                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '6px' }}>
                                        {field.label}
                                    </label>
                                    <input
                                        defaultValue={field.defaultValue}
                                        placeholder={field.placeholder}
                                        style={{
                                            width: '100%', padding: '11px 14px', borderRadius: '10px',
                                            border: '1.5px solid #e2e8f0', fontSize: '14px', color: 'white',
                                            outline: 'none', fontFamily: 'Inter', transition: 'border-color 0.2s ease',
                                            boxSizing: 'border-box',
                                        }}
                                        onFocus={e => e.target.style.borderColor = '#2563eb'}
                                        onBlur={e => e.target.style.borderColor = '#e2e8f0'}
                                    />
                                </div>
                            ))}
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                <div>
                                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '6px' }}>Graduation Year</label>
                                    <select style={{
                                        width: '100%', padding: '11px 14px', borderRadius: '10px',
                                        border: '1.5px solid #e2e8f0', fontSize: '14px', fontFamily: 'Inter',
                                        outline: 'none', background: 'rgba(20,20,25,0.8)',
                                    }}>
                                        {['2025', '2026', '2027', '2028'].map(y => <option key={y}>{y}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label style={{ fontSize: '13px', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '6px' }}>Location</label>
                                    <input
                                        defaultValue="Chennai, India"
                                        style={{
                                            width: '100%', padding: '11px 14px', borderRadius: '10px',
                                            border: '1.5px solid #e2e8f0', fontSize: '14px', fontFamily: 'Inter', outline: 'none',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2 — skills */}
                    {step === 2 && (
                        <div style={{ marginTop: '16px' }}>
                            <p style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '20px' }}>
                                Select all the skills you can demonstrate. You'll be matched based on your actual proof of these skills.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {skillOptions.map(skill => {
                                    const selected = selectedSkills.includes(skill);
                                    return (
                                        <button
                                            key={skill}
                                            onClick={() => toggleItem(selectedSkills, skill, setSelectedSkills)}
                                            style={{
                                                padding: '8px 16px', borderRadius: '999px', fontSize: '13px', fontWeight: 600,
                                                border: selected ? '1.5px solid #2563eb' : '1.5px solid #e2e8f0',
                                                background: selected ? '#eff6ff' : 'white',
                                                color: selected ? '#2563eb' : '#64748b',
                                                cursor: 'pointer', transition: 'all 0.15s ease',
                                                fontFamily: 'Inter',
                                                display: 'flex', alignItems: 'center', gap: '6px',
                                            }}
                                        >
                                            {selected && <CheckCircle size={13} />}
                                            {skill}
                                        </button>
                                    );
                                })}
                            </div>
                            {selectedSkills.length > 0 && (
                                <div style={{ marginTop: '20px', padding: '12px 16px', background: '#f0fdf4', borderRadius: '10px', border: '1px solid #bbf7d0' }}>
                                    <span style={{ fontSize: '13px', fontWeight: 600, color: '#16a34a' }}>✓ {selectedSkills.length} skills selected</span>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Step 3 — Projects */}
                    {step === 3 && (
                        <div style={{ marginTop: '16px' }}>
                            <p style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '20px' }}>
                                Add projects you've built. These become your proof-of-work and drive AI matching.
                            </p>
                            <div style={{
                                background: '#050505', borderRadius: '12px',
                                border: '1px solid rgba(255,255,255,0.05)', padding: '20px', marginBottom: '16px',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                                    <div style={{
                                        width: '40px', height: '40px', borderRadius: '10px',
                                        background: 'rgba(109, 40, 217, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <span style={{ fontSize: '18px' }}>📊</span>
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: 700, color: 'white', fontSize: '14px' }}>Smart Campus Energy Monitor</div>
                                        <div style={{ fontSize: '12px', color: '#9ca3af' }}>IoT · Python · Data Visualization</div>
                                    </div>
                                    <CheckCircle size={18} color="#10b981" style={{ marginLeft: 'auto' }} />
                                </div>
                                <div style={{ fontSize: '12px', color: '#9ca3af' }}>Result: Reduced simulated energy consumption by 18%</div>
                            </div>
                            <button
                                style={{
                                    width: '100%', padding: '14px', borderRadius: '12px',
                                    border: '2px dashed #e2e8f0', background: 'transparent',
                                    color: '#9ca3af', fontSize: '14px', fontWeight: 500,
                                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                                    fontFamily: 'Inter',
                                }}
                            >
                                <Plus size={16} />
                                Add Another Project
                            </button>
                        </div>
                    )}

                    {/* Step 4 — Looking for */}
                    {step === 4 && (
                        <div style={{ marginTop: '16px' }}>
                            <p style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '20px' }}>
                                Select everything you're open to. You'll receive matching opportunities for each.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                {lookingForOptions.map(opt => {
                                    const selected = selectedGoals.includes(opt.label);
                                    return (
                                        <button
                                            key={opt.label}
                                            onClick={() => toggleItem(selectedGoals, opt.label, setSelectedGoals)}
                                            style={{
                                                padding: '14px 16px', borderRadius: '12px',
                                                border: selected ? '1.5px solid #2563eb' : '1.5px solid #e2e8f0',
                                                background: selected ? '#eff6ff' : 'white',
                                                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px',
                                                transition: 'all 0.15s ease', fontFamily: 'Inter', textAlign: 'left',
                                            }}
                                        >
                                            <span style={{ fontSize: '20px' }}>{opt.icon}</span>
                                            <span style={{ fontSize: '13px', fontWeight: 600, color: selected ? '#2563eb' : '#374151' }}>
                                                {opt.label}
                                            </span>
                                            {selected && <CheckCircle size={14} color="#2563eb" style={{ marginLeft: 'auto' }} />}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* Step 5 — Interests */}
                    {step === 5 && (
                        <div style={{ marginTop: '16px' }}>
                            <p style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '20px' }}>
                                What domains excite you? This helps match you with the most relevant opportunities.
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
                                {interestOptions.map(opt => {
                                    const selected = selectedInterests.includes(opt.label);
                                    return (
                                        <button
                                            key={opt.label}
                                            onClick={() => toggleItem(selectedInterests, opt.label, setSelectedInterests)}
                                            style={{
                                                padding: '10px 18px', borderRadius: '12px',
                                                border: selected ? '1.5px solid #2563eb' : '1.5px solid #e2e8f0',
                                                background: selected ? '#eff6ff' : 'white',
                                                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px',
                                                transition: 'all 0.15s ease', fontFamily: 'Inter',
                                            }}
                                        >
                                            <span style={{ fontSize: '18px' }}>{opt.icon}</span>
                                            <span style={{ fontSize: '13px', fontWeight: 600, color: selected ? '#2563eb' : '#374151' }}>
                                                {opt.label}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>

                {/* Navigation */}
                <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                    {step > 1 && (
                        <button onClick={prev} className="btn-ghost" style={{ flex: 1 }}>
                            <ArrowLeft size={16} /> Back
                        </button>
                    )}
                    <button onClick={next} className="btn-primary"
                        style={{ flex: step > 1 ? 2 : 1, padding: '14px', fontSize: '15px' }}>
                        {step === totalSteps ? (
                            <>Build My Profile ✨</>
                        ) : (
                            <>Continue <ArrowRight size={16} /></>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

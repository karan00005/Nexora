import { ArrowRight, Zap, Building2 } from 'lucide-react';

interface LandingPageProps {
    onNavigate: (page: string) => void;
}

function FlowStep({ icon, label, delay = 0 }: { icon: string; label: string; delay?: number }) {
    return (
        <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
            animation: `fadeIn 0.5s ease ${delay}ms both`,
        }}>
            <div style={{
                width: '64px', height: '64px', borderRadius: '16px',
                background: 'white', border: '1px solid #e2e8f0',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '28px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
            }}>{icon}</div>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a', letterSpacing: '0.05em' }}>{label}</span>
        </div>
    );
}

function SectionHeading({ tag, title, subtitle }: { tag: string; title: string; subtitle?: string }) {
    return (
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 60px' }}>
            <span style={{
                display: 'inline-block', padding: '4px 14px', borderRadius: '999px',
                background: '#eff6ff', color: '#2563eb', fontSize: '12px', fontWeight: 700,
                letterSpacing: '0.08em', border: '1px solid #bfdbfe', marginBottom: '16px',
            }}>
                {tag}
            </span>
            <h2 style={{
                fontSize: '36px', fontWeight: 800, color: '#0f172a',
                lineHeight: 1.2, fontFamily: 'Plus Jakarta Sans', marginBottom: '16px',
            }}>
                {title}
            </h2>
            {subtitle && (
                <p style={{ fontSize: '16px', color: '#64748b', lineHeight: 1.7 }}>{subtitle}</p>
            )}
        </div>
    );
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
    return (
        <div style={{ background: 'white', minHeight: '100vh', fontFamily: 'Inter, sans-serif' }}>
            {/* HERO NAV */}
            <header style={{
                position: 'sticky', top: 0, zIndex: 100,
                background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)',
                borderBottom: '1px solid #e2e8f0',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '0 48px', height: '64px',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                        width: '32px', height: '32px', borderRadius: '8px',
                        background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                        <span style={{ color: 'white', fontWeight: 800, fontSize: '15px', fontFamily: 'Plus Jakarta Sans' }}>Z</span>
                    </div>
                    <span style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: '20px', color: '#0f172a', letterSpacing: '-0.5px' }}>ZUNIVA</span>
                </div>
                <nav style={{ display: 'flex', gap: '32px' }}>
                    {[
                        { label: 'Features', action: 'opportunities' },
                        { label: 'For Students', action: 'dashboard' },
                        { label: 'For Companies', action: 'company-dashboard' },
                        { label: 'Challenges', action: 'challenges' }
                    ].map(item => (
                        <button key={item.label} onClick={() => onNavigate(item.action)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', fontSize: '14px', fontWeight: 500, fontFamily: 'Inter' }}>
                            {item.label}
                        </button>
                    ))}
                </nav>
                <div style={{ display: 'flex', gap: '12px' }}>
                    <button onClick={() => onNavigate('onboarding')} className="btn-secondary" style={{ padding: '8px 18px', fontSize: '13px' }}>
                        Log In
                    </button>
                    <button onClick={() => onNavigate('onboarding')} className="btn-primary" style={{ padding: '8px 18px', fontSize: '13px' }}>
                        Get Started
                    </button>
                </div>
            </header>

            {/* HERO */}
            <section style={{
                minHeight: 'calc(100vh - 64px)',
                background: 'linear-gradient(170deg, #f8faff 0%, #ffffff 50%, #f0f9ff 100%)',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                padding: '80px 48px', textAlign: 'center',
                position: 'relative', overflow: 'hidden',
            }}>
                {/* Background decoration */}
                <div style={{
                    position: 'absolute', top: '10%', left: '5%',
                    width: '400px', height: '400px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }} />
                <div style={{
                    position: 'absolute', bottom: '10%', right: '5%',
                    width: '300px', height: '300px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(79,70,229,0.06) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }} />

                <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
                    <div style={{
                        display: 'inline-flex', alignItems: 'center', gap: '8px',
                        background: 'white', border: '1px solid #e2e8f0',
                        borderRadius: '999px', padding: '6px 16px',
                        marginBottom: '32px',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                    }}>
                        <Zap size={13} fill="#f59e0b" color="#f59e0b" />
                        <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b', letterSpacing: '0.05em' }}>
                            THE PROOF-OF-WORK NETWORK FOR EMERGING TALENT
                        </span>
                    </div>

                    <h1 style={{
                        fontSize: 'clamp(40px, 6vw, 72px)',
                        fontWeight: 900, color: '#0f172a',
                        lineHeight: 1.1, fontFamily: 'Plus Jakarta Sans',
                        letterSpacing: '-2px', marginBottom: '24px',
                    }}>
                        Your skills deserve<br />
                        <span style={{ color: '#2563eb' }}>more than a resume.</span>
                    </h1>

                    <p style={{
                        fontSize: '20px', color: '#475569',
                        lineHeight: 1.7, maxWidth: '560px', margin: '0 auto 48px',
                    }}>
                        Build real projects, prove what you can do, and get matched with the right people, companies, and opportunities.
                    </p>

                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '64px' }}>
                        <button onClick={() => onNavigate('onboarding')} className="btn-primary"
                            style={{ padding: '16px 32px', fontSize: '16px', borderRadius: '12px' }}>
                            Start Building <ArrowRight size={18} />
                        </button>
                        <button onClick={() => onNavigate('opportunities')} className="btn-secondary"
                            style={{ padding: '16px 32px', fontSize: '16px', borderRadius: '12px' }}>
                            Explore Opportunities
                        </button>
                    </div>

                    {/* Flow */}
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        justifyContent: 'center', flexWrap: 'wrap',
                    }}>
                        {[
                            { icon: '📚', label: 'LEARN' },
                            { icon: '🏆', label: 'COMPETE' },
                            { icon: '🔨', label: 'BUILD' },
                            { icon: '✅', label: 'PROVE' },
                            { icon: '🤝', label: 'MATCH' },
                            { icon: '🚀', label: 'GROW' },
                        ].map((step, i) => (
                            <div key={step.label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <FlowStep icon={step.icon} label={step.label} delay={i * 80} />
                                {i < 5 && (
                                    <div style={{ color: '#94a3b8', fontSize: '18px', paddingBottom: '24px' }}>→</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DASHBOARD PREVIEW */}
            <section style={{ padding: '80px 48px', background: '#f8fafc' }}>
                <SectionHeading
                    tag="PLATFORM PREVIEW"
                    title="One profile. Your entire proof-of-work."
                    subtitle="Students have projects, hackathons, certifications, GitHub repos — but it's scattered. ZUNIVA brings it all together."
                />

                {/* Preview card */}
                <div style={{
                    maxWidth: '900px', margin: '0 auto',
                    background: 'white', borderRadius: '20px',
                    border: '1px solid #e2e8f0',
                    boxShadow: '0 24px 80px rgba(0,0,0,0.08)',
                    overflow: 'hidden',
                }}>
                    {/* Profile Header */}
                    <div style={{
                        background: 'linear-gradient(135deg, #0a1628 0%, #162b57 100%)',
                        padding: '32px 40px', display: 'flex', alignItems: 'center', gap: '24px',
                    }}>
                        <div style={{
                            width: '80px', height: '80px', borderRadius: '50%',
                            background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '28px', fontWeight: 800, color: 'white', fontFamily: 'Plus Jakarta Sans',
                            border: '3px solid rgba(255,255,255,0.2)',
                        }}>AS</div>
                        <div style={{ color: 'white' }}>
                            <div style={{ fontSize: '22px', fontWeight: 800, fontFamily: 'Plus Jakarta Sans' }}>Aarav Sharma</div>
                            <div style={{ fontSize: '14px', color: '#94a3b8', marginTop: '4px' }}>Computer Engineering · 3rd Year · IIT Madras</div>
                            <div style={{ fontSize: '13px', color: '#60a5fa', marginTop: '6px' }}>Building at the intersection of AI, IoT & Robotics.</div>
                        </div>
                        <div style={{ marginLeft: 'auto', textAlign: 'center' }}>
                            <div style={{ fontSize: '36px', fontWeight: 900, color: 'white', fontFamily: 'Plus Jakarta Sans', lineHeight: 1 }}>86</div>
                            <div style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 700, letterSpacing: '0.08em' }}>PROOF SCORE</div>
                        </div>
                    </div>

                    {/* Stats row */}
                    <div style={{
                        display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
                        borderBottom: '1px solid #e2e8f0',
                    }}>
                        {[
                            { value: '8', label: 'Projects' },
                            { value: '5', label: 'Challenges' },
                            { value: '3', label: 'Hackathons' },
                            { value: '14', label: 'Skills' },
                            { value: '12', label: 'Collaborations' },
                        ].map((stat, i) => (
                            <div key={stat.label} style={{
                                padding: '20px', textAlign: 'center',
                                borderRight: i < 4 ? '1px solid #e2e8f0' : 'none',
                            }}>
                                <div style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', fontFamily: 'Plus Jakarta Sans' }}>{stat.value}</div>
                                <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 500, marginTop: '4px' }}>{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Skills */}
                    <div style={{ padding: '24px 40px' }}>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: '#64748b', letterSpacing: '0.05em', marginBottom: '14px' }}>SKILLS DEMONSTRATED</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {['Python', 'AI/ML', 'IoT', 'Robotics', 'React', 'Product Design', 'TensorFlow', 'Data Science'].map(s => (
                                <span key={s} style={{
                                    padding: '5px 14px', borderRadius: '999px', fontSize: '13px', fontWeight: 600,
                                    background: '#eff6ff', color: '#2563eb', border: '1px solid #bfdbfe',
                                }}>{s}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* REAL WORLD PROJECTS */}
            <section style={{ padding: '80px 48px', background: 'white' }}>
                <SectionHeading
                    tag="HOW IT WORKS"
                    title="Opportunities become real when you build."
                    subtitle="Companies post real problems. AI finds the right builders. Teams form, projects get completed, and the work becomes proof."
                />

                <div style={{
                    maxWidth: '900px', margin: '0 auto',
                    display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)',
                    gap: '0', alignItems: 'center',
                }}>
                    {[
                        { icon: '🏢', title: 'Company posts a problem', color: '#eff6ff' },
                        { icon: '🤖', title: 'AI identifies builders', color: '#f5f3ff' },
                        { icon: '👥', title: 'Team forms', color: '#f0fdf4' },
                        { icon: '🧑‍🏫', title: 'Mentor joins', color: '#fff7ed' },
                        { icon: '🔨', title: 'Project completed', color: '#eff6ff' },
                        { icon: '✅', title: 'Work becomes proof', color: '#f0fdf4' },
                        { icon: '🚀', title: 'Talent discovered', color: '#f5f3ff' },
                    ].map((step, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                            <div style={{
                                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
                                padding: '20px 8px', flex: 1,
                            }}>
                                <div style={{
                                    width: '56px', height: '56px', borderRadius: '16px',
                                    background: step.color, display: 'flex', alignItems: 'center',
                                    justifyContent: 'center', fontSize: '24px',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                                }}>
                                    {step.icon}
                                </div>
                                <div style={{ fontSize: '11px', fontWeight: 600, color: '#64748b', textAlign: 'center', lineHeight: 1.3 }}>
                                    {step.title}
                                </div>
                            </div>
                            {i < 6 && <div style={{ color: '#94a3b8', fontSize: '18px' }}>→</div>}
                        </div>
                    ))}
                </div>
            </section>

            {/* AI MATCHING */}
            <section style={{ padding: '80px 48px', background: '#f8fafc' }}>
                <SectionHeading
                    tag="AI MATCHING"
                    title="The right opportunity, not just another opportunity."
                />
                <div style={{
                    maxWidth: '600px', margin: '0 auto',
                    background: 'white', borderRadius: '20px',
                    border: '1px solid #e2e8f0',
                    padding: '32px',
                    boxShadow: '0 8px 40px rgba(0,0,0,0.06)',
                }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '24px', marginBottom: '28px' }}>
                        <div style={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            background: '#f0fdf4', borderRadius: '50%',
                            width: '88px', height: '88px', flexShrink: 0,
                        }}>
                            <span style={{ fontSize: '32px', fontWeight: 900, color: '#10b981', fontFamily: 'Plus Jakarta Sans', lineHeight: 1 }}>92%</span>
                            <span style={{ fontSize: '10px', fontWeight: 700, color: '#059669', letterSpacing: '0.05em' }}>MATCH</span>
                        </div>
                        <div>
                            <div style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '8px' }}>
                                AI Research Intern — Vertex AI
                            </div>
                            <p style={{ fontSize: '14px', color: '#64748b', lineHeight: 1.6 }}>
                                "Strong match because of your IoT project, Python skills, robotics experience and interest in hardware startups."
                            </p>
                        </div>
                    </div>
                    {[
                        { label: 'Skills', value: 94 },
                        { label: 'Experience', value: 88 },
                        { label: 'Interest', value: 91 },
                        { label: 'Project Relevance', value: 95 },
                    ].map(item => (
                        <div key={item.label} style={{ marginBottom: '12px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>{item.label}</span>
                                <span style={{ fontSize: '13px', fontWeight: 700, color: '#10b981' }}>{item.value}%</span>
                            </div>
                            <div style={{ height: '6px', background: '#e2e8f0', borderRadius: '999px', overflow: 'hidden' }}>
                                <div style={{ width: `${item.value}%`, height: '100%', background: '#10b981', borderRadius: '999px' }} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FOR COMPANIES */}
            <section style={{ padding: '80px 48px', background: 'linear-gradient(135deg, #0a1628, #162b57)' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
                    <div>
                        <span style={{
                            display: 'inline-block', padding: '4px 14px', borderRadius: '999px',
                            background: 'rgba(37,99,235,0.3)', color: '#60a5fa',
                            fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', marginBottom: '20px',
                            border: '1px solid rgba(96,165,250,0.3)',
                        }}>FOR COMPANIES</span>
                        <h2 style={{
                            fontSize: '40px', fontWeight: 800, color: 'white',
                            fontFamily: 'Plus Jakarta Sans', lineHeight: 1.2, marginBottom: '20px',
                        }}>
                            Discover builders,<br />not just resumes.
                        </h2>
                        <p style={{ fontSize: '16px', color: '#94a3b8', lineHeight: 1.7, marginBottom: '32px' }}>
                            Find verified talent, post real problems, build project teams, run challenges, and hire proven builders with demonstrated capabilities.
                        </p>
                        <button onClick={() => onNavigate('company-dashboard')} className="btn-primary">
                            <Building2 size={16} />
                            For Companies <ArrowRight size={16} />
                        </button>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {[
                            { icon: '✅', text: 'Find verified talent with proof-of-work' },
                            { icon: '📋', text: 'Post real business problems as projects' },
                            { icon: '👥', text: 'Build project teams from the talent pool' },
                            { icon: '🏆', text: 'Run challenges to discover top builders' },
                            { icon: '🤖', text: 'AI-powered talent matching and discovery' },
                        ].map(item => (
                            <div key={item.text} style={{
                                display: 'flex', alignItems: 'center', gap: '14px',
                                background: 'rgba(255,255,255,0.05)', borderRadius: '12px',
                                padding: '14px 18px', border: '1px solid rgba(255,255,255,0.08)',
                            }}>
                                <span style={{ fontSize: '18px' }}>{item.icon}</span>
                                <span style={{ fontSize: '14px', color: '#cbd5e1', fontWeight: 500 }}>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FOR STUDENTS */}
            <section style={{ padding: '80px 48px', background: 'white' }}>
                <SectionHeading
                    tag="FOR STUDENTS"
                    title="Turn learning into opportunity."
                />
                <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '0', marginBottom: '40px' }}>
                        {['Learn', 'Compete', 'Build', 'Prove', 'Get Discovered'].map((step, i) => (
                            <div key={step} style={{ display: 'flex', alignItems: 'center' }}>
                                <div style={{
                                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
                                    minWidth: '100px', padding: '0 8px',
                                }}>
                                    <div style={{
                                        width: '48px', height: '48px', borderRadius: '50%',
                                        background: `hsl(${220 + i * 15}, 80%, 55%)`,
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        color: 'white', fontWeight: 700, fontSize: '16px',
                                    }}>
                                        {i + 1}
                                    </div>
                                    <span style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a' }}>{step}</span>
                                </div>
                                {i < 4 && <ArrowRight size={16} color="#94a3b8" />}
                            </div>
                        ))}
                    </div>
                    <button onClick={() => onNavigate('onboarding')} className="btn-primary" style={{ padding: '16px 32px', fontSize: '16px', borderRadius: '12px' }}>
                        Create Your Builder Profile <ArrowRight size={18} />
                    </button>
                </div>
            </section>

            {/* CTA */}
            <section style={{
                padding: '80px 48px', textAlign: 'center',
                background: 'linear-gradient(135deg, #eff6ff, #f5f3ff)',
                borderTop: '1px solid #e2e8f0',
            }}>
                <h2 style={{ fontSize: '48px', fontWeight: 900, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '16px' }}>
                    Ready to prove what you can build?
                </h2>
                <p style={{ fontSize: '18px', color: '#64748b', marginBottom: '40px' }}>
                    Join thousands of builders turning their work into opportunities.
                </p>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                    <button onClick={() => onNavigate('onboarding')} className="btn-primary" style={{ padding: '16px 32px', fontSize: '16px' }}>
                        Start Building Free <ArrowRight size={18} />
                    </button>
                    <button onClick={() => onNavigate('opportunities')} className="btn-secondary" style={{ padding: '16px 32px', fontSize: '16px' }}>
                        Browse Opportunities
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer style={{
                background: '#0a1628', padding: '40px 48px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                        width: '28px', height: '28px', borderRadius: '7px',
                        background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                        <span style={{ color: 'white', fontWeight: 800, fontSize: '13px', fontFamily: 'Plus Jakarta Sans' }}>Z</span>
                    </div>
                    <span style={{ color: 'white', fontWeight: 800, fontSize: '16px', fontFamily: 'Plus Jakarta Sans' }}>ZUNIVA</span>
                </div>
                <span style={{ color: '#475569', fontSize: '13px' }}>Build. Prove. Connect. © 2026</span>
                <span style={{ color: '#1e3a6e', fontSize: '13px' }}>The Proof-of-Work Network for Emerging Talent</span>
            </footer>
        </div>
    );
}

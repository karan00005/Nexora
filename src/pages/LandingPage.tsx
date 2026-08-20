import { ArrowRight, Play, CheckCircle2, Check } from 'lucide-react';

interface LandingPageProps {
    onNavigate: (page: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
    return (
        <div style={{ backgroundColor: '#050505', minHeight: '100vh', fontFamily: 'Inter, sans-serif', color: 'white', overflowX: 'hidden' }}>
            {/* Navbar */}
            <header style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '16px 48px', borderBottom: '1px solid rgba(255,255,255,0.05)',
                position: 'sticky', top: 0, zIndex: 100, backdropFilter: 'blur(12px)',
                background: 'rgba(5, 5, 5, 0.8)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                        width: '32px', height: '32px', borderRadius: '8px',
                        background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 7H14.5L10.5 17H20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <span style={{ fontWeight: 700, fontSize: '20px', letterSpacing: '-0.5px' }}>Zuniva</span>
                </div>

                <nav style={{ gap: '32px', display: 'none', '@media(min-width: 768px)': { display: 'flex' } } as any}>
                    {['Platform', 'Solutions', 'Investors', 'Resources', 'Pricing'].map(item => (
                        <button key={item} style={{
                            background: 'none', border: 'none', color: '#9ca3af',
                            fontSize: '14px', fontWeight: 500, cursor: 'pointer', transition: 'color 0.2s',
                        }} onMouseOver={e => e.currentTarget.style.color = 'white'} onMouseOut={e => e.currentTarget.style.color = '#9ca3af'}>
                            {item}
                        </button>
                    ))}
                </nav>

                <div style={{ display: 'flex', gap: '12px' }}>
                    <button onClick={() => onNavigate('onboarding')} style={{
                        background: 'transparent', border: '1px solid #333', color: 'white',
                        padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: 500, cursor: 'pointer',
                        transition: 'all 0.2s'
                    }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                        Log in
                    </button>
                    <button onClick={() => onNavigate('onboarding')} style={{
                        background: '#6d28d9', border: 'none', color: 'white',
                        padding: '8px 16px', borderRadius: '8px', fontSize: '13px', fontWeight: 500, cursor: 'pointer',
                        boxShadow: '0 0 20px rgba(109, 40, 217, 0.4)', transition: 'all 0.2s'
                    }} onMouseOver={e => e.currentTarget.style.background = '#7c3aed'} onMouseOut={e => e.currentTarget.style.background = '#6d28d9'}>
                        Book a Demo
                    </button>
                </div>
            </header>

            <main style={{ padding: '60px 48px', maxWidth: '1400px', margin: '0 auto' }}>
                <div style={{ display: 'flex', gap: '64px', alignItems: 'center', marginBottom: '80px', flexWrap: 'wrap' }}>
                    {/* Hero Left Content */}
                    <div style={{ flex: '1', minWidth: '400px' }}>
                        <div style={{
                            display: 'inline-flex', alignItems: 'center', gap: '8px',
                            background: 'rgba(109, 40, 217, 0.1)', border: '1px solid rgba(139, 92, 246, 0.2)',
                            borderRadius: '999px', padding: '6px 14px', marginBottom: '24px'
                        }}>
                            <span style={{ fontSize: '12px', fontWeight: 600, color: '#a78bfa' }}>The Venture Studio OS</span>
                            <span style={{ fontSize: '10px', background: 'rgba(139, 92, 246, 0.2)', padding: '2px 6px', borderRadius: '4px', color: '#c4b5fd' }}>BETA</span>
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(48px, 5vw, 68px)', fontWeight: 800, lineHeight: 1.1,
                            letterSpacing: '-2px', marginBottom: '24px'
                        }}>
                            From Weekend<br />Hackathon to<br />
                            <span style={{ color: '#a78bfa' }}>Seed Funded</span>
                        </h1>
                        <p style={{
                            fontSize: '18px', color: '#9ca3af', lineHeight: 1.6,
                            marginBottom: '40px', maxWidth: '480px'
                        }}>
                            Zuniva transforms your hack into a real startup. We handle the infra, legal, and investor pipeline so you can focus on building.
                        </p>

                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '48px' }}>
                            <button onClick={() => onNavigate('onboarding')} style={{
                                background: '#6d28d9', color: 'white', border: 'none',
                                padding: '14px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: 600,
                                display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer',
                                boxShadow: '0 0 30px rgba(109, 40, 217, 0.4)'
                            }}>
                                Launch Your Project <ArrowRight size={18} />
                            </button>
                            <button style={{
                                background: 'rgba(255,255,255,0.03)', color: 'white', border: '1px solid rgba(255,255,255,0.1)',
                                padding: '14px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: 600,
                                display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer',
                            }}>
                                How it Works <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Play size={10} fill="white" /></div>
                            </button>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <span style={{ fontSize: '14px', color: '#6b7280' }}>Trusted by 2,000+ builders from</span>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#333', border: '2px solid #050505', marginLeft: i > 1 ? '-10px' : '0', backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 10})`, backgroundSize: 'cover' }} />
                                ))}
                                <span style={{ fontSize: '12px', color: '#9ca3af', marginLeft: '8px' }}>+1.2K</span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Right Visual */}
                    <div style={{ flex: '1.2', minWidth: '500px', position: 'relative', height: '500px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', alignItems: 'flex-start', flex: 1 }}>
                            {/* Card 1 */}
                            <div style={{ background: 'rgba(20,20,25,0.8)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '16px', width: '200px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <div style={{ fontSize: '12px', color: '#9ca3af', display: 'flex', gap: '8px', alignItems: 'center' }}>
                                    <span style={{ color: 'white', fontWeight: 600 }}>1</span> Pull Request Merged
                                </div>
                                <div style={{ background: '#111', borderRadius: '12px', padding: '16px', border: '1px solid #222' }}>
                                    <div style={{ fontSize: '13px', color: '#e5e7eb', marginBottom: '12px', fontWeight: 500 }}>feat: AI matching engine<br /><span style={{ color: '#6b7280', fontSize: '11px' }}>#492</span></div>
                                    <div style={{ background: 'rgba(139, 92, 246, 0.2)', color: '#a78bfa', fontSize: '11px', padding: '4px 8px', borderRadius: '4px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                        <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#a78bfa' }} /> Merged
                                    </div>
                                </div>
                                <div style={{ fontSize: '11px' }}>
                                    <div style={{ color: '#10b981', marginBottom: '4px' }}>+ 1,248 additions</div>
                                    <div style={{ color: '#f43f5e' }}>- 32 deletions</div>
                                </div>
                                <div style={{ marginTop: 'auto' }}>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#6b7280"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" /></svg>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div style={{ background: 'rgba(20,20,25,0.8)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '16px', width: '200px', display: 'flex', flexDirection: 'column', gap: '16px', transform: 'translateY(-20px)' }}>
                                <div style={{ fontSize: '12px', color: '#9ca3af', display: 'flex', gap: '8px', alignItems: 'center' }}>
                                    <span style={{ color: 'white', fontWeight: 600 }}>2</span> Incorporated
                                </div>
                                <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: '12px', padding: '20px 16px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                    <div style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.9)', borderRadius: '4px', marginBottom: '16px' }} />
                                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'white', marginBottom: '8px' }}>Certificate<br />of Incorporation</div>
                                    <div style={{ fontSize: '11px', color: '#9ca3af', marginBottom: '12px' }}>Zuniva Labs Pvt. Ltd.</div>
                                    <div style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#10b981', fontSize: '10px', padding: '4px 12px', borderRadius: '12px' }}>Registered</div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div style={{ background: 'rgba(20,20,25,0.8)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '16px', width: '200px', display: 'flex', flexDirection: 'column', gap: '16px', transform: 'translateY(-40px)' }}>
                                <div style={{ fontSize: '12px', color: '#9ca3af', display: 'flex', gap: '8px', alignItems: 'center' }}>
                                    <span style={{ color: 'white', fontWeight: 600 }}>3</span> Seed Round
                                </div>
                                <div style={{ background: '#111', borderRadius: '12px', padding: '20px 16px', border: '1px solid #222' }}>
                                    <div style={{ fontSize: '24px', fontWeight: 700, color: 'white', marginBottom: '4px' }}>$1.2M</div>
                                    <div style={{ fontSize: '13px', color: '#10b981', fontWeight: 600, marginBottom: '20px' }}>Seed Round</div>
                                    <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '4px' }}>Led by</div>
                                    <div style={{ fontSize: '12px', color: 'white', fontWeight: 500, marginBottom: '20px' }}>Ascend Capital</div>

                                    <div style={{ fontSize: '10px', color: '#9ca3af', marginBottom: '8px' }}>+12 Investors</div>
                                    <div style={{ display: 'flex' }}>
                                        {[6, 7, 8, 9, 10].map((i) => (
                                            <div key={i} style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#333', border: '2px solid #111', marginLeft: i > 6 ? '-8px' : '0', backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 20})`, backgroundSize: 'cover' }} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Progression Line */}
                        <div style={{ position: 'relative', height: '100px', width: '100%', display: 'flex', alignItems: 'center' }}>
                            <div style={{ position: 'absolute', top: '50%', left: '10%', right: '10%', height: '2px', background: 'linear-gradient(90deg, rgba(139,92,246,0) 0%, rgba(139,92,246,1) 50%, rgba(139,92,246,0) 100%)', boxShadow: '0 0 15px rgba(139,92,246,0.8)' }} />
                            {/* Dots */}
                            <div style={{ position: 'absolute', top: 'calc(50% - 6px)', left: '15%', width: '12px', height: '12px', borderRadius: '50%', background: 'white', boxShadow: '0 0 10px #a78bfa' }} />
                            <div style={{ position: 'absolute', top: 'calc(50% - 6px)', left: '50%', width: '12px', height: '12px', borderRadius: '50%', background: 'white', boxShadow: '0 0 10px #a78bfa' }} />
                            <div style={{ position: 'absolute', top: 'calc(50% - 6px)', left: '85%', width: '12px', height: '12px', borderRadius: '50%', background: 'white', boxShadow: '0 0 10px #a78bfa' }} />
                        </div>

                        <div style={{ alignSelf: 'center', background: 'rgba(109,40,217, 0.2)', border: '1px solid rgba(139,92,246,0.3)', padding: '8px 20px', borderRadius: '999px', fontSize: '13px', color: '#ddd' }}>
                            We automate the journey.
                        </div>
                    </div>
                </div>

                {/* Features 3 Columns */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '24px' }}>

                    {/* Feature 1 */}
                    <div style={{ background: 'rgba(20,20,25,0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontSize: '10px', fontWeight: 700, color: '#a78bfa', letterSpacing: '1px', marginBottom: '12px' }}>AUTOMATIC INGESTION</div>
                        <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px' }}>Hackathon &rarr;<br />Real-World Pipeline</h3>
                        <p style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '32px', lineHeight: 1.6 }}>We automatically ingest your hackathon submission from leading platforms.</p>

                        <div style={{ background: '#111', borderRadius: '16px', padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                            <div style={{ display: 'flex', gap: '8px', zIndex: 1, marginBottom: '20px' }}>
                                <div style={{ background: '#1e293b', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <span style={{ color: '#38bdf8', fontWeight: 800 }}>D</span> Devpost
                                </div>
                                <div style={{ background: '#1e293b', padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 600 }}>MLH</div>
                            </div>
                            <div style={{ width: '120px', height: '120px', position: 'relative', background: 'radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #a78bfa, #6d28d9)', transform: 'rotateX(60deg) rotateZ(-45deg)', borderRadius: '8px', boxShadow: '0 20px 40px rgba(109,40,217,0.5)', position: 'relative' }}>
                                    <div style={{ position: 'absolute', top: -30, left: 10, width: 40, height: 40, background: 'linear-gradient(135deg, #c4b5fd, #8b5cf6)', transform: 'translateZ(20px)', borderRadius: '4px', opacity: 0.8 }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div style={{ background: 'rgba(20,20,25,0.6)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontSize: '10px', fontWeight: 700, color: '#10b981', letterSpacing: '1px', marginBottom: '12px' }}>PROOF-OF-WORK</div>
                        <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '32px' }}>Real-time Maturity Score</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '32px' }}>
                            <div style={{ width: '140px', height: '140px', borderRadius: '50%', border: '8px solid #222', borderTopColor: '#10b981', borderRightColor: '#10b981', borderBottomColor: '#10b981', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 30px rgba(16,185,129,0.2)' }}>
                                <span style={{ fontSize: '40px', fontWeight: 700, lineHeight: 1 }}>72</span>
                                <span style={{ fontSize: '12px', color: '#9ca3af' }}>/100</span>
                            </div>
                            <div style={{ marginTop: '16px', background: 'rgba(16,185,129,0.1)', color: '#10b981', padding: '4px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: 700 }}>STRONG TRACTION</div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {[
                                { name: 'Product', s: 80 },
                                { name: 'Team', s: 70 },
                                { name: 'Traction', s: 65 },
                                { name: 'Business', s: 75 },
                            ].map(item => (
                                <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d1d5db' }}>
                                        <CheckCircle2 fill="#10b981" color="black" size={14} /> {item.name}
                                    </div>
                                    <span style={{ color: '#9ca3af' }}>{item.s}/100</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div style={{ background: 'rgba(20,20,25,0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '32px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontSize: '10px', fontWeight: 700, color: '#a78bfa', letterSpacing: '1px', marginBottom: '12px' }}>INVESTOR DEAL-FLOW</div>
                        <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '8px' }}>Live Investor Opportunities</h3>
                        <p style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '24px' }}>Curated deals. Real-time updates.</p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
                            {[
                                { name: 'Ascend Capital', info: 'Seed · $500K - $2M', tags: 'AI, Developer Tools, SaaS', l: 'A' },
                                { name: 'Pioneer Fund', info: 'Pre-Seed · $250K - $1M', tags: 'Deep Tech, Frontier AI', l: 'P' },
                                { name: 'Better Ventures', info: 'Seed · $1M - $3M', tags: 'Consumer, Marketplaces', l: 'B' },
                            ].map(vc => (
                                <div key={vc.name} style={{ background: '#111', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'flex-start', gap: '16px', border: '1px solid #222' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'white', color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: 800 }}>{vc.l}</div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                                            <span style={{ fontSize: '14px', fontWeight: 600, color: 'white' }}>{vc.name}</span>
                                            <span style={{ fontSize: '9px', background: 'rgba(16,185,129,0.1)', color: '#10b981', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>ACTIVE</span>
                                        </div>
                                        <div style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '4px' }}>{vc.info}</div>
                                        <div style={{ fontSize: '11px', color: '#6b7280' }}>{vc.tags}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '24px', fontSize: '13px', color: '#9ca3af', display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                            View all opportunities <ArrowRight size={14} />
                        </div>
                    </div>
                </div>

                {/* Bottom Wide Sections */}
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '24px', marginBottom: '24px' }}>
                    {/* Legal & Infra */}
                    <div style={{ background: 'rgba(20,20,25,0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                            <div style={{ fontSize: '10px', fontWeight: 700, color: '#a78bfa', letterSpacing: '1px', marginBottom: '12px' }}>LEGAL & INFRASTRUCTURE</div>
                            <h3 style={{ fontSize: '28px', fontWeight: 600, marginBottom: '24px' }}>Everything, Automated</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                {[
                                    'Company Incorporation (Global)',
                                    'Stripe Atlas Integration',
                                    'AWS Activate Credits',
                                    'Contracts & Compliance',
                                    'Cap Table & Equity Mgmt.'
                                ].map(t => (
                                    <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#d1d5db' }}>
                                        <div style={{ background: '#10b981', borderRadius: '50%', padding: '2px' }}><Check size={12} color="black" /></div>
                                        {t}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div style={{ position: 'relative', width: '200px', height: '200px' }}>
                            <div style={{ position: 'absolute', top: 40, right: 20, width: 120, height: 120, background: 'rgba(30,30,40,0.8)', border: '1px solid #444', borderRadius: '16px', transform: 'rotateX(55deg) rotateZ(-45deg)', boxShadow: '20px 20px 30px rgba(0,0,0,0.5)' }}></div>
                            <div style={{ position: 'absolute', top: 20, right: 30, width: 120, height: 120, background: 'rgba(50,50,70,0.9)', border: '1px solid #666', borderRadius: '16px', transform: 'rotateX(55deg) rotateZ(-45deg)', boxShadow: '0 0 20px rgba(139,92,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <div style={{ width: 30, height: 30, background: '#a78bfa', borderRadius: '4px', transform: 'translateZ(30px)' }}></div>
                            </div>
                            <div style={{ position: 'absolute', top: 0, right: 40, width: 120, height: 120, background: 'linear-gradient(135deg, #222, #111)', border: '1px solid #333', borderRadius: '16px', transform: 'rotateX(55deg) rotateZ(-45deg)' }}></div>
                        </div>
                    </div>

                    {/* Partners */}
                    <div style={{ background: 'rgba(20,20,25,0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '24px', padding: '40px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'absolute', bottom: -50, right: -50, width: 300, height: 300, background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)' }}></div>
                        <div style={{ fontSize: '10px', fontWeight: 700, color: '#8b5cf6', letterSpacing: '1px', marginBottom: '32px' }}>POWERED BY BEST-IN-CLASS PARTNERS</div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', flex: 1, alignItems: 'center' }}>
                            <div style={{ fontSize: '24px', fontWeight: 800, color: '#a78bfa' }}>stripe atlas</div>
                            <div style={{ fontSize: '20px', fontWeight: 600, color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>aws <span style={{ fontWeight: 300 }}>activate</span></div>
                            <div style={{ fontSize: '24px', fontWeight: 700, color: 'white' }}>Clerk</div>
                            <div style={{ fontSize: '24px', fontWeight: 600, color: 'white' }}>OpenAI</div>
                            <div style={{ fontSize: '22px', fontWeight: 700, color: 'white' }}><span style={{ border: '1px solid white', padding: '0 4px', borderRadius: '4px', marginRight: '6px' }}>N</span> Notion</div>
                        </div>
                    </div>
                </div>

                {/* Testimonials */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '80px' }}>
                    {[
                        { quote: "Zuniva turned our 36-hour hack into a real company in 9 days.", name: "Arjun K.", title: "Founder, Promptly" },
                        { quote: "The maturity score and investor introductions are game-changing.", name: "Maya R.", title: "Co-founder, DocuMind" },
                        { quote: "Finally, a platform that understands builders and moves fast.", name: "Kevin L.", title: "CTO, LayerOps" }
                    ].map((t, i) => (
                        <div key={i} style={{ background: 'rgba(20,20,25,0.6)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <div style={{ fontSize: '32px', color: '#6d28d9', fontFamily: 'serif', lineHeight: 0.5, marginTop: '10px' }}>"</div>
                            <p style={{ fontSize: '15px', color: '#d1d5db', lineHeight: 1.6, flex: 1 }}>{t.quote}</p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 30})`, backgroundSize: 'cover' }} />
                                <div>
                                    <div style={{ fontSize: '14px', fontWeight: 600, color: 'white' }}>{t.name}</div>
                                    <div style={{ fontSize: '12px', color: '#9ca3af' }}>{t.title}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </main>

            {/* Footer / CTA */}
            <footer style={{ position: 'relative', padding: '100px 48px 60px', textAlign: 'center', overflow: 'hidden' }}>
                <div style={{
                    position: 'absolute', bottom: '-20%', left: '10%', right: '10%', height: '50%',
                    background: 'radial-gradient(ellipse at bottom, rgba(109, 40, 217, 0.4) 0%, transparent 70%)',
                    zIndex: 0, pointerEvents: 'none'
                }}></div>
                <div style={{
                    position: 'absolute', bottom: '-50%', left: '-10%', right: '-10%', height: '80%',
                    borderTop: '1px solid rgba(139, 92, 246, 0.3)', borderRadius: '50%',
                    zIndex: 0, pointerEvents: 'none', boxShadow: '0 -20px 60px rgba(109, 40, 217, 0.2)'
                }}></div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                    <h2 style={{ fontSize: '40px', fontWeight: 700, marginBottom: '16px' }}>Ready to build what's next?</h2>
                    <p style={{ fontSize: '16px', color: '#9ca3af', marginBottom: '40px' }}>Join thousands of builders shipping the future with Zuniva.</p>
                    <button onClick={() => onNavigate('onboarding')} style={{
                        background: '#6d28d9', color: 'white', border: 'none',
                        padding: '16px 36px', borderRadius: '8px', fontSize: '16px', fontWeight: 600,
                        display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer',
                        boxShadow: '0 0 40px rgba(109, 40, 217, 0.6)'
                    }}>
                        Launch Your Project Now <ArrowRight size={18} />
                    </button>
                </div>
            </footer>
        </div>
    );
}

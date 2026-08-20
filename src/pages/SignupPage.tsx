import { useState } from 'react';
import { Mail, Lock, User, Briefcase } from 'lucide-react';

interface SignupPageProps {
    onSignup: () => void;
    onNavigate: (page: string) => void;
}

export default function SignupPage({ onSignup, onNavigate }: SignupPageProps) {
    const [accountType, setAccountType] = useState<'student' | 'company'>('student');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email && password && name) {
            onSignup();
        }
    };

    return (
        <div style={{
            minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)', fontFamily: 'Inter, sans-serif'
        }}>
            <div style={{
                background: 'rgba(20,20,25,0.8)', padding: '48px', borderRadius: '24px', width: '100%', maxWidth: '480px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.04)', border: '1px solid rgba(255,255,255,0.05)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                    <div style={{
                        width: '48px', height: '48px', borderRadius: '12px', margin: '0 auto 16px',
                        background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <span style={{ color: 'white', fontWeight: 800, fontSize: '20px', fontFamily: 'Plus Jakarta Sans' }}>Z</span>
                    </div>
                    <h1 style={{ fontSize: '24px', fontWeight: 800, color: 'white', fontFamily: 'Plus Jakarta Sans', marginBottom: '8px' }}>
                        Create an account
                    </h1>
                    <p style={{ color: '#9ca3af', fontSize: '14px' }}>Join the ZUNIVA builder network</p>
                </div>

                {/* Account Type Toggle */}
                <div style={{ display: 'flex', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', padding: '6px', marginBottom: '24px' }}>
                    <button
                        type="button"
                        onClick={() => setAccountType('student')}
                        style={{
                            flex: 1, padding: '10px', borderRadius: '8px', border: 'none',
                            background: accountType === 'student' ? 'white' : 'transparent',
                            color: accountType === 'student' ? '#0f172a' : '#64748b',
                            fontWeight: 600, fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                            cursor: 'pointer', boxShadow: accountType === 'student' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
                            fontFamily: 'Inter', transition: 'all 0.2s'
                        }}
                    >
                        <User size={14} /> Student / Builder
                    </button>
                    <button
                        type="button"
                        onClick={() => setAccountType('company')}
                        style={{
                            flex: 1, padding: '10px', borderRadius: '8px', border: 'none',
                            background: accountType === 'company' ? 'white' : 'transparent',
                            color: accountType === 'company' ? '#0f172a' : '#64748b',
                            fontWeight: 600, fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                            cursor: 'pointer', boxShadow: accountType === 'company' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none',
                            fontFamily: 'Inter', transition: 'all 0.2s'
                        }}
                    >
                        <Briefcase size={14} /> Company
                    </button>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#d1d5db', marginBottom: '8px' }}>
                            {accountType === 'student' ? 'Full Name' : 'Company Name'}
                        </label>
                        <input
                            type="text" required value={name} onChange={e => setName(e.target.value)}
                            placeholder={accountType === 'student' ? "Aarav Sharma" : "Nova Labs"}
                            style={{
                                width: '100%', padding: '12px 14px', borderRadius: '10px',
                                border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none'
                            }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#d1d5db', marginBottom: '8px' }}>Email Address</label>
                        <div style={{ position: 'relative' }}>
                            <Mail size={16} color="#94a3b8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                            <input
                                type="email" required value={email} onChange={e => setEmail(e.target.value)}
                                placeholder="name@college.edu"
                                style={{
                                    width: '100%', padding: '12px 14px 12px 40px', borderRadius: '10px',
                                    border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none'
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#d1d5db', marginBottom: '8px' }}>Password</label>
                        <div style={{ position: 'relative' }}>
                            <Lock size={16} color="#94a3b8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                            <input
                                type="password" required value={password} onChange={e => setPassword(e.target.value)}
                                placeholder="Create a password"
                                style={{
                                    width: '100%', padding: '12px 14px 12px 40px', borderRadius: '10px',
                                    border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none'
                                }}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: '100%', padding: '14px', marginTop: '16px', fontSize: '15px' }}>
                        Create Account
                    </button>

                    <button type="button" onClick={() => onSignup()} style={{
                        width: '100%', padding: '14px', background: 'rgba(20,20,25,0.8)', border: '1px solid #cbd5e1',
                        borderRadius: '10px', fontSize: '14px', fontWeight: 600, color: '#d1d5db',
                        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                        fontFamily: 'Inter'
                    }}>
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" style={{ width: '18px', height: '18px' }} />
                        Sign up with Google
                    </button>
                </form>

                <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#9ca3af' }}>
                    Already have an account?{' '}
                    <button onClick={() => onNavigate('login')} style={{
                        background: 'none', border: 'none', color: '#a78bfa', fontWeight: 600, cursor: 'pointer',
                        padding: 0, fontFamily: 'Inter'
                    }}>
                        Log in
                    </button>
                </div>
            </div>
        </div>
    );
}

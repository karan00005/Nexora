import { useState } from 'react';
import { Mail, Lock } from 'lucide-react';

interface LoginPageProps {
    onLogin: () => void;
    onNavigate: (page: string) => void;
}

export default function LoginPage({ onLogin, onNavigate }: LoginPageProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock authentication
        if (email && password) {
            onLogin();
        }
    };

    return (
        <div style={{
            minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: '#050505', fontFamily: 'Inter, sans-serif'
        }}>
            <div style={{
                background: 'rgba(20,20,25,0.8)', padding: '48px', borderRadius: '24px', width: '100%', maxWidth: '440px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.05)'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <div style={{
                        width: '48px', height: '48px', borderRadius: '12px', margin: '0 auto 16px',
                        background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 7H14.5L10.5 17H20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <h1 style={{ fontSize: '24px', fontWeight: 800, color: 'white', fontFamily: 'Plus Jakarta Sans', marginBottom: '8px' }}>
                        Welcome back
                    </h1>
                    <p style={{ color: '#9ca3af', fontSize: '14px' }}>Log in to your Zuniva account</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#d1d5db', marginBottom: '8px' }}>Email Address</label>
                        <div style={{ position: 'relative' }}>
                            <Mail size={16} color="#64748b" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="name@college.edu"
                                style={{
                                    width: '100%', padding: '12px 14px 12px 40px', borderRadius: '10px',
                                    border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.5)', fontSize: '14px', outline: 'none',
                                    transition: 'border-color 0.2s', color: 'white'
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                            <label style={{ fontSize: '13px', fontWeight: 600, color: '#d1d5db' }}>Password</label>
                            <span style={{ fontSize: '12px', color: '#a78bfa', textDecoration: 'none', fontWeight: 500, cursor: 'pointer' }}>Forgot password?</span>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <Lock size={16} color="#64748b" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="••••••••"
                                style={{
                                    width: '100%', padding: '12px 14px 12px 40px', borderRadius: '10px',
                                    border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(0,0,0,0.5)', fontSize: '14px', outline: 'none',
                                    transition: 'border-color 0.2s', color: 'white'
                                }}
                            />
                        </div>
                    </div>

                    <button type="submit" style={{ width: '100%', padding: '14px', marginTop: '8px', fontSize: '15px', background: '#6d28d9', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 600, cursor: 'pointer', boxShadow: '0 0 20px rgba(109, 40, 217, 0.4)' }}>
                        Log In
                    </button>

                    <button type="button" onClick={() => { onLogin(); }} style={{
                        width: '100%', padding: '14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '10px', fontSize: '14px', fontWeight: 600, color: 'white',
                        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                        fontFamily: 'Inter', marginTop: '-8px'
                    }}>
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" style={{ width: '18px', height: '18px' }} />
                        Continue with Google
                    </button>
                </form>

                <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#9ca3af' }}>
                    Don't have an account?{' '}
                    <button onClick={() => onNavigate('signup')} style={{
                        background: 'none', border: 'none', color: '#a78bfa', fontWeight: 600, cursor: 'pointer',
                        padding: 0, fontFamily: 'Inter'
                    }}>
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
}

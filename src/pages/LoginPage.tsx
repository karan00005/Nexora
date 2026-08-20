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
            background: 'linear-gradient(135deg, #f8fafc 0%, #eff6ff 100%)', fontFamily: 'Inter, sans-serif'
        }}>
            <div style={{
                background: 'white', padding: '48px', borderRadius: '24px', width: '100%', maxWidth: '440px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.04)', border: '1px solid #e2e8f0'
            }}>
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                    <div style={{
                        width: '48px', height: '48px', borderRadius: '12px', margin: '0 auto 16px',
                        background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                        <span style={{ color: 'white', fontWeight: 800, fontSize: '20px', fontFamily: 'Plus Jakarta Sans' }}>Z</span>
                    </div>
                    <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', fontFamily: 'Plus Jakarta Sans', marginBottom: '8px' }}>
                        Welcome back
                    </h1>
                    <p style={{ color: '#64748b', fontSize: '14px' }}>Log in to your ZUNIVA account</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#475569', marginBottom: '8px' }}>Email Address</label>
                        <div style={{ position: 'relative' }}>
                            <Mail size={16} color="#94a3b8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder="name@college.edu"
                                style={{
                                    width: '100%', padding: '12px 14px 12px 40px', borderRadius: '10px',
                                    border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none',
                                    transition: 'border-color 0.2s'
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                            <label style={{ fontSize: '13px', fontWeight: 600, color: '#475569' }}>Password</label>
                            <a href="#" style={{ fontSize: '12px', color: '#2563eb', textDecoration: 'none', fontWeight: 500 }}>Forgot password?</a>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <Lock size={16} color="#94a3b8" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
                            <input
                                type="password"
                                required
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                placeholder="••••••••"
                                style={{
                                    width: '100%', padding: '12px 14px 12px 40px', borderRadius: '10px',
                                    border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none',
                                    transition: 'border-color 0.2s'
                                }}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn-primary" style={{ width: '100%', padding: '14px', marginTop: '8px', fontSize: '15px' }}>
                        Log In
                    </button>

                    <button type="button" onClick={() => onLogin()} style={{
                        width: '100%', padding: '14px', background: 'white', border: '1px solid #cbd5e1',
                        borderRadius: '10px', fontSize: '14px', fontWeight: 600, color: '#475569',
                        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                        fontFamily: 'Inter', marginTop: '-8px'
                    }}>
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" style={{ width: '18px', height: '18px' }} />
                        Continue with Google
                    </button>
                </form>

                <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#64748b' }}>
                    Don't have an account?{' '}
                    <button onClick={() => onNavigate('signup')} style={{
                        background: 'none', border: 'none', color: '#2563eb', fontWeight: 600, cursor: 'pointer',
                        padding: 0, fontFamily: 'Inter'
                    }}>
                        Sign up
                    </button>
                </div>
            </div>
        </div>
    );
}

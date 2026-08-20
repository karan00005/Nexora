import { Bell, Search, LogOut } from 'lucide-react';

interface NavbarProps {
    onNavigate: (page: string) => void;
    currentPage: string;
    showToast: (msg: string) => void;
    mode: 'student' | 'company';
    onModeSwitch: () => void;
    onLogout: () => void;
}

export default function Navbar({ onNavigate, currentPage, showToast, mode, onModeSwitch, onLogout }: NavbarProps) {
    const studentLinks = [
        { key: 'dashboard', label: 'Home' },
        { key: 'opportunities', label: 'Opportunities' },
        { key: 'challenges', label: 'Challenges' },
        { key: 'teams', label: 'Teams' },
        { key: 'mentors', label: 'Mentors' },
    ];

    const companyLinks = [
        { key: 'company-dashboard', label: 'Dashboard' },
        { key: 'company-talent', label: 'Talent' },
        { key: 'post-problem', label: 'Post Problem' },
        { key: 'challenges', label: 'Challenges' },
    ];

    const links = mode === 'student' ? studentLinks : companyLinks;

    return (
        <header style={{
            position: 'sticky',
            top: 0,
            zIndex: 100,
            background: 'rgba(5,5,5,0.8)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
            padding: '0 24px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
        }}>
            {/* Logo */}
            <div
                onClick={() => onNavigate(mode === 'student' ? 'dashboard' : 'company-dashboard')}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', flexShrink: 0 }}
            >
                <div style={{
                    width: '32px', height: '32px',
                    background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
                    borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 7H14.5L10.5 17H20" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                <span style={{ fontFamily: 'Plus Jakarta Sans', fontWeight: 800, fontSize: '18px', color: 'white', letterSpacing: '-0.5px' }}>Zuniva</span>
            </div>

            {/* Nav Links */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '4px', flex: 1 }}>
                {links.map(link => (
                    <button
                        key={link.key}
                        onClick={() => onNavigate(link.key)}
                        style={{
                            padding: '6px 14px',
                            borderRadius: '8px',
                            border: 'none',
                            background: currentPage === link.key ? 'rgba(109, 40, 217, 0.1)' : 'transparent',
                            color: currentPage === link.key ? '#a78bfa' : '#9ca3af',
                            fontWeight: currentPage === link.key ? 600 : 500,
                            fontSize: '14px',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                            fontFamily: 'Inter, sans-serif',
                        }}
                    >
                        {link.label}
                    </button>
                ))}
            </nav>

            {/* Right side */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                {/* Search */}
                <div style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '8px', padding: '7px 12px',
                    width: '200px',
                }}>
                    <Search size={14} color="#64748b" />
                    <input
                        placeholder="Search..."
                        style={{ border: 'none', background: 'transparent', fontSize: '13px', color: 'white', outline: 'none', width: '100%', fontFamily: 'Inter' }}
                    />
                </div>

                {/* Mode switcher */}
                <button
                    onClick={onModeSwitch}
                    style={{
                        padding: '6px 12px', borderRadius: '8px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        background: mode === 'company' ? '#6d28d9' : 'rgba(255,255,255,0.05)',
                        color: 'white',
                        fontSize: '12px', fontWeight: 600, cursor: 'pointer',
                        transition: 'all 0.2s ease', fontFamily: 'Inter',
                        display: 'flex', alignItems: 'center', gap: '4px',
                    }}
                >
                    {mode === 'student' ? '🏢 Company View' : '👤 Student View'}
                </button>

                {/* Notifications */}
                <button
                    onClick={() => showToast('3 new notifications!')}
                    style={{
                        position: 'relative', padding: '7px', borderRadius: '8px',
                        border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)',
                        cursor: 'pointer', display: 'flex', alignItems: 'center',
                    }}
                >
                    <Bell size={16} color="#9ca3af" />
                    <span style={{
                        position: 'absolute', top: '4px', right: '4px',
                        width: '8px', height: '8px', borderRadius: '50%',
                        background: '#ef4444', border: '2px solid #050505',
                    }} />
                </button>

                {/* Avatar */}
                <button
                    onClick={() => onNavigate(mode === 'student' ? 'profile' : 'company-dashboard')}
                    style={{
                        width: '36px', height: '36px', borderRadius: '50%',
                        background: 'linear-gradient(135deg, #2563eb, #4f46e5)',
                        border: 'none', cursor: 'pointer',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'white', fontWeight: 700, fontSize: '13px',
                        fontFamily: 'Inter',
                    }}
                >
                    {mode === 'student' ? 'AS' : 'NL'}
                </button>

                {/* Log Out */}
                <button
                    onClick={onLogout}
                    style={{
                        padding: '7px', borderRadius: '8px', border: 'none', background: 'transparent',
                        cursor: 'pointer', display: 'flex', alignItems: 'center', color: '#9ca3af'
                    }}
                    title="Log Out"
                >
                    <LogOut size={16} />
                </button>
            </div>
        </header>
    );
}

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
        <header className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-6 h-16 w-full gap-4 md:gap-6 backdrop-blur-md"
            style={{
                background: 'rgba(5,5,5,0.8)',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
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
            <nav className="flex items-center gap-1 flex-1 overflow-x-auto no-scrollbar" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
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
            <div className="flex items-center gap-2 md:gap-3 shrink-0">
                {/* Search */}
                <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-lg border" style={{
                    background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)', width: '200px'
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
                    className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-lg border text-xs font-semibold text-white transition-all duration-200"
                    style={{
                        borderColor: 'rgba(255,255,255,0.1)',
                        background: mode === 'company' ? '#6d28d9' : 'rgba(255,255,255,0.05)',
                        fontFamily: 'Inter'
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
                    className="p-1.5 rounded-lg flex items-center text-gray-400 border-none bg-transparent cursor-pointer"
                    title="Log Out"
                >
                    <LogOut size={16} />
                </button>
            </div>
        </header>
    );
}

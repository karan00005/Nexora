interface MatchRingProps {
    score: number;
    size?: number;
    fontSize?: number;
}

export function MatchRing({ score, size = 64, fontSize = 18 }: MatchRingProps) {
    const radius = (size - 8) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;
    const color = score >= 90 ? '#10b981' : score >= 75 ? '#f59e0b' : '#64748b';

    return (
        <div style={{ position: 'relative', width: size, height: size, flexShrink: 0 }}>
            <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
                <circle
                    cx={size / 2} cy={size / 2} r={radius}
                    fill="none" stroke="#e2e8f0" strokeWidth="5"
                />
                <circle
                    cx={size / 2} cy={size / 2} r={radius}
                    fill="none" stroke={color} strokeWidth="5"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 1s ease' }}
                />
            </svg>
            <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
            }}>
                <span style={{ fontSize, fontWeight: 800, color, lineHeight: 1, fontFamily: 'Plus Jakarta Sans' }}>
                    {score}
                </span>
                <span style={{ fontSize: 9, color: '#94a3b8', fontWeight: 600, letterSpacing: '0.05em' }}>MATCH</span>
            </div>
        </div>
    );
}

interface SkillBadgeProps {
    skill: string;
    variant?: 'blue' | 'green' | 'orange' | 'purple' | 'gray';
}

export function SkillBadge({ skill, variant = 'blue' }: SkillBadgeProps) {
    const colors = {
        blue: { bg: '#eff6ff', text: '#2563eb', border: '#bfdbfe' },
        green: { bg: '#f0fdf4', text: '#16a34a', border: '#bbf7d0' },
        orange: { bg: '#fff7ed', text: '#ea580c', border: '#fed7aa' },
        purple: { bg: '#f5f3ff', text: '#7c3aed', border: '#ddd6fe' },
        gray: { bg: '#f8fafc', text: '#64748b', border: '#e2e8f0' },
    };
    const c = colors[variant];
    return (
        <span style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '3px 10px', borderRadius: '999px',
            fontSize: '11px', fontWeight: 600,
            background: c.bg, color: c.text, border: `1px solid ${c.border}`,
        }}>
            {skill}
        </span>
    );
}

interface ProgressBarProps {
    value: number;
    label?: string;
    color?: string;
}

export function ProgressBar({ value, label, color = '#2563eb' }: ProgressBarProps) {
    return (
        <div>
            {label && (
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '13px', color: '#64748b', fontWeight: 500 }}>{label}</span>
                    <span style={{ fontSize: '13px', color: '#0f172a', fontWeight: 700 }}>{value}%</span>
                </div>
            )}
            <div style={{ height: '6px', borderRadius: '999px', background: '#e2e8f0', overflow: 'hidden' }}>
                <div style={{
                    height: '100%', width: `${value}%`,
                    borderRadius: '999px', background: color,
                    transition: 'width 1s ease',
                }} />
            </div>
        </div>
    );
}

interface StatCardProps {
    value: string | number;
    label: string;
    icon?: string;
    color?: string;
}

export function StatCard({ value, label, icon, color = '#2563eb' }: StatCardProps) {
    return (
        <div style={{
            background: 'white', borderRadius: '14px',
            border: '1px solid #e2e8f0', padding: '20px',
            textAlign: 'center', flex: 1,
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
        }}>
            {icon && <div style={{ fontSize: '22px', marginBottom: '8px' }}>{icon}</div>}
            <div style={{ fontSize: '28px', fontWeight: 800, color, fontFamily: 'Plus Jakarta Sans', lineHeight: 1 }}>
                {value}
            </div>
            <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '6px', fontWeight: 500 }}>
                {label}
            </div>
        </div>
    );
}

interface ProofScoreRingProps {
    score: number;
    size?: number;
}

export function ProofScoreRing({ score, size = 120 }: ProofScoreRingProps) {
    const radius = (size - 12) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (score / 100) * circumference;

    return (
        <div style={{ position: 'relative', width: size, height: size }}>
            <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
                <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="#e2e8f0" strokeWidth="8" />
                <circle
                    cx={size / 2} cy={size / 2} r={radius}
                    fill="none"
                    stroke="url(#proofGradient)"
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    style={{ transition: 'stroke-dashoffset 1.5s ease' }}
                />
                <defs>
                    <linearGradient id="proofGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                </defs>
            </svg>
            <div style={{
                position: 'absolute', inset: 0,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
            }}>
                <span style={{ fontSize: '28px', fontWeight: 900, color: '#0f172a', lineHeight: 1, fontFamily: 'Plus Jakarta Sans' }}>
                    {score}
                </span>
                <span style={{ fontSize: '10px', color: '#64748b', fontWeight: 600, letterSpacing: '0.08em' }}>PROOF SCORE</span>
            </div>
        </div>
    );
}

interface AvatarProps {
    initials: string;
    size?: number;
    color?: string;
}

export function Avatar({ initials, size = 40, color }: AvatarProps) {
    const colors = ['#2563eb', '#4f46e5', '#7c3aed', '#db2777', '#059669', '#d97706'];
    const idx = initials.charCodeAt(0) % colors.length;
    const bg = color || colors[idx];
    return (
        <div style={{
            width: size, height: size, borderRadius: '50%',
            background: `linear-gradient(135deg, ${bg}, ${bg}cc)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 700,
            fontSize: size * 0.34,
            fontFamily: 'Plus Jakarta Sans',
            flexShrink: 0,
        }}>
            {initials}
        </div>
    );
}

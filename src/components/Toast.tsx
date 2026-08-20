import { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
    message: string;
    onClose: () => void;
}

export function Toast({ message, onClose }: ToastProps) {
    useEffect(() => {
        const timer = setTimeout(onClose, 3500);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div style={{
            position: 'fixed', bottom: '24px', right: '24px',
            background: '#0a1628', color: 'white',
            padding: '14px 18px', borderRadius: '12px',
            fontSize: '14px', fontWeight: 500,
            display: 'flex', alignItems: 'center', gap: '10px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
            animation: 'fadeIn 0.3s ease',
            zIndex: 9999, maxWidth: '360px',
            border: '1px solid rgba(255,255,255,0.1)',
        }}>
            <CheckCircle size={16} color="#10b981" />
            {message}
            <button
                onClick={onClose}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', marginLeft: 'auto', display: 'flex' }}
            >
                <X size={14} />
            </button>
        </div>
    );
}

interface ModalProps {
    title: string;
    children: React.ReactNode;
    onClose: () => void;
    width?: number;
}

export function Modal({ title, children, onClose, width = 560 }: ModalProps) {
    return (
        <div
            style={{
                position: 'fixed', inset: 0,
                background: 'rgba(0,0,0,0.5)',
                backdropFilter: 'blur(4px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                zIndex: 1000, padding: '24px',
            }}
            onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
            <div style={{
                background: 'white', borderRadius: '16px',
                width: '100%', maxWidth: width,
                maxHeight: '85vh', overflowY: 'auto',
                boxShadow: '0 40px 120px rgba(0,0,0,0.2)',
                animation: 'fadeIn 0.25s ease',
            }}>
                <div style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '20px 24px', borderBottom: '1px solid #e2e8f0',
                    position: 'sticky', top: 0, background: 'white', zIndex: 1, borderRadius: '16px 16px 0 0',
                }}>
                    <h2 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', fontFamily: 'Plus Jakarta Sans' }}>{title}</h2>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#94a3b8', display: 'flex', borderRadius: '6px', padding: '4px' }}>
                        <X size={18} />
                    </button>
                </div>
                <div style={{ padding: '24px' }}>{children}</div>
            </div>
        </div>
    );
}

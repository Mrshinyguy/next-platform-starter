'use client';

export function ScrollToApply({ className, children }) {
    const handleClick = (e) => {
        e.preventDefault();
        const el = document.getElementById('apply');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <button onClick={handleClick} className={className}>
            {children}
        </button>
    );
}

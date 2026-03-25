'use client';

import { useState } from 'react';

export function JoinTeamForm() {
    const [status, setStatus] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setStatus('pending');
            setError(null);
            const formData = new FormData(event.target);
            const res = await fetch('/__forms.html', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString(),
            });
            if (res.status === 200) {
                setStatus('ok');
                event.target.reset();
            } else {
                setStatus('error');
                setError(`${res.status} ${res.statusText}`);
            }
        } catch (e) {
            setStatus('error');
            setError(`${e}`);
        }
    };

    return (
        <form className="text-left space-y-6 max-w-lg mx-auto" name="join-team" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="join-team" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 border border-neutral-300 text-neutral-900 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                        placeholder="Your name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-neutral-300 text-neutral-900 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                        placeholder="Your email"
                    />
                </div>
            </div>
            <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                    Phone
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    onKeyDown={(e) => {
                        if (!/[0-9]/.test(e.key) && !['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) {
                            e.preventDefault();
                        }
                    }}
                    onInput={(e) => {
                        e.target.value = e.target.value.replace(/[^0-9]/g, '');
                    }}
                    className="w-full px-4 py-3 border border-neutral-300 text-neutral-900 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                    placeholder="Your phone number"
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-neutral-300 text-neutral-900 text-sm focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors resize-none"
                    placeholder="Let's hear more about yourself and your experience..."
                />
            </div>
            <button type="submit" className="btn btn-primary w-full" disabled={status === 'pending'}>
                {status === 'pending' ? 'Sending...' : 'Send Application'}
            </button>
            {status === 'ok' && (
                <p className="text-green-600 text-sm text-center">Application sent successfully! We&apos;ll be in touch within 48 hours.</p>
            )}
            {status === 'error' && (
                <p className="text-red-600 text-sm text-center">Something went wrong: {error}. Please try again.</p>
            )}
        </form>
    );
}

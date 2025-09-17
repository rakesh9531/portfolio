// src/components/ContactForm.js
import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('Sending...');
        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({ apikey: PORTFOLIO_DATA.web3formsKey, ...formData }),
        });
        const result = await res.json();
        if (result.success) {
            setStatus('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } else {
            setStatus('Error: ' + result.message);
        }
        setIsSubmitting(false);
        setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group"><label htmlFor="name">Name</label><input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required /></div>
            <div className="form-group"><label htmlFor="email">Email</label><input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required /></div>
            <div className="form-group"><label htmlFor="message">Message</label><textarea id="message" name="message" value={formData.message} rows="5" onChange={handleChange} required></textarea></div>
            <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {status && <p className="form-status">{status}</p>}
        </form>
    );
};
export default ContactForm;
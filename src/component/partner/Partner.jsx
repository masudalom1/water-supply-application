import React, { useState } from 'react';
import './partner.css'
// PartnerForm Component
const PartnerForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const partnerDetails = { name, email, company, message };
        onSubmit(partnerDetails);
        setName('');
        setEmail('');
        setCompany('');
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Company:</label>
                <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Message:</label>
                <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

// Partner Component
function Partner() {
    const [partners, setPartners] = useState([]);

    const handleFormSubmit = (partnerDetails) => {
        setPartners((prevPartners) => [...prevPartners, partnerDetails]);
    };

    return (
        <div>
            <h1>Partner with Us</h1>
            <PartnerForm onSubmit={handleFormSubmit} />
            <div className="partner-cards">
                {partners.map((partner, index) => (
                    <div key={index} className="partner-card">
                        <h3>{partner.name}</h3>
                        <p><strong>Email:</strong> {partner.email}</p>
                        <p><strong>Company:</strong> {partner.company}</p>
                        <p><strong>Message:</strong> {partner.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Partner;

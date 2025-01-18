import React from 'react';
import '../styles/Features.css';

const Features = () => {
    return (
        <div class="features-section">
            <div class="features-heading">
                <p class="features-subtitle">Features</p>
                <h2 class="features-title">Analytics that feels like it’s from the future</h2>
                <p class="features-description">
                    Powerful, self-serve product and growth analytics to help you convert,
                    engage, and retain more users. Trusted by over 4,000 startups.
                </p>
            </div>
            <div class="features-grid">
                <div class="feature-item">
                    <div class="feature-icon">🔒</div>
                    <h3 class="feature-title">Share team inboxes</h3>
                    <p class="feature-description">
                        Whether you have a team of 2 or 200, our shared team inboxes keep everyone
                        on the same page and in the loop.
                    </p>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">⚡</div>
                    <h3 class="feature-title">Deliver instant answers</h3>
                    <p class="feature-description">
                        An all-in-one customer service platform that helps you balance everything
                        your customers need to be happy.
                    </p>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">📊</div>
                    <h3 class="feature-title">Manage your team with reports</h3>
                    <p class="feature-description">
                        Measure what matters with Untitled’s easy-to-use reports. You can filter,
                        export, and drill down on the data in a couple of clicks.
                    </p>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">💬</div>
                    <h3 class="feature-title">Connect with customers</h3>
                    <p class="feature-description">
                        Solve a problem or close a sale in real-time with chat. If no one is
                        available, customers are seamlessly routed to email without confusion.
                    </p>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">🔌</div>
                    <h3 class="feature-title">Connect the tools you already use</h3>
                    <p class="feature-description">
                        Explore 100+ integrations that make your day-to-day workflow more
                        efficient and familiar. Plus, our extensive developer tools.
                    </p>
                </div>
                <div class="feature-item">
                    <div class="feature-icon">🤝</div>
                    <h3 class="feature-title">Our people make the difference</h3>
                    <p class="feature-description">
                        We’re an extension of your customer service team, and all of our resources
                        are free. Chat to our friendly team 24/7 when you need help.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Features;
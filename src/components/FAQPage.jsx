import React, { useState } from 'react';
import '../styles/FAQPage.css';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    { question: "Can I change my plan later?", answer: "Yes, you can upgrade or downgrade your plan anytime from your account settings." },
    { question: "What is your cancellation policy?", answer: "You can cancel your subscription anytime. Refunds are provided based on our refund policy." },
    { question: "Can other info be added to an invoice?", answer: "Yes, you can add additional information to your invoices from the billing section." },
    { question: "How does billing work?", answer: "We bill you monthly or annually based on your selected plan." },
    { question: "How do I change my account email?", answer: "You can update your email in the account settings section." },
  ];

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <p>Everything you need to know about the product and billing.</p>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <div
              className={`faq-question ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="faq-icon">{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
      <div className="contact-section">
        <h3>Still have questions?</h3>
        <p>Can't find the answer you're looking for? Please chat with our friendly team.</p>
        <button className="contact-button">Get in touch</button>
      </div>
    </div>
  );
};

export default FAQPage;


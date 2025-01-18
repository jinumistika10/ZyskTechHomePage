import React from 'react';
import '../styles/Testimonials.css';
import SisyphusImg from '../images/sisyphus.png';
import ProfileImg from '../images/profile.png';

const Testimonials = () => {
    return (
        <div class="testimonial-section">
            <div class="testimonial-logo">
                <img src={SisyphusImg} alt="Sisyphus Logo" />
            </div>
            <div class="testimonial-content">
                <p class="testimonial-text">
                    "We’ve been using Untitled to kickstart every new project and can’t imagine
                    working without it."
                </p>
                <div class="testimonial-author">
                    <img src={ProfileImg} alt="Candice Wu" class="author-image" />
                    <div class="author-info">
                        <h4 class="author-name">Candice Wu</h4>
                        <p class="author-title">Product Manager, Sisyphus</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;
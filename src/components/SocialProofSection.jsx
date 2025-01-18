import React from 'react';
import '../styles/SocialProof.css';
import BoltshiftImg from '../images/Boltshift.png';
import FeatherdevImg from '../images/featherdev.png';
import GlobalBankImg from '../images/globalbank.png';
import lightboxImg from '../images/lightbox.png';
import NietzschefImg from '../images/Nietzsche.png';
import SpherulefImg from '../images/spherule.png';


const SocialProofSection = () => {
    return (
        <div className="social-proof-container">
            <p className="social-proof-title">Join 4,000+ companies already growing</p>
            <div className="logo-container">
                <img src={BoltshiftImg} alt="Boltshift Logo" className="company-logo" />
                <img src={lightboxImg} alt="Lightbox Logo" className="company-logo" />
                <img src={FeatherdevImg} alt="FeatherDev Logo" className="company-logo" />
                <img src={SpherulefImg} alt="Spherule Logo" className="company-logo" />
                <img src={GlobalBankImg} alt="GlobalBank Logo" className="company-logo" />
                <img src={NietzschefImg} alt="Nietzsche Logo" className="company-logo" />
            </div>
            <hr className="custom-line" />
        </div>    
    );
}

export default SocialProofSection;
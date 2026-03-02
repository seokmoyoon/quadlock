import { useState } from 'react';
import './ProductPage.css';

const ProductPage = () => {
    const [phone, setPhone] = useState("");
    const [poncho, setPoncho] = useState("");
    const [vibration, setVibration] = useState("");

    return (
        <div className="product-page container">
            <div className="pdp-layout">
                {/* Left column: Gallery */}
                <div className="pdp-gallery">
                    <div className="main-media">
                        <img src="https://cdn.sanity.io/images/3azemr64/production/f7612cb3fae2af4cd6742fc43b553adc50271040-1024x768.jpg" alt="Product" />
                        <button className="watch-video-btn">
                            <span className="play-icon">▶</span>
                            WATCH VIDEO
                            <small>KNOW IT ALL (1:18)</small>
                        </button>
                    </div>
                </div>

                {/* Right column: Info & Selection */}
                <div className="pdp-info">
                    <h1 className="pdp-title">1" Ball Adaptor Motorcycle Kits - iPhone</h1>
                    <div className="pdp-reviews">
                        <span className="stars">★★★★★</span>
                        <span className="count">16,611 REVIEWS</span>
                    </div>

                    <div className="already-selected">
                        <div className="selected-card">
                            <img src="https://www.quadlockcase.asia/cdn/shop/products/MOTO_BallAdaptor_600x600_1911-197_200x200.png" alt="Base" />
                            <div>
                                <p className="label">ALREADY SELECTED</p>
                                <p className="value">1" Ball Adaptor</p>
                            </div>
                        </div>
                    </div>

                    <div className="selection-steps">
                        <div className="step">
                            <div className="step-header">
                                <span className="step-num">1.</span>
                                <span className="step-title">SELECT YOUR PHONE</span>
                                <a href="#" className="step-info">What device do I have? <i>i</i></a>
                            </div>
                            <select className="pdp-select" value={phone} onChange={(e) => setPhone(e.target.value)}>
                                <option value="">Pick your Phone</option>
                                <option value="iphone15">iPhone 15 Pro Max</option>
                                <option value="iphone15pro">iPhone 15 Pro</option>
                                <option value="iphone14">iPhone 14 Pro Max</option>
                            </select>
                        </div>

                        <div className={`step ${!phone ? 'disabled' : ''}`}>
                            <div className="step-header">
                                <span className="step-num">2.</span>
                                <span className="step-title">SELECT A WEATHER RESISTANT PONCHO</span>
                                <a href="#" className="step-info">More Info <i>i</i></a>
                            </div>
                            <select className="pdp-select" disabled={!phone}>
                                <option value="">Choose a Case first</option>
                            </select>
                        </div>

                        <div className="step">
                            <div className="step-header">
                                <span className="step-num">3.</span>
                                <span className="step-title">SELECT A VIBRATION DAMPENER</span>
                                <a href="#" className="step-info">More Info <i>i</i></a>
                            </div>
                            <select className="pdp-select">
                                <option value="">Pick a Vibration Dampener</option>
                            </select>
                        </div>
                    </div>

                    <button className="add-to-cart-btn" disabled={!phone}>
                        🔒 ADD TO CART
                    </button>

                    <div className="charging-option">
                        <div className="option-header">
                            <span>+ CHARGING OPTION</span>
                            <span className="from-price">From $34.99 ▼</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;

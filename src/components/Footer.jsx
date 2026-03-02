import './Footer.css';

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="container footer-inner">
                <div className="footer-columns">
                    <div className="footer-col">
                        <h4>Shop By</h4>
                        <ul>
                            <li><a href="#">Motorcycle</a></li>
                            <li><a href="#">Car</a></li>
                            <li><a href="#">Cycle</a></li>
                            <li><a href="#">Running</a></li>
                            <li><a href="#">Shop All</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Customers</h4>
                        <ul>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Warranty</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>About</h4>
                        <ul>
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">Ambassadors</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-col social-col">
                        <h4>Follow Us</h4>
                        <div className="social-icons">
                            {/* Simplified icons */}
                            <div className="social-item">I</div>
                            <div className="social-item">f</div>
                            <div className="social-item">T</div>
                            <div className="social-item">X</div>
                        </div>
                        <div className="reviews-badge">
                            <div className="stars">★★★★★</div>
                            <p>153K+ REVIEWS</p>
                            <p className="rating">4.8 / 5.0</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2024 Quad Lock Asia Clone. Hand-crafted for perfection.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

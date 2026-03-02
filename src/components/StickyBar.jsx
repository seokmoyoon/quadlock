import './StickyBar.css';

const StickyBar = () => {
    return (
        <div className="sticky-bar">
            <div className="container sticky-inner">
                <div className="sticky-product">
                    <img src="https://www.quadlockcase.asia/cdn/shop/products/MOTO_BallAdaptor_600x600_1911-197_200x200.png" alt="Product" />
                    <div className="sticky-text">
                        <span className="p-label">IN YOUR KIT</span>
                    </div>
                </div>

                <div className="sticky-actions">
                    <div className="sticky-price">
                        <span className="price-label">From</span>
                        <span className="amount">$69.98 USD</span>
                        <div className="free-shipping">YOU HAVE EARNED FREE SHIPPING! 📦</div>
                    </div>
                    <button className="sticky-btn">
                        🔒 ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StickyBar;

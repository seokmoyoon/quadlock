import './Header.css';

const Header = () => {
  return (
    <header className="main-header">
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <a href="#">ACCOUNT LOGIN</a>
          </div>
          <div className="top-bar-center">
            <span>FREE SHIPPING ON ORDERS OVER $69 <span className="info-icon">i</span></span>
          </div>
          <div className="top-bar-right">
            <a href="#">SUPPORT</a>
            <div className="country-selector">
              <img src="https://flagcdn.com/w20/sg.png" alt="SG" />
              <span>ASIA</span>
              <span className="arrow">▼</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="nav-bar">
        <div className="container nav-bar-inner">
          <div className="logo">
            <svg viewBox="0 0 100 100" width="40" height="40" className="logo-icon">
              <rect x="10" y="10" width="80" height="80" fill="#004EB5" rx="10" />
              <path d="M30 30 L70 70 M70 30 L30 70" stroke="white" strokeWidth="8" strokeLinecap="round" />
            </svg>
            <span className="logo-text">QUAD LOCK</span>
          </div>
          
          <div className="nav-actions">
            <button className="promo-badge">
              10% OFF <span className="badge-count">1</span>
            </button>
            <div className="shipping-info">
              SHIPPING <span className="info-icon">i</span>
            </div>
            <div className="cart-icon">
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6h15l-1.5 9h-11.5l-2-12h-3" />
                <circle cx="9" cy="20" r="1.5" />
                <circle cx="18" cy="20" r="1.5" />
              </svg>
            </div>
            <div className="menu-icon">
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

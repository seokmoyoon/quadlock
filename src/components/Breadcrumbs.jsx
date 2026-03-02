import './Breadcrumbs.css';

const Breadcrumbs = () => {
    return (
        <div className="breadcrumbs container">
            <div className="crumb-links">
                <a href="/">HOME</a> / <a href="#">SHOP IPHONE</a> / <span>1" BALL ADAPTOR MOTORCYCLE KITS - IPHONE</span>
            </div>
            <div className="share-links">
                <span>SHARE THIS:</span>
                <a href="#" className="share-icon">f</a>
                <a href="#" className="share-icon">𝕏</a>
            </div>
        </div>
    );
};

export default Breadcrumbs;

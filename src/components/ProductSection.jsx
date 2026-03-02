import './ProductSection.css';

const products = [
    {
        title: 'Ducati x Quad Lock',
        subtitle: 'Limited Edition Collection',
        img: 'https://www.quadlockcase.asia/cdn/shop/files/web-fs-desktop-ducati-x-quadlock-01.jpg?v=1770638665',
        link: '#'
    },
    {
        title: 'Galaxy S26 MAG Cases',
        subtitle: 'Now Available',
        img: 'https://www.quadlockcase.asia/cdn/shop/files/web-fs-desktop-gs26-02.jpg?v=1770850805',
        link: '#'
    }
];

const ProductSection = () => {
    return (
        <section className="product-section container">
            <div className="section-header">
                <p className="subtitle">WHAT'S HOT</p>
                <h2 className="section-title">NEW RELEASES</h2>
            </div>

            <div className="product-banners">
                {products.map((product) => (
                    <div key={product.title} className="product-banner">
                        <img src={product.img} alt={product.title} />
                        <div className="banner-content">
                            <span className="badge">NEW</span>
                            <h3>{product.title}</h3>
                            <p>{product.subtitle}</p>
                            <button className="btn-primary">BUY NOW</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProductSection;

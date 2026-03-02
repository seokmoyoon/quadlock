import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-video-container">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video"
                    src="https://cdn.shopify.com/videos/c/o/v/4803ae5d980844eaa9bf2d5a451966e7.mp4"
                ></video>
                <div className="video-overlay"></div>
            </div>

            <div className="hero-content container">
                <div className="hero-text">
                    <h2>The Next Level of Quad Lock</h2>
                    <h1>EXPLORE QUAD LOCK MAG™</h1>
                    <div className="hero-actions">
                        <button className="btn-primary">EXPLORE MAG</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

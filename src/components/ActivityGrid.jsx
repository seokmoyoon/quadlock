import './ActivityGrid.css';

const activities = [
    { name: 'Motorcycle', img: 'https://www.quadlockcase.asia/cdn/shop/collections/2204-086_Collection-Image_4x5_Moto-B_320x_crop_center.jpg?v=1649377394' },
    { name: 'Car', img: 'https://www.quadlockcase.asia/cdn/shop/collections/MOB-Collect-Btns-DRIVE-RHD_1710-144_320x_crop_center.jpg?v=1665025106' },
    { name: 'Cycle', img: 'https://www.quadlockcase.asia/cdn/shop/collections/2204-086_Collection-Image_4x5_Cycle_320x_crop_center.jpg?v=1665025165' },
    { name: 'Off-Road', img: 'https://www.quadlockcase.asia/cdn/shop/collections/big-MOB-Collect_OFFROAD_2_320x_crop_center.jpg?v=1665025200' },
];

const ActivityGrid = () => {
    return (
        <section className="activity-grid container">
            <h2 className="section-title">Shop by Activity</h2>
            <div className="grid">
                {activities.map((activity) => (
                    <div key={activity.name} className="activity-card">
                        <div className="image-container">
                            <img src={activity.img} alt={activity.name} />
                            <div className="overlay">
                                <h3>{activity.name}</h3>
                                <span className="shop-text">Shop Now</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ActivityGrid;

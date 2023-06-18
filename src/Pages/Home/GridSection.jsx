
const GridSection = () => {
    return (
        <div>
            <div className="row">
                <div className="col grass">
                    <div className="p-5">
                        <h3>MY ADS</h3>
                        <div></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur blanditiis facere, suscipit atque doloribus ab?</p>
                        <button className="viewMore">view more</button>
                    </div>
                </div>
                <div className="col camel">
                    <div className="p-5">
                        <h3>$50.99</h3>
                        <div>
                            <h2>Camel</h2>
                            <p>Lorem ipsum dolor sit.</p>
                            <button className="viewMore"> View More</button>
                        </div>
                    </div>
                </div>
                <div className="col goat">
                    <div className="p-5">
                        <h3>$50.99</h3>
                        <div>
                            <h2>Camel</h2>
                            <p>Lorem ipsum dolor sit.</p>
                            <button className="viewMore"> View More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col sheep">
                    <div className="p-5">
                        <h3>$30.99</h3>
                        <div>
                            <h2>SHEEP</h2>
                            <p>Lorem ipsum dolor sit.</p>
                            <button className="viewMore"> View More</button>
                        </div>
                    </div>
                </div>
                <div className="col cow">
                    <div className="p-5">
                        <h3>$45.99</h3>
                        <div>
                            <h2>COW</h2>
                            <p>Lorem ipsum dolor sit.</p>
                            <button className="viewMore"> View More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridSection;
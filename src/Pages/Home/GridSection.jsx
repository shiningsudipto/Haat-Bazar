
const GridSection = () => {
    return (
        <div className="container my-5">
            <div className="row g-4">
                <div className="col-3 ">
                    <div className="p-5 grass">
                        <h3>MY ADS</h3>
                        <div></div>
                        <p>Lorem ipsum dolor sit amet consectetur .</p>
                        <button className="viewMore">view more</button>
                    </div>
                </div>
                <div className="col-5 ">
                    <div className="p-5 camel">
                        <h3>$50.99</h3>
                        <div>
                            <h2>Camel</h2>
                            <p>Lorem ipsum dolor sit.</p>
                            <button className="viewMore"> View More</button>
                        </div>
                    </div>
                </div>
                <div className="col-4 ">
                    <div className="p-5 goat">
                        <h3>$50.99</h3>
                        <div>
                            <h2>Camel</h2>
                            <p>Lorem ipsum dolor sit.</p>
                            <button className="viewMore"> View More</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row my-4">
                <div className="col-4">
                    <div className="p-5 sheep">
                        <h3>$30.99</h3>
                        <div>
                            <h2>SHEEP</h2>
                            <p>Lorem ipsum dolor sit.</p>
                            <button className="viewMore"> View More</button>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="p-5 cow">
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
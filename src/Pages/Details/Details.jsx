import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import imgCamel from '../../assets/detailsCamel.png'
import useMyAds from "../../Hooks/useMyAds";
import { FaRegHeart } from "react-icons/fa";
import addImage from '../../assets/add1.jpg'
import addImage2 from '../../assets/add2.jpg'
const Details = () => {
    const id = useParams();
    const { data, loading } = useMyAds();
    if (loading) {
        return <div>Loading...</div>;
    }
    console.log(data);
    console.log(id);

    const matchingData = data && data.find(item => item.id === parseInt(id.id));
    console.log(matchingData);

    const { image, description, price } = matchingData;

    return (
        <div>
            <div className="detailsBanner mb-5 position-relative">
                <div className="text-white text-uppercase py-5">
                    <div className="py-5 text-center">
                        <h1>CAMEL-</h1>
                        <h1>Lorem, ipsum dolor.</h1>
                    </div>
                    <div className="position-absolute bottom-0 end-0">
                        <p className="m-4 fw-bold">icon AD POSTED: <span className="fw-medium">13-06-2023</span></p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <Carousel>
                            <div>
                                <img src={image} />
                            </div>
                            <div>
                                <img src={imgCamel} />
                            </div>
                            <div>
                                <img src={imgCamel} />
                            </div>
                        </Carousel>
                        <div>
                            <h3>Description</h3>
                            <p>{description}</p>
                            <div className="d-flex justify-content-between">
                                <div><h3>PRICE: {price}</h3></div>
                                <div><h3>WEIGHT: 180KG</h3></div>
                            </div>
                            <button className="shopNow">SHOP NOW</button> <FaRegHeart className="shopNowHeart"></FaRegHeart>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={addImage} className="img-fluid shadow-lg rounded-3" alt="" />
                        <img src={addImage2} className="img-fluid shadow-lg rounded-3 w-100" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import imgCamel from '../../assets/detailsCamel.png'
import useMyAds from "../../Hooks/useMyAds";
import { FaRegHeart, FaFlag, FaShareAlt, FaAngleRight } from "react-icons/fa";
import { BsFillXCircleFill } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import addImage from '../../assets/add1.jpg'
import addImage2 from '../../assets/add2.jpg'
import SingleAdd from "../../Components/SingleAdd";
import { Col, Row } from "react-bootstrap";
import SectionTitle from "../../Components/SectionTitle";
import Slider from "../Shared/Slider";

import avatar from '../../assets/avatar.png'
import callIcon from '../../assets/call.png'
import chatIcon from '../../assets/chat.png'
import { useState } from "react";

const Details = () => {

    const [showPhoneNumber, setShowPhoneNumber] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');

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

    const handleClick = () => {
        if (!showPhoneNumber) {
            setPhoneNumber('123-456-7890'); // Replace with your desired phone number
        }
        setShowPhoneNumber(!showPhoneNumber);
    };

    return (
        <div>
            <div>
                <Slider />
            </div>
            {/* <div className="detailsBanner mb-5 position-relative">
                <div className="text-white text-uppercase py-5">
                    <div className="py-5 text-center">
                        <h1>CAMEL-</h1>
                        <h1>Lorem, ipsum dolor.</h1>
                    </div>
                    <div className="position-absolute bottom-0 end-0">
                        <p className="m-4 fw-bold">icon AD POSTED: <span className="fw-medium">13-06-2023</span></p>
                    </div>
                </div>
            </div> */}
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-8 card border rounded-3 p-3">
                        <Carousel>
                            <div>
                                <img src={imgCamel} />
                            </div>
                            <div>
                                <img src={imgCamel} />
                            </div>
                            <div>
                                <img src={image} />
                            </div>
                        </Carousel>
                        <div className="mb-4">
                            <h3>Description</h3>
                            <p className="lh-base">{description}</p>
                            <div className="d-flex justify-content-between">
                                <div><h3>PRICE: {price}</h3></div>
                                <div><h3>WEIGHT: 180KG</h3></div>
                            </div>
                            <button className="shopNow">SHOP NOW</button> <FaRegHeart className="shopNowHeart"></FaRegHeart>
                        </div>
                        <div className="float-end">
                            <hr />
                            <p className="float-end"><FaFlag /> Report this ad</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="rounded-3 shadow p-4">
                            <div className="d-flex w-100">
                                <img src={avatar} className="addAvatar" alt="" />
                                <div className="addContent">
                                    <h4>Name</h4>
                                    <p>Member Since 14 May, 2022</p>
                                    <a href="#">View Profile <FaAngleRight /></a>
                                    <div className="addButtons mt-5 w-100">
                                        <button className="callBtn w-100" onClick={handleClick}>
                                            <img src={callIcon} alt="" />
                                            {showPhoneNumber ? phoneNumber : 'SHOW PHONE NUMBER'}
                                        </button>
                                        <br />
                                        <button className="chatBtn"><img src={chatIcon} alt="" />CHAT NOW</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center align-content-center bg-white shadow-lg my-4 z-3 rounded-3">
                            <h4 className="display-5"><IoLocationOutline /></h4>
                            <div className="ms-5 mt-2">
                                <h4>LOCATION</h4>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                        <div className="position-relative">
                            <img src={addImage2} className="img-fluid shadow-lg rounded-3 w-100" alt="" />
                            <div className="position-absolute m-3 text-white" style={{ top: '0', right: '0' }}>
                                <FaShareAlt className="mx-2" style={{ cursor: "pointer" }} /> <BsFillXCircleFill style={{ cursor: "pointer" }} />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <SectionTitle
                            heading={"featured posts"}
                            subHeading={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh."}
                        ></SectionTitle>
                    </div>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        {
                            data.map((myAdd, index) =>
                                <Col key={index}>
                                    <SingleAdd
                                        myAdd={myAdd}
                                    ></SingleAdd>
                                </Col>
                            )
                        }
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Details;
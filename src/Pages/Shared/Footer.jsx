import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedinIn, FaLocationArrow, FaMobile } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const Footer = () => {
    return (
        <div>
            <footer style={{ backgroundColor: '#1C02BD' }} className="container-fluid text-white p-5">
                <div>
                    <div className="row">
                        <div className="col-md-4 col-12">
                            <div>
                                <h2 className="fs-1">Logo</h2>
                            </div>
                            <div>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab officiis velit delectus beatae veritatis id ea modi odit, laborum at. Dignissimos eos omnis ipsa quis eaque doloribus, qui quia nihil.
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <h4>Quick Links</h4>
                            <Link className="text-decoration-none text-white">Home</Link>
                            <br />
                            <Link className=" text-decoration-none text-white">Home</Link>
                            <br />
                            <Link className=" text-decoration-none text-white">Home</Link>
                        </div>
                        <div className="col-md-4 col-12">
                            <h4>Social Media</h4>
                            <FaFacebook className="" />
                            <FaLinkedinIn className="mx-3" />
                        </div>
                    </div>
                    <div style={{ marginTop: '66px' }} className="d-flex flex-md-row flex-column justify-content-between bg-white text-black align-items-center p-2">
                        <div>
                            <p className="mt-3"><FaMobile /> 000 1111 2222</p>
                        </div>
                        <div>
                            <p className="mt-3"><FaLocationArrow /> Lorem Ipsum</p>
                        </div>
                        <div>
                            <HiOutlineMail /> Lorem Ipsum
                        </div>
                    </div>
                </div>
                <div className="mt-4 mb-3">
                    <hr />
                </div>
                <div className="d-flex justify-content-between footerBottom">
                    <div className="">
                        <p>Copyright © 2023 Website.All rights reserved.</p>
                    </div>
                    <div className="d-flex flex-wrap">
                        <Link className="mx-1 text-decoration-none text-white">Privacy Statement</Link>
                        <Link className="mx-1 text-decoration-none text-white">Terms & Conditions</Link>
                        <Link className="mx-1 text-decoration-none text-white">Accessibility Notice</Link>
                        <Link className="mx-1 text-decoration-none text-white">Disclaimers</Link>
                        <Link className="mx-1 text-decoration-none text-white">Site Map</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
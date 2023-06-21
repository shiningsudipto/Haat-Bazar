import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaCircle } from "react-icons/fa";

const SingleAdd = ({ myAdd }) => {
    const { name, price, image, id, weight } = myAdd;
    // console.log("single add", myAdd);


    return (
        <Card className="h-100">
            <div className="position-relative">
                <Card.Img variant="top" src={image} className="myAddImg" />
                <div className="availableBtn position-absolute top-0 end-0 bg-white rounded-2 fw-medium px-2 py-1 m-3">
                    <p className="availableBtnP"><FaCircle className="availableBullet" /> Available</p>
                </div>

            </div>
            <Card.Body className="p-2">
                <div className="d-flex justify-content-between">
                    <Card.Title className="fw-bold fs-4 text-uppercase">{name}</Card.Title>
                    <button className=" featured-btn ">Featured</button>
                </div>
                <div className="d-flex justify-content-between my-2">
                    <h5>{weight}</h5>
                    <h4 className="fw-bolder">{price}</h4>
                </div>
                <div>
                    <Link to={`/details/${id}`} className="btn text-white viewMore w-100 fw-fw-semibold text-uppercase" style={{ backgroundColor: "#1C02BD" }}>view details</Link>
                </div>
            </Card.Body>
        </Card>
    );
};

export default SingleAdd;
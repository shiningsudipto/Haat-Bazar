import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleAdd = ({ myAdd }) => {
    const { name, price, description, image, id } = myAdd;
    console.log("single add", myAdd);

    // const handleVIewMore=(id)=>{

    // }

    return (
        <Card className="h-100">
            <Card.Img variant="top" src={image} className="myAddImg" />
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <Card.Title className="fw-bold fs-4 text-uppercase">{name}</Card.Title>
                    <h3 >{price}</h3>
                </div>
                <Card.Text>
                    {description}
                </Card.Text>
                <Link to={`/details/${id}`} className="viewMore">view more</Link>
            </Card.Body>
        </Card>
    );
};

export default SingleAdd;
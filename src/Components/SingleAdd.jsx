import { Card } from "react-bootstrap";

const SingleAdd = ({ myAdd }) => {
    const { name, price, description, image } = myAdd;
    console.log("single add", myAdd);
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
                <button className="viewMore">view more</button>
            </Card.Body>
        </Card>
    );
};

export default SingleAdd;
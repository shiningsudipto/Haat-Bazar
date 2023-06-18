import { Card } from "react-bootstrap";

const SingleAdd = ({ myAdd }) => {
    const { name, price, description, image } = myAdd;
    console.log("single add", myAdd);
    return (
        <Card>
            <Card.Img variant="top" src={image} className="myAddImg" />
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <Card.Title>{name}</Card.Title>
                    <h3>{price}</h3>
                </div>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default SingleAdd;
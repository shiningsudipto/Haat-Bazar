import { Col, Row } from "react-bootstrap";
import SectionTitle from "../../Components/SectionTitle";
import SingleAdd from "../../Components/SingleAdd";
import useMyAds from "../../Hooks/useMyAds";

const MyAds = () => {
    const { data, loading } = useMyAds();
    console.log(data);
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className="container mb-5">
            <div>
                <SectionTitle
                    heading={"my ads"}
                    subHeading={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh."}
                ></SectionTitle>
            </div>
            <Row className="g-4">
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
    );
};

export default MyAds;
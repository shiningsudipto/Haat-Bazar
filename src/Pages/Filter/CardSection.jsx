import React from 'react';
import { Col, Row } from "react-bootstrap";
import SingleAdd from "../../Components/SingleAdd";
import useMyAds from "../../Hooks/useMyAds";


const CardSection = ({data}) => {
    // const { data, loading } = useMyAds();
  
    // if(loading){
    //     return <div>  Loading... </div>
    // }
    return (
        <div>
           <div className="container">
            <div>
              
            </div>
            <Row xs={1} md={2} lg={3} className="g-4">
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
    );
};

export default CardSection;